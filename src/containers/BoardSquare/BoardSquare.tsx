import React, {useState, useEffect} from 'react'
import Square from "../../components/Square/Square";
import {AllItemTypes, ItemTypes} from "../../constants/dnd/types";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../../redux/actions/board";
import Overlay from "../../components/UI/Overlay";
import {setHoveredSquares} from "../../redux/actions/draggedItem";
import classes from '../../styles/board/BoardSquare.module.scss';
import theme from "../../constants/css/theme";
import {removeEquippedItem} from "../../redux/actions/equippedItems";
import board from "../../redux/reducers/board";

const BoardSquare = ({coords: [x, y], children, isHovered}) => {

  const {hoveredSquare, canDrop: canDropRedux, item: draggedItem} =
    // @ts-ignore - AppBoard does not exists on DefaultRootState
    useSelector(({draggedItem}) => draggedItem);

  const dispatch = useDispatch();

  // const [{}, drop] = useDrop({
  //   accept: AllItemTypes,
  //   drop: (DNDItem, monitor) => {
  //     if (monitor.canDrop()) {
  //       // if the same item
  //       if(typeof draggedItem.mainCell === 'object' &&
  //         draggedItem.mainCell[0] === x - xDown && draggedItem.mainCell[1] === y - yDown) {
  //         return;
  //       }
  //       // @ts-ignore
  //       if (DNDItem.isInventory) {
  //         // check if weapon - remove prev (transparent) weapon from board
  //         if(draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
  //         || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
  //           dispatch(removeItem(draggedItem.mainCellOnBoard, draggedItem.width, draggedItem.height));
  //         }
  //         dispatch(removeEquippedItem(draggedItem.mainCell));
  //       } else {
  //         dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
  //       }
  //       dispatch(addItem([x, y]));
  //     }
  //   },
  //   hover: (DNDItem, monitor) => {
  //     if (monitor.isOver({shallow: true})) {
  //       if (!hoveredSquare || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
  //         dispatch(setHoveredSquares([x, y]));
  //       }
  //     }
  //   },
  //   canDrop: () => canDropRedux
  // });
  const drop = null;

  let boardSquareStyles;

   boardSquareStyles = {
    pointerEvents: (hoveredSquare && typeof hoveredSquare === 'object' && (hoveredSquare[0] === x && hoveredSquare[1] === y) ) ? 'none' : 'inherit',
   }


  // if(x === 0 && y === 0) console.log('pointerevents', boardSquareStyles.pointerEvents + '\n', hoveredSquare);


  const squareMouseOverHandler = (e) => {
     e.persist();
    if (draggedItem) {
      if (!hoveredSquare || typeof hoveredSquare !== 'object' || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
        dispatch(setHoveredSquares([x, y]));
      }
    }
  }

  // todo was div ref=drop style=styles
  // let styles = {outline: `1px solid rgba(109, 114, 125, 0.8)`};
  // @ts-ignore
  boardSquareStyles = {...boardSquareStyles, outline: `0.25px solid rgba(109, 114, 125, 0.8)`};


  // if (isOver) {
  //   // @ts-ignore
  //   // boardSquareStyles = {...boardSquareStyles, outline: `0.25px solid rgba(109, 114, 125, 0.8)`};
  // }

  if(draggedItem) {
    boardSquareStyles = {...boardSquareStyles, zIndex: 200};
    if (children) {
      boardSquareStyles = {...boardSquareStyles, outline: 'none'};
    }
  }

  return (
    // @ts-ignore
    <div ref={drop} className={classes.BoardSquare} style={boardSquareStyles}
         onMouseOver={squareMouseOverHandler}>
      <Square>{children}</Square>
      {isHovered && !canDropRedux && <Overlay color={theme.colors.danger}/>}
      {isHovered && canDropRedux && <Overlay color={theme.colors.success}/>}
    </div>
  )
}

export default BoardSquare;