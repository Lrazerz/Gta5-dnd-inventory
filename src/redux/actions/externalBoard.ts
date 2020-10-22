import {CLOSE_EXTERNAL_BOARD, OPEN_EXTERNAL_BOARD} from "./types";
import {importItemImage} from "./board";
// @ts-ignore
import DummyImage from "../../assets/dummy/weapon.png";
import {ItemCategories} from "../../constants/dnd/categories";
import Item from "../../models/Item";
import {xMax} from "../../constants/boardDimensions";

const openExternalBoard = async (info) => {

  const externalBoardItems = [];

  const parsedInfo = JSON.parse(info);

  const values = parsedInfo.values;
  const boardSizeX = parsedInfo.BoardSizeX;
  const boardSizeY = parsedInfo.BoardSizeY;

  for(let i = 0; i < values.length; i++) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = values[i];

    // Square numbers starts from 1 instead of 0
    let {
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount, MaxCount, IsRotated, ...rest
    } = item;
    const ID = item.ID.toString();

    //region ------------------------------ Import image ------------------------------

    let ImageUrl = await importItemImage(Name);

    if(ImageUrl) {
      ImageUrl = ImageUrl.default;
    } else {
      ImageUrl = DummyImage;
    }
    //endregion

    const category: ItemCategories | string = item.Category.toLowerCase();

    let FullItem: Item;

    if(IsRotated) {
      // swap width and height
      const tmp = SizeX;
      SizeX = SizeY;
      SizeY = tmp;
    }

    FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
      SizeY, SizeX, CurrentCount, MaxCount,
      ImageUrl, Enabled, IsRotated, rest);

    const mainCellY = Math.floor(PosNumberLeftAngle / (xMax + 1));
    const mainCellX = PosNumberLeftAngle % (xMax + 1) - 1;

    const filledSquares: [[number, number]] | [] = [];

    for (let i = mainCellX; i < mainCellX + SizeX; i++) {
      for (let j = mainCellY; j < mainCellY + SizeY; j++) {
        // @ts-ignore
        filledSquares.push([i, j]);
      }
    }

    FullItem.mainCell = [mainCellX, mainCellY];

    externalBoardItems.push({...FullItem, squares: filledSquares});

  }

  // make new board
  const newBoard = [];

  for(let y = 0; y < boardSizeY; y++) {
    newBoard.push([]);
    for(let x = 0; x < boardSizeX; x++) {
      newBoard[y][x] = null;
    }
  }

  externalBoardItems.forEach(itemAndSquares => {
    const {squares, ...itemProps} = itemAndSquares;
    squares.forEach(square => {
      newBoard[square[1]][square[0]] = {
        ...itemProps
      };
    });
  });

  return {type: OPEN_EXTERNAL_BOARD, newBoard};
}

const closeExternalBoard = () => {
  return {type: CLOSE_EXTERNAL_BOARD}
}

export {openExternalBoard, closeExternalBoard};