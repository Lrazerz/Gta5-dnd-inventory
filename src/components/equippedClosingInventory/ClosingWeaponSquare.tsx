import React from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingWeaponSquare.module.scss';
import {useDispatch} from 'react-redux';
import Overlay from "../UI/Overlay";
import {useSelector} from 'react-redux';
import {removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";
import {changeEquippedState, removeItem} from "../../redux/actions/board";
import {removeHoveredSquares, setHoveredSquares} from "../../redux/actions/draggedItem";
import theme from "../../constants/css/theme";
import {ItemTypes, WeaponItemTypes} from "../../constants/dnd/types";
import {Simulate} from "react-dom/test-utils";
import drag = Simulate.drag;
import change = Simulate.change;

//itemId - an item inside if exists
const ClosingWeaponSquare = ({children, acceptedItemType, coords, itemId}) => {
  const dispatch = useDispatch();

  const {item: draggedItem, hoveredSquare, allHoveredSquares, canDrop} = useSelector(({draggedItem}) => draggedItem);

  // const [{isOver}, drop] = useDrop({
  //   accept: acceptedItemType,
  //   drop: (DNDItem, monitor) => {
  //     if (monitor.canDrop()) {
  //       // if the same item
  //       if(typeof draggedItem.mainCell === 'number' && draggedItem.mainCell === coords) {
  //         return;
  //       }
  //       // @ts-ignore
  //       if (DNDItem.isInventory) {
  //           dispatch(removeEquippedItem(draggedItem.mainCell));
  //           // If item from board
  //       } else {
  //         // If item is weapon
  //         if (acceptedItemType === ItemTypes.WEAPON_RIFLE || acceptedItemType === ItemTypes.WEAPON_PISTOL
  //         || acceptedItemType === ItemTypes.WEAPON_LAUNCHER) {
  //           draggedItem.mainCellOnBoard = draggedItem.mainCell;
  //           // action that changes item.isEquipped on board to true
  //           dispatch(changeEquippedState(draggedItem, true));
  //         } else {
  //           dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
  //         }
  //       }
  //       dispatch(setEquippedItem(coords));
  //     }
  //   },
  //   canDrop: () => {
  //     return isAllowDrop;
  //   },
  //   hover: () => {
  //     if(allHoveredSquares) {
  //       dispatch(removeHoveredSquares());
  //     }
  //   },
  //   collect: (monitor) => {
  //     return {isOver: monitor.isOver({shallow: true})};
  //   }
  // });

  const squareMouseOverHandler = (e) => {
    console.log('mouseOver');
    e.persist();
    if (draggedItem) {
      if (!hoveredSquare || typeof hoveredSquare !== 'number' || hoveredSquare !== coords) {
        dispatch(setHoveredSquares(coords, true, acceptedItemType));
      }
    }
  }

  let closingWeaponSquareTypes;

  closingWeaponSquareTypes = {
      pointerEvents: (typeof hoveredSquare === 'number' && hoveredSquare === coords ) ? 'none' : 'auto',
  }

  const isOver = hoveredSquare === coords;


  // overlay colors
  let successColor = theme.colors.success;
  let dangerColor = theme.colors.danger;

  if(WeaponItemTypes.includes(acceptedItemType)) {
    successColor = `linear-gradient(90deg, transparent, ${theme.colors.success} 50%, transparent)`;
    dangerColor = `linear-gradient(90deg, transparent, ${theme.colors.danger} 50%, transparent)`;
  }



  if(draggedItem) {
    closingWeaponSquareTypes = {...closingWeaponSquareTypes, zIndex: 200};
  }

  return (
    <div className={classes.ClosingWeaponSquare} style={closingWeaponSquareTypes}
         onMouseOver={squareMouseOverHandler}>
      {children}
      {isOver && canDrop && <Overlay color={successColor}/>}
      {isOver && !canDrop && <Overlay color={dangerColor}/>}
    </div>
  );
};

export default ClosingWeaponSquare;//