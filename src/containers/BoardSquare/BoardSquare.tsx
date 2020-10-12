import React, {CSSProperties, useRef} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Overlay from "../../components/UI/Overlay";
import {invokeOnMouseUp, setHoveredSquares} from "../../redux/actions/draggedItem";
import classes from '../../styles/board/BoardSquare.module.scss';
import theme from "../../constants/css/theme";

const BoardSquare = ({coords: [x, y], children, isHovered}) => {

  const {hoveredSquare, canDrop: canDropRedux, item: draggedItem} = useSelector(({draggedItem}) => draggedItem);
  const draggedItemRef = useRef();
  draggedItemRef.current = draggedItem;

  const dispatch = useDispatch();
  const drop = null;
  const squareMouseOverHandler = (e) => {
     e.persist();
    if (draggedItemRef.current) {
      if (!hoveredSquare || typeof hoveredSquare !== 'object' || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
        dispatch(setHoveredSquares([x, y]));
      }
    }
  }

  let boardSquareStyles: CSSProperties = {
    outline: `0.25px solid rgba(109, 114, 125, 0.8)`
  }

  let mouseOverElStyles: CSSProperties = {
    pointerEvents: (hoveredSquare && typeof hoveredSquare === 'object' && (hoveredSquare[0] === x && hoveredSquare[1] === y) ) ? 'none' : 'auto',
  }

  if (children) {
    boardSquareStyles = {...boardSquareStyles, outline: 'none'};
  }

  if(draggedItem) {
    mouseOverElStyles = {...mouseOverElStyles, zIndex: 200};
    if(isHovered) {
      boardSquareStyles = {...boardSquareStyles, outline: `0.25px solid rgba(109, 114, 125, 0.8)`}
    }
  }

  return (
    // @ts-ignore
    <div ref={drop} className={classes.BoardSquare} style={boardSquareStyles}
         onMouseUp={() => {if(draggedItem) invokeOnMouseUp()}}>
        {children}
      {isHovered && !canDropRedux && <Overlay color={theme.colors.danger}/>}
      {isHovered && canDropRedux && <Overlay color={theme.colors.success}/>}
      <div className={classes.MouseOverEl} style={mouseOverElStyles} onMouseOver={squareMouseOverHandler}/>
    </div>
  )
}

export default BoardSquare;