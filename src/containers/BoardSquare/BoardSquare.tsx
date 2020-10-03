import React from 'react'
import Square from "../../components/Square/Square";
import {useDispatch, useSelector} from "react-redux";
import Overlay from "../../components/UI/Overlay";
import {invokeOnMouseUp, setHoveredSquares} from "../../redux/actions/draggedItem";
import classes from '../../styles/board/BoardSquare.module.scss';
import theme from "../../constants/css/theme";

const BoardSquare = ({coords: [x, y], children, isHovered}) => {

  const {hoveredSquare, canDrop: canDropRedux, item: draggedItem} = useSelector(({draggedItem}) => draggedItem);

  const dispatch = useDispatch();
  const drop = null;
  const squareMouseOverHandler = (e) => {
     e.persist();
    if (draggedItem) {
      if (!hoveredSquare || typeof hoveredSquare !== 'object' || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
        dispatch(setHoveredSquares([x, y]));
      }
    }
  }
  let boardSquareStyles;

  boardSquareStyles = {
    pointerEvents: (hoveredSquare && typeof hoveredSquare === 'object' && (hoveredSquare[0] === x && hoveredSquare[1] === y) ) ? 'none' : 'auto',
    outline: `0.25px solid rgba(109, 114, 125, 0.8)`
  }

  if(draggedItem) {
    boardSquareStyles = {...boardSquareStyles, zIndex: 200};
  }
  if (children) {
    boardSquareStyles = {...boardSquareStyles, outline: 'none'};
  }

  return (
    // @ts-ignore
    <div ref={drop} className={classes.BoardSquare} style={boardSquareStyles}
         onMouseOver={squareMouseOverHandler} onMouseUp={() => {if(draggedItem) invokeOnMouseUp()}}>
      <Square>{children}</Square>
      {isHovered && !canDropRedux && <Overlay color={theme.colors.danger}/>}
      {isHovered && canDropRedux && <Overlay color={theme.colors.success}/>}
    </div>
  )
}

export default BoardSquare;