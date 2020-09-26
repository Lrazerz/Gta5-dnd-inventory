import React from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingWeaponSquare.module.scss';
import {useDispatch} from 'react-redux';
import {useDrop} from "react-dnd";
import Overlay from "../UI/Overlay";
import {useSelector} from 'react-redux';
import {removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";
import {changeEquippedState, removeItem} from "../../redux/actions/board";
import {removeHoveredSquares} from "../../redux/actions/draggedItem";
import theme from "../../constants/css/theme";
import {ItemTypes, WeaponItemTypes} from "../../constants/dnd/types";
import {Simulate} from "react-dom/test-utils";
import drag = Simulate.drag;
import change = Simulate.change;

//itemId - an item inside if exists
const ClosingWeaponSquare = ({children, acceptedItemType, coords, itemId}) => {
  const dispatch = useDispatch();

  const {item: draggedItem, allHoveredSquares} = useSelector(({draggedItem}) => draggedItem);
  let isAllowDrop = !children;

  if (draggedItem) {
    isAllowDrop = !children || itemId === draggedItem.id;
  }

  const [{isOver}, drop] = useDrop({
    accept: acceptedItemType,
    drop: (DNDItem, monitor) => {
      console.log('ClosingWeaponSquare useDrop drop');
      if (monitor.canDrop()) {
        // if the same item
        if(typeof draggedItem.mainCell === 'number' && draggedItem.mainCell === coords) {
          return;
        }
        // @ts-ignore
        if (DNDItem.isInventory) {
            dispatch(removeEquippedItem(draggedItem.mainCell));
            // If item from board
        } else {
          // If item is weapon
          if (acceptedItemType === ItemTypes.WEAPON_RIFLE || acceptedItemType === ItemTypes.WEAPON_PISTOL
          || acceptedItemType === ItemTypes.WEAPON_LAUNCHER) {
            draggedItem.mainCellOnBoard = draggedItem.mainCell;
            // action that changes item.isEquipped on board to true
            dispatch(changeEquippedState(draggedItem, true));
          } else {
            dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
          }
        }
        dispatch(setEquippedItem(coords));
      }
    },
    canDrop: () => {
      return isAllowDrop;
    },
    hover: () => {
      if(allHoveredSquares) {
        dispatch(removeHoveredSquares());
      }
    },
    collect: (monitor) => {
      return {isOver: monitor.isOver({shallow: true})};
    }
  });

  const successColor = WeaponItemTypes.includes(acceptedItemType)
    ? `linear-gradient(90deg,transparent, ${theme.colors.success} 50%, transparent`
    : theme.colors.success;


  return (
    <div ref={drop} className={classes.ClosingWeaponSquare}>
      {children}
      {isOver && isAllowDrop && <Overlay color={successColor}/>}
      {isOver && !isAllowDrop && <Overlay color={theme.colors.danger}/>}
    </div>
  );
};

export default ClosingWeaponSquare;//