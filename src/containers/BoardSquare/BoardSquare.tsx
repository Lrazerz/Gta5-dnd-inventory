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
}

const BoardSquare: React.FC<Props> = React.memo(function BoardSquare({coords: [x, y], children, isHovered}) {

  const {
    draggedItem: {hoveredSquare, canDrop: canDropRedux, item: draggedItem},
    hoveredItem: {item: hoveredItem},
  } = useSelector((state) => state);
  const draggedItemRef = useRef();
  draggedItemRef.current = draggedItem;

  const dispatch = useDispatch();
  const drop = null;
  const squareMouseOverHandler = (e) => {
     e.persist();
     //region ------------------------------ Set squares if drag item ------------------------------
    if (draggedItemRef.current) {
      if (!hoveredSquare || typeof hoveredSquare !== 'object' || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
        dispatch(setHoveredSquares([x, y]));
      }
    }
    //endregion
    //region ------------------------------ Release hovered item if don't drag item ------------------------------
    else {
      if(hoveredItem) {
        dispatch(removeHoveredItem());
      }
    }
    //endregion
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
});

export default BoardSquare;