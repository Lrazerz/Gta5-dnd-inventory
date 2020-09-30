import {DRAGGED_ITEM_SET, HOVERED_SQUARES_SET, HOVERED_SQUARES_REMOVE, DRAGGED_ITEM_RELEASE} from "./types";
import {xMin, xMax, yMin, yMax} from "../../constants/boardDimensions";

const _addDraggedItem = (item, xUp, xDown, yUp, yDown) => {
  return {type: DRAGGED_ITEM_SET, item, xUp, xDown, yUp, yDown};
};

const _setHoveredSquares = (squareCoords, allHoveredSquares, canDrop, isHoveredEquipped) => {
  return {type: HOVERED_SQUARES_SET, square: squareCoords, squares: allHoveredSquares, canDrop,
    isHoveredEquipped: isHoveredEquipped};
};

const draggedItemRelease = () => {
  return {type: DRAGGED_ITEM_RELEASE};
};

const removeHoveredSquares = () => {
  return {type: HOVERED_SQUARES_REMOVE};
}

const addDraggedItem = ([x, y], item) => {
  return dispatch => {
    let xUp, yUp, xDown, yDown, xAver, yAver;

    if (!item.isEquipped) {
      // const [mainCellX, mainCellY] = item.mainCell;
      // // Maximum X and Y for given item (border)
      // const xMax = mainCellX + item.width - 1;
      // const yMax = mainCellY + item.height - 1;
      //
      // // How many squares right from dragged point item fills (===0 when item 1x1 Square)
      // xUp = xMax - x;
      // // How many squares up from dragged point item fills
      // yUp = yMax - y;
      // // How many squares left from dragged point item fills
      // xDown = x - mainCellX;
      // // How many squares down from dragged point item fills
      // yDown = y - mainCellY;
      const [mainCellX, mainCellY] = item.mainCell;

      // average X and Y for aligning
      if(item.width % 2 === 0) {
        xAver = mainCellX + item.width / 2 - 1;
      } else {
        xAver = mainCellX + Math.floor(item.width / 2);
      }

      if(item.height % 2 === 0) {
        yAver = mainCellY + item.height / 2 - 1;
      } else {
        yAver = mainCellY + Math.floor(item.height / 2);
      }

      xUp = mainCellX + item.width - 1 - xAver;
      xDown = xAver - mainCellX;

      yUp = mainCellY + item.height - 1 - yAver;
      yDown = yAver - mainCellY;

      // set hovered squares
      const hoveredSquares = [];

      for (let i = x - xDown; i <= x + xUp; i++) {
        for (let j = y - yDown; j <= y + yUp; j++) {
          hoveredSquares.push([i, j]);
        }
      }

      dispatch(_addDraggedItem(item, xUp, xDown, yUp, yDown));
      dispatch(_setHoveredSquares([x, y], hoveredSquares, true, false));
    }
    else {
      if(item.width % 2 === 0) {
        xUp = item.width / 2;
        xDown = item.width / 2 - 1;
      } else {
        xUp = Math.floor(item.width / 2);
        xDown = Math.floor(item.width / 2);
      }

      if(item.height % 2 === 0) {
        yUp = item.height / 2;
        yDown = item.height / 2 - 1;
      } else {
        yUp = Math.floor(item.height / 2);
        yDown = Math.floor(item.height / 2);
      }

      console.log(item, xUp, xDown, yUp, yDown);
      dispatch(_addDraggedItem(item, xUp, xDown, yUp, yDown));
    }
  };
};

const setHoveredSquares = (hoveredSquare, isHoveredEquipped = false, allowedCategory = null) => {
  return (dispatch, getState) => {
    const {draggedItem: {xDown, xUp, yDown, yUp, item}, board: {board}, equippedItems: {cells: equippedCells}} = getState();

    let canDrop = true;
    let allHoveredSquares = [];

    if(!isHoveredEquipped) {
      const [x,y] = hoveredSquare;
      //if board hovered

      // let mainCell = item.mainCell;

      // if (typeof item.mainCell === 'number') {
      //   // x, y - coords of hovered square
      //   mainCell = [x, y];
      // }


      for (let i = x - xDown; i <= x + xUp; i++) {
        for (let j = y - yDown; j <= y + yUp; j++) {
          allHoveredSquares.push([i, j]);
        }
      }
      // here we want to check canDrop

        if(canDrop) {
          allHoveredSquares.forEach(hoveredSquare => {
            const [hoveredX, hoveredY] = hoveredSquare;
            // if outside the border
            if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
              canDrop = false;
            } else if (board[hoveredY][hoveredX] !== null && board[hoveredY][hoveredX].id !== item.id) {
              canDrop = false;
            }
          });
        }

      // for (let i = xMin; i <= xMax; i++) {
      //   for (let j = yMin; j <= yMax; j++) {
      //     allHoveredSquares.forEach(hoveredSquare => {
      //       const [hoveredX, hoveredY] = hoveredSquare;
      //       // if outside the border
      //       if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
      //         canDrop = false;
      //       } else if (hoveredX === i && hoveredY === j) {
      //         if (board[j][i] !== null) {
      //           // if (hoveredX < mainCell[0] || hoveredX > mainCell[0] + item.width - 1
      //           //   || hoveredY < mainCell[1] || hoveredY > mainCell[1] + item.height - 1) {
      //           //   // if hovered square exists outside prev item location,
      //           //   // because we can drag big items on 1 square
      //           //   canDrop = false;
      //           // }
      //           if(board[j][i].id !== item.id) {
      //             canDrop = false;
      //           }
      //         }
      //       }
      //     });
      //   }
      // }
    }
    else {
      // check category and check can we drop if drop to equippedItem
      // allHoveredSquares = [hoveredSquare];

      if(allowedCategory !== item.category) {
        //check category
        canDrop = false;
      } else if (equippedCells[hoveredSquare].item !== null && equippedCells[hoveredSquare].item.id !== item.id) {
        canDrop = false;
      }
    }

    dispatch(_setHoveredSquares(hoveredSquare, allHoveredSquares, canDrop, isHoveredEquipped));
  }
};

export {
  addDraggedItem,
  draggedItemRelease,
  setHoveredSquares,
  removeHoveredSquares
}