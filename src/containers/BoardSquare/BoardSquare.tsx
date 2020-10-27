import React, {useCallback, CSSProperties, useRef} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Overlay from "../../components/UI/Overlay";
import {invokeOnMouseUp, setHoveredSquares} from "../../redux/actions/draggedItem";
import classes from '../../styles/board/BoardSquare.module.scss';
import theme from "../../constants/css/theme";
import {removeHoveredItem} from "../../redux/actions/hoveredItem";

interface Props {
  coords: [number, number];
  isHovered: boolean;
  children: any;
  // to check outline instead of children
  isPartOfItem: boolean;
}

const BoardSquare: React.FC<Props> = React.memo(function BoardSquare({coords: [x, y], children, isHovered, isPartOfItem}) {

  const {
    draggedItem: {hoveredSquare, canDrop: canDropRedux, item: draggedItem, hoveredArea}
  } = useSelector((state) => state);
  const draggedItemRef = useRef();
  draggedItemRef.current = draggedItem;

  const dispatch = useDispatch();
  const drop = null;
  //region ------------------------------ Set hovered squares if drag item ------------------------------
  const squareMouseOverHandler = () => {
    if (draggedItemRef.current) {
      if (hoveredArea !== 1 || !hoveredSquare || typeof hoveredSquare !== 'object' || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
        dispatch(setHoveredSquares([x, y], 1));
      }
    }
  }
  //endregion

  let boardSquareStyles: CSSProperties = {
    outline: `0.25px solid rgba(109, 114, 125, 0.8)`
  }

  let mouseOverElStyles: CSSProperties = {
    pointerEvents: (hoveredArea === 1 && hoveredSquare && typeof hoveredSquare === 'object'
      && (hoveredSquare[0] === x && hoveredSquare[1] === y) ) ? 'none' : 'auto',
    zIndex: 'auto',
  }

  if (isPartOfItem) {
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
         onMouseUp={() => {if(draggedItem) invokeOnMouseUp()}} onClick={e => e.stopPropagation()}>
        {children}
      {isHovered && !canDropRedux && <Overlay color={theme.colors.danger}/>}
      {isHovered && canDropRedux && <Overlay color={theme.colors.success}/>}
      <div className={classes.MouseOverEl} style={mouseOverElStyles} onMouseOver={squareMouseOverHandler}/>
    </div>
  )
});

export default BoardSquare;