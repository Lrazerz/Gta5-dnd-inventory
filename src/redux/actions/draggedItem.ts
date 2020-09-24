import {DRAGGED_ITEM_SET, HOVERED_SQUARES_SET, HOVERED_SQUARES_REMOVE, DRAGGED_ITEM_RELEASE} from "./types";
import {xMin, xMax, yMin, yMax} from "../../constants/boardDimensions";

const _addDraggedItem = (item, xUp, xDown, yUp, yDown) => {
  return {type: DRAGGED_ITEM_SET, item, xUp, xDown, yUp, yDown};
};

const _setHoveredSquares = (squareCoords, allHoveredSquares, canDrop) => {
  return {type: HOVERED_SQUARES_SET, square: squareCoords, squares: allHoveredSquares, canDrop};
};

const draggedItemRelease = () => {
  return {type: DRAGGED_ITEM_RELEASE};
};

const removeHoveredSquares = () => {
  return {type: HOVERED_SQUARES_REMOVE};
}

const addDraggedItem = ([x, y], item, fromInventory = false) => {
  return dispatch => {
    let xUp, yUp, xDown, yDown;

    if (!fromInventory) {
      const [mainCellX, mainCellY] = item.mainCell;
      // Maximum X and Y for given item (border)
      const xMax = mainCellX + item.width - 1;
      const yMax = mainCellY + item.height - 1;

      // How many squares right from dragged point item fills (===0 when item 1x1 Square)
      xUp = xMax - x;
      // How many squares up from dragged point item fills
      yUp = yMax - y;
      // How many squares left from dragged point item fills
      xDown = x - mainCellX;
      // How many squares down from dragged point item fills
      yDown = y - mainCellY;


      // set hovered squares
      const hoveredSquares = [];

      for (let i = x - xDown; i <= x + xUp; i++) {
        for (let j = y - yDown; j <= y + yUp; j++) {
          hoveredSquares.push([i, j]);
        }
      }

      dispatch(_addDraggedItem(item, xUp, xDown, yUp, yDown));

      dispatch(_setHoveredSquares([x, y], hoveredSquares, true));
    } else {
      xUp = item.width - 1;
      yUp = item.height - 1;
      xDown = 0;
      yDown = 0;

      dispatch(_addDraggedItem(item, xUp, xDown, yUp, yDown));
    }
  };
};

const setHoveredSquares = ([x, y]) => {
  return (dispatch, getState) => {
    const {draggedItem: {xDown, xUp, yDown, yUp, item}, board: {board}} = getState();

    let mainCell = item.mainCell;

    if (typeof item.mainCell === 'number') {
      // x, y - coords of hovered square
      mainCell = [x, y];
    }

    const allHoveredSquares = [];

    for (let i = x - xDown; i <= x + xUp; i++) {
      for (let j = y - yDown; j <= y + yUp; j++) {
        allHoveredSquares.push([i, j]);
      }
    }
    // here we want to check canDrop
    let canDrop = true;
    for (let i = xMin; i <= xMax; i++) {
      for (let j = yMin; j <= yMax; j++) {
        allHoveredSquares.forEach(hoveredSquare => {
          const [hoveredX, hoveredY] = hoveredSquare;
          // if outside the border
          if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
            canDrop = false;
          } else if (hoveredX === i && hoveredY === j) {
            if (board[j][i] !== null) {
              // if (hoveredX < mainCell[0] || hoveredX > mainCell[0] + item.width - 1
              //   || hoveredY < mainCell[1] || hoveredY > mainCell[1] + item.height - 1) {
              //   // if hovered square exists outside prev item location,
              //   // because we can drag big items on 1 square
              //   console.log('here');
              //   canDrop = false;
              // }
              if(board[j][i].id !== item.id) {
                canDrop = false;
              }
            }
          }
        });
      }
    }
    dispatch(_setHoveredSquares([x, y], allHoveredSquares, canDrop));
  }
};

export {
  addDraggedItem,
  draggedItemRelease,
  setHoveredSquares,
  removeHoveredSquares
}