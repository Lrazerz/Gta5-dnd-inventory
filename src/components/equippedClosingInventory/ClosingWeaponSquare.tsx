import React, {CSSProperties, useRef} from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingWeaponSquare.module.scss';
import {useDispatch} from 'react-redux';
import Overlay from "../UI/Overlay";
import {useSelector} from 'react-redux';
import {setHoveredSquares} from "../../redux/actions/draggedItem";
import theme from "../../constants/css/theme";
import {WeaponItemTypes} from "../../constants/dnd/types";

interface Props {
  children: any;
  acceptedItemType: string;
  coords: number;
}

//itemId - an item inside if exists
const ClosingWeaponSquare: React.FC<Props> = React.memo(function ClosingWeaponSquare({children, acceptedItemType, coords}) {
  const dispatch = useDispatch();

  const {item: draggedItem, hoveredSquare, canDrop} = useSelector(({draggedItem}) => draggedItem);
  const draggedItemRef = useRef();
  const hoveredSquareRef = useRef();
  draggedItemRef.current = draggedItem;
  hoveredSquareRef.current = hoveredSquare;

  const isOver = hoveredSquare === coords;

  const squareMouseOverHandler = (e) => {
    console.log('mouse over weapon square');
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


  const isFromOctagon = coords !== 1 && coords !== 2 && coords !== 3;

  if(coords === 1) console.log('isFromOctagon', isFromOctagon);

  return (
    <div className={classes.ClosingWeaponSquare} style={closingWeaponSquareStyles}
         onMouseOver={squareMouseOverHandler}>
      {children}
      {isOver && canDrop && <Overlay color={successColor} fromOctagon={isFromOctagon}/>}
      {isOver && !canDrop && <Overlay color={dangerColor} fromOctagon={isFromOctagon}/>}
    </div>
  );
});

export default ClosingWeaponSquare;//