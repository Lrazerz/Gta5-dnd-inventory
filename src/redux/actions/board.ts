import {SINGLE_ITEM_SQUARES_FILL, SQUARES_RELEASE, SQUARES_FILL} from "./types";
import {xMax, xMin, yMax, yMin} from "../../constants/boardDimensions";
import store from "../store";
import {setAlert} from "./alert";
import {setEquippedItems} from "./equippedItems";
import ItemToBoard from "../../models/ItemToBoard";
import {ItemCategories} from "../../constants/dnd/categories";
import Item from "../../models/Item";

// mainCell, width, height // mainCell = [x,y]
// const _addInventory = (boxId,x,y) => {
//   return (dispatch, getState) => {
//     const {board} = getState().board;
//
//     const allAddedSquares = [];
//     let alertMsg = '';
//
//     for (let i = boxId[0]; i < boxId[0] + x; i++) {
//       for (let j = boxId[1]; j < boxId[1] + y; j++) {
//         allAddedSquares.push([i, j]);
//       }
//     }
//
//     let canAdd = true;
//
//     // check if item can be placed (inside borders, not overriding other items)
//     for (let i = xMin; i <= xMax; i++) {
//       for (let j = yMin; j <= yMax; j++) {
//         allAddedSquares.forEach(hoveredSquare => {
//           const [hoveredX, hoveredY] = hoveredSquare;
//           if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
//             canAdd = false;
//             alertMsg = 'The object can not be placed outside the AppBoard.\n' +
//               'The AppBoard has the following coordinates:\n' +
//               `x: ${xMin} - ${xMax}\ny: ${yMin} - ${yMax}`;
//           } else if (hoveredX === i && hoveredY === j) {
//             if (board[j][i] !== null) {
//                 canAdd = false;
//               alertMsg = 'The object can not be placed on the other object!';
//             }
//           }
//         });
//       }
//     }
//
//     if(canAdd) {
//       dispatch(_addItems(allAddedSquares, boxId, x, y));
//     } else {
//       dispatch(setAlert('Sorry. ' + alertMsg, 'danger'));
//     }
//   }
// }

// add function to be able use from console (from server)
// window.addInventory = (boxId, x, y) => store.dispatch(_addInventory(boxId, x, y));

// @ts-ignore
window.openInventory = (info) => {
  // some fields differ depending on type, etc
  // array with {"$type":..., WeaponHash, MagazineCount, Category, Name, Info, Enabled,

  // array, need only Name, SizeX, SizeY, Enabled, CurrentCount, mb WeaponHash, Category

  // todo maybe
  const values = info.$values;

  // equipped
  const enabledItems = [];

  const boardItems: ItemToBoard[] = [];

  values.forEach(item => {
    // map through every item and add to corresponding array
    // item - single item with its own sizes

    // Square numbers starts from 1 instead of 0
    const {
      ID, Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount = 1
      , imageUrl
    } = item;

    const category: ItemCategories = item.Category.toLowerCase();

    // First check if enabled === false

    if(Enabled === true) {
      // If item is equipped

      const FullItem = {
        id: ID,
        name: Name,
        category,

        mainCell: PosNumberLeftAngle,
        width: SizeX,
        height: SizeY,

        currentCount: CurrentCount,
        // imageUrl: imageUrl ||
        //   'https://w7.pngwing.com/pngs/449/464/png-transparent-computer-icons-' +
        //   'symbol-hollow-question-mark-miscellaneous-angle-text.png'
        imageUrl: imageUrl ||
          'https://i.ibb.co/HCn40jg/weapon-2.png'
      }
      enabledItems.push(FullItem);
    }
    else {
      // if item is not equipped we need to fill squares (border item)

      // translate PosNumberLeftAngle to [x,y]
      const mainCellY = Math.floor(PosNumberLeftAngle / 16);
      const mainCellX = PosNumberLeftAngle % 16 - 1;

      const filledSquares: [[number,number]] | [] = [];

      for (let i = mainCellX; i < mainCellX + SizeX; i++) {
        for (let j = mainCellY; j < mainCellY + SizeY; j++) {
          // @ts-ignore
          filledSquares.push([i, j]);
        }
      }

      const BoardItem = new ItemToBoard(ID, Name, category, [mainCellX, mainCellY],
        SizeX, SizeY, filledSquares, CurrentCount, imageUrl ||
        // 'https://i.ibb.co/R3Whjts/Pngtree-chalk-brush-texture-decorative-vector-3786413.png');
        'https://i.ibb.co/HCn40jg/weapon-2.png');

        // 'https://w7.pngwing.com/pngs/449/464/png-transparent-computer-icons-' +
        // 'symbol-hollow-question-mark-miscellaneous-angle-text.png')

      boardItems.push(BoardItem);
    }

    store.dispatch(_addItems(boardItems));
    store.dispatch(setEquippedItems(enabledItems));
  });

}

const _addItem = (squares, item: Item) => {
  return {type: SINGLE_ITEM_SQUARES_FILL, squares, item};
}

const _addItems = (items) => {
  return {type: SQUARES_FILL, items};
}

const _removeItem = (coordsArr) => {
  return {type: SQUARES_RELEASE, squares: coordsArr};
}

// add item fetched from draggedItem
const addItem = ([x, y]) => {
  return (dispatch, getState) => {
    const {allHoveredSquares, xDown, yDown, item} = getState().draggedItem;
    item.mainCell = [x-xDown, y-yDown];

    dispatch(_addItem(allHoveredSquares, item));
  }
}

// remove items from AppBoard
const removeItem = ([x, y], width = 1, height = 1) => {
  return dispatch => {
    const itemsToRemove = [];
    for (let currX = x; currX < x + width; currX++) {
      for (let currY = y; currY < y + height; currY++) {
        itemsToRemove.push([currX, currY]);
      }
    }

    dispatch(_removeItem(itemsToRemove));
  }
}

export {
  addItem,
  removeItem
}