import React, {CSSProperties, useRef} from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingWeaponSquare.module.scss';
import {useDispatch} from 'react-redux';
import Overlay from "../UI/Overlay";
import {useSelector} from 'react-redux';
import {setHoveredSquares} from "../../redux/actions/draggedItem";
import theme from "../../constants/css/theme";
import {WeaponItemTypes} from "../../constants/dnd/types";
import {EquippedCategoriesToCells} from "../../constants/dnd/equippedCategoriesToCells";

interface Props {
  children: any;
  coords: number;
}

//itemId - an item inside if exists
const ClosingWeaponSquare: React.FC<Props> = React.memo(function ClosingWeaponSquare({children, coords}) {
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
        dispatch(setHoveredSquares(coords, true));
      }
    }
  }

  let closingWeaponSquareStyles: CSSProperties = {
    pointerEvents: isOver ? 'none' : 'auto',
    zIndex: hoveredSquare === coords ? 'auto' : 200,
  }

  // overlay colors
  let successColor = theme.colors.success;
  let dangerColor = theme.colors.danger;

  const acceptedItemType = EquippedCategoriesToCells[coords];
  if (WeaponItemTypes.includes(acceptedItemType)) {
    successColor = `linear-gradient(90deg, transparent, ${theme.colors.success} 100%)`;
    dangerColor = `linear-gradient(90deg, transparent, ${theme.colors.danger} 100%)`;
  }

  const isFromOctagon = coords !== 1 && coords !== 2 && coords !== 3;

  return (
    <div className={classes.ClosingWeaponSquare} style={closingWeaponSquareStyles}
         onMouseOver={squareMouseOverHandler}>
      {children}
      {isOver && canDrop && <Overlay color={successColor} fromOctagon={isFromOctagon} fromWeapon={!isFromOctagon}/>}
      {isOver && !canDrop && <Overlay color={dangerColor} fromOctagon={isFromOctagon} fromWeapon={!isFromOctagon}/>}
    </div>
  );
});

export default ClosingWeaponSquare;//