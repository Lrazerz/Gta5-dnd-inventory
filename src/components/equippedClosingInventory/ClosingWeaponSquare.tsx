import React, {CSSProperties, useRef} from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingWeaponSquare.module.scss';
import {useDispatch} from 'react-redux';
import Overlay from "../UI/Overlay";
import {useSelector} from 'react-redux';
import {setHoveredSquares} from "../../redux/actions/draggedItem";
import theme from "../../constants/css/theme";
import {WeaponItemTypes} from "../../constants/dnd/types";

//itemId - an item inside if exists
const ClosingWeaponSquare = ({children, acceptedItemType, coords}) => {
  const dispatch = useDispatch();

  const {item: draggedItem, hoveredSquare, canDrop} = useSelector(({draggedItem}) => draggedItem);
  const draggedItemRef = useRef();
  const hoveredSquareRef = useRef();
  draggedItemRef.current = draggedItem;
  hoveredSquareRef.current = hoveredSquare;

  const isOver = hoveredSquare === coords;

  const squareMouseOverHandler = (e) => {
    e.persist();
    if (draggedItemRef.current) {
      if (!hoveredSquareRef.current || typeof hoveredSquareRef.current !== 'number' || hoveredSquareRef.current !== coords) {
        dispatch(setHoveredSquares(coords, true, acceptedItemType));
      }
    }
  }

  const closingWeaponSquareStyles: CSSProperties = {
    pointerEvents: isOver ? 'none' : 'auto',
  }

  // overlay colors
  let successColor = theme.colors.success;
  let dangerColor = theme.colors.danger;

  if (WeaponItemTypes.includes(acceptedItemType)) {
    successColor = `linear-gradient(90deg, transparent, ${theme.colors.success} 50%, transparent)`;
    dangerColor = `linear-gradient(90deg, transparent, ${theme.colors.danger} 50%, transparent)`;
  }

  return (
    <div className={classes.ClosingWeaponSquare} style={closingWeaponSquareStyles}
         onMouseOver={squareMouseOverHandler}>
      {children}
      {isOver && canDrop && <Overlay color={successColor}/>}
      {isOver && !canDrop && <Overlay color={dangerColor}/>}
    </div>
  );
};

export default ClosingWeaponSquare;//