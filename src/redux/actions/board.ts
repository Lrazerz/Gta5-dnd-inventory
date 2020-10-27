import {
  BOARD_ALL_ITEMS_RELEASE,
  BOARD_CURRENT_COUNT_CHANGE, BOARD_SET_SQUARE_SIZE,
  EQUIPPED_STATE_CHANGE,
  SINGLE_ITEM_SQUARES_FILL,
  SQUARES_FILL,
  SQUARES_RELEASE
} from "./types";
import store from "../store";
import {setEquippedItems} from "./equippedItems";
import {ItemCategories} from "../../constants/dnd/categories";
import {xMax, xMin, yMax, yMin} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import DummyImage from '../../assets/dummy/weapon.png';
import {translateToServerItem} from "../../utils/translateToServerItem";
//'https://i.ibb.co/HCn40jg/weapon-2.png'

const importItemImage: (itemName: string) => Promise<any> = async (itemName) => {
  let imageUrl;
  try {
    imageUrl = await import(`../../assets/images/items/${itemName.toLowerCase()}.png`);
    return imageUrl;
  } catch (e) {
    if(e.code === 'MODULE_NOT_FOUND') {
      // console.log(`image for "${Name}" not found, using default image.`)
    } else {
      console.log('error while importing image');
    }
  }
}

const openOrRefreshInventory = async (info) => {
  const values = JSON.parse(info).$values;

  // equipped
  const enabledItems = [];
  const boardItems = [];

  for(const propName in values) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = values[propName];

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
      SizeX, SizeY, CurrentCount, MaxCount,
      ImageUrl, Enabled, IsRotated, rest);


    if (Enabled === true) {
      enabledItems.push(FullItem);
    }
    else {
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

      boardItems.push({...FullItem, squares: filledSquares});
    }
  }

  // @ts-ignore
  store.dispatch(_addItems(boardItems));
  // @ts-ignore
  store.dispatch(setEquippedItems(enabledItems));
}

// _addItems: 1. check every item from derived, find on board and check all props on equality; 2. check all board items
// and if there is additional items - isAnyChanges = true and set all arrived items except checked items

// todo maybe this checks won't speed up project
const _addItems = (items: Item[]) => {
  return (dispatch, getState) => {
    if(items.length === 0) dispatch(_releaseAllItems());

    const board = getState().board.board;
    let isAnyChanges = false;
    // checked items from items param (equal (with props) to items on board)
    const checkedItems = [];

    //region ------------------------------ Check every item, find relative item on board ------------------------------
    for(let i = 0; i < items.length; i++) {
      const item = items[i];
      const [mainCellX, mainCellY] = item.mainCell;
      const boardSquare = board[mainCellY][mainCellX];

      if(boardSquare) {
        // board has item from arrived items

        for(const key in item) {
          // check all props, if smth changed - set up isAnyChanges to true
          if(!boardSquare[key] || boardSquare[key] !== item[key]) {
            isAnyChanges = true;
            break;
          }
        }
      } else {
        isAnyChanges = true;
      }

      if(isAnyChanges) {
        break;
      }
      else {
        checkedItems.push(item);
      }
    }
    //endregion

    if(!isAnyChanges) {
      //region ------------------------------ Check every board square and find relative checked item ------------------------------
      for(let y = yMin; y <= yMax; y++) {
        for(let x = xMin; x <= xMax; x++) {
          const boardSquare = board[y][x];

          //region --------------------------- If no item in the checkedItems or props differs - changes ---------------------------
          if(boardSquare) {
            // if have item at the selected square

            // find item among the chechedItems
            const checkedItemIdx = checkedItems.findIndex(item => item.id === boardSquare.id);
            if(!checkedItemIdx) {
              // there is no such item in the checkedItems
              isAnyChanges = true;
              // to break outer loop too
              y = yMax + 1;
              break;
            }
            else {
              // there is such item in the checkedItems
              for(const key in boardSquare) {
                if(boardSquare[key] !== checkedItems[checkedItemIdx][key]) {
                  // if any
                  isAnyChanges = true;
                  break;
                }
              }

              if(isAnyChanges) {
                y = yMax + 1;
                break;
              }
            }
          }
          //endregion
        }
      }
      //endregion
    }

    if(isAnyChanges) {
      dispatch({type: SQUARES_FILL, items});
    }
  }
}

const _removeItem = (coordsArr) => {
  return {type: SQUARES_RELEASE, squares: coordsArr};
}

const _changeEquippedState = (squares, item) => {
  return {type: EQUIPPED_STATE_CHANGE, squares, item};
}

const _releaseAllItems = () => {
  return {type: BOARD_ALL_ITEMS_RELEASE};
}

const setSquareSize = (squareSize) => {
  return {type: BOARD_SET_SQUARE_SIZE, size: squareSize};
}

const addItemBySquares = (squares, item: Item) => {
  return {type: SINGLE_ITEM_SQUARES_FILL, squares, item};
}

// add item fetched from draggedItem
const addItem = () => {
  return (dispatch, getState) => {
    const {hoveredSquare, allHoveredSquares, xDown, yDown, item: draggedItem} = getState().draggedItem;

    const newDraggedItem = {...draggedItem};

    newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];

    newDraggedItem.isEquipped = false;

    if(typeof hoveredSquare === 'number' && newDraggedItem.isWeaponEquipped) {
      // if item derived from eq items and it is weapon (isWeaponEquipped can be true only on weapons)
      newDraggedItem.isWeaponEquipped = false;
     }

    dispatch(addItemBySquares(allHoveredSquares, newDraggedItem));
    // translate to Server Item
    const itemToServer = translateToServerItem(newDraggedItem);
    //@ts-ignore
    mp.trigger('cef_cl_moveItem', itemToServer);
  }
}

// mainCell, width, height
const removeItem = ([x, y], width = 1, height = 1) => {
  return dispatch => {
    // more precisely "squares to remove"
    const itemsToRemove = [];
    for (let currX = x; currX < x + width; currX++) {
      for (let currY = y; currY < y + height; currY++) {
        itemsToRemove.push([currX, currY]);
      }
    }

    dispatch(_removeItem(itemsToRemove));
  }
}

const removeItemFromBoard = (id) => {
  return (dispatch, getState) => {
    const {board} = getState().board;

    const squaresToRemove = [];

    for(let y = yMin; y <= yMax; y++) {
      for(let x = xMin; x <= xMax; x++) {
        if(board[y][x] && board[y][x].id === id) {
          squaresToRemove.push([x,y]);
        }
      }
    }

    dispatch(_removeItem(squaresToRemove));
  }
}

const changeEquippedState = (item, newState) => dispatch => {
  // invoke only in SquareCommonItem
  const newItem = {...item};
  // newState === isEquipped
  const squares = [];

  newItem.isWeaponEquipped = newState;

  // todo if rotated maybe change logic?
  for(let y = newItem.mainCell[1]; y < newItem.mainCell[1] + newItem.height; y++) {
    for(let x = newItem.mainCell[0]; x < newItem.mainCell[0] + newItem.width; x++) {
      squares.push([x,y]);
    }
  }
  dispatch(_changeEquippedState(squares, newItem));
}

const boardChangeCurrentCountByItemId = (id, newCurrentCount) => {
  return (dispatch, getState) => {
    const boardCells = getState().board.board;

    const requiredCells = [];

    boardCells.forEach((row, yPos) => {
      row.forEach((item, xPos) => {
        if(item && item.id === id) {
          requiredCells.push([xPos, yPos]);
        }
      });
    });

    if(newCurrentCount === 0) {
      return _removeItem(requiredCells);
    }
    dispatch({type: BOARD_CURRENT_COUNT_CHANGE, squares: requiredCells, newCurrentCount});
  }
}



export {
  addItem,
  // to rotate non-dragged item
  addItemBySquares,
  removeItem,
  openOrRefreshInventory,
  changeEquippedState,
  removeItemFromBoard,
  boardChangeCurrentCountByItemId,
  setSquareSize,
  importItemImage
}