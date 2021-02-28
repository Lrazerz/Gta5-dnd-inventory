import store from '../../../redux/store';
import { closeExternalBoard, openExternalBoard } from '../../../redux/actions/inventory/externalBoard';
import { setEquippedItems } from '../../../redux/actions/inventory/equippedItems';
import ItemModel from '../../../inventory/models/ItemModel';
import { ItemCategories } from '../../../inventory/constants/dnd/categories';
import { xMax } from '../../../inventory/constants/boardDimensions';
import { addItems } from '../../../redux/actions/inventory/board';
import DummyImage from '../../../assets/inventory/dummy/dummy.svg';

const _importItemImage: (itemName: string) => Promise<any> = async (itemName) => {
  let imageUrl;
  try {
    imageUrl = await import(`../../../assets/inventory/images/items/${itemName.toLowerCase()}.svg`);
    return imageUrl;
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.log(`image for "${itemName}" not found, using default image.`);
    } else {
      console.log('error while importing image');
    }
  }
};

const _getEnabledAndBoardItems = async (items: any[]) => {
  const enabledItems = [];
  const boardItems = [];

  for (const propName in items) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = items[propName];

    // Square numbers starts from 1 instead of 0
    let { SizeX, SizeY } = item;
    const { Name, PosNumberLeftAngle, Enabled = false, CurrentCount, MaxCount, IsRotated, ...rest } = item;
    const ID = item.ID.toString();

    //region ------------------------------ Import image ------------------------------
    let ImageUrl = await _importItemImage(Name);

    if (ImageUrl) {
      ImageUrl = ImageUrl.default;
    } else {
      ImageUrl = DummyImage;
    }
    //endregion

    const category: ItemCategories | string = item.Category.toLowerCase();

    //last-change
    const FullItem: ItemModel = new ItemModel(
      ID,
      Name,
      category,
      PosNumberLeftAngle,
      SizeX,
      SizeY,
      CurrentCount,
      MaxCount,
      ImageUrl,
      IsRotated,
      rest,
    );

    if (IsRotated) {
      // swap width and height
      const tmp = SizeX;
      SizeX = SizeY;
      SizeY = tmp;
    }

    if (Enabled === true) {
      enabledItems.push(FullItem);
    } else {
      const mainCellY = Math.floor(PosNumberLeftAngle / (xMax + 1));
      const mainCellX = (PosNumberLeftAngle % (xMax + 1)) - 1;

      const filledSquares: [[number, number]] | [] = [];

      for (let i = mainCellX; i < mainCellX + SizeX; i++) {
        for (let j = mainCellY; j < mainCellY + SizeY; j++) {
          // @ts-ignore
          filledSquares.push([i, j]);
        }
      }

      FullItem.mainCell = [mainCellX, mainCellY];

      boardItems.push({ ...FullItem, squares: filledSquares });
    }
  }

  return { boardItems, enabledItems };
};

const _getExternalBoardItems = async (items: any[]) => {
  const externalBoardItems = [];

  for (const propName in items) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = items[propName];

    // Square numbers starts from 1 instead of 0
    let { SizeX, SizeY } = item;
    const { Name, PosNumberLeftAngle, Enabled = false, CurrentCount, MaxCount, IsRotated, ...rest } = item;
    const ID = item.ID.toString();

    //region ------------------------------ Import image ------------------------------
    let ImageUrl = await _importItemImage(Name);

    if (ImageUrl) {
      ImageUrl = ImageUrl.default;
    } else {
      ImageUrl = DummyImage;
    }
    //endregion

    const category: ItemCategories | string = item.Category.toLowerCase();

    const FullItem: ItemModel = new ItemModel(
      ID,
      Name,
      category,
      PosNumberLeftAngle,
      SizeX,
      SizeY,
      CurrentCount,
      MaxCount,
      ImageUrl,
      IsRotated,
      rest,
    );

    if (IsRotated) {
      // swap width and height
      const tmp = SizeX;
      SizeX = SizeY;
      SizeY = tmp;
    }

    const mainCellY = Math.floor(PosNumberLeftAngle / (xMax + 1));
    const mainCellX = (PosNumberLeftAngle % (xMax + 1)) - 1;

    const filledSquares: [[number, number]] | [] = [];

    for (let i = mainCellX; i < mainCellX + SizeX; i++) {
      for (let j = mainCellY; j < mainCellY + SizeY; j++) {
        // @ts-ignore
        filledSquares.push([i, j]);
      }
    }
    FullItem.mainCell = [mainCellX, mainCellY];

    externalBoardItems.push({ ...FullItem, squares: filledSquares });
  }

  return { externalBoardItems };
};

const window_openOrRefreshInventory = async (info) => {
  const values = JSON.parse(info).$values;

  const { boardItems, enabledItems } = await _getEnabledAndBoardItems(values);

  store.dispatch(closeExternalBoard());
  store.dispatch(addItems(boardItems));
  store.dispatch(setEquippedItems(enabledItems));
};

const window_openDoubleInventory = async (info, externalInfo, externalBoardHeight) => {
  const { $values: values } = JSON.parse(info);
  const { $values: externalValues } = JSON.parse(externalInfo);

  const { boardItems, enabledItems } = await _getEnabledAndBoardItems(values);

  const { externalBoardItems } = await _getExternalBoardItems(externalValues);
  store.dispatch(addItems(boardItems));
  store.dispatch(setEquippedItems(enabledItems));
  store.dispatch(openExternalBoard(externalBoardItems, externalBoardHeight));
};

export { window_openOrRefreshInventory, window_openDoubleInventory };
