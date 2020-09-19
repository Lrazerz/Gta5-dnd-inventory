import React from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingWeaponSquare.module.scss';
import {useDispatch} from 'react-redux';
import {useDrop} from "react-dnd";
import Overlay from "../UI/Overlay";
import {useSelector} from 'react-redux';
import {removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";
import {removeItem} from "../../redux/actions/board";
import {removeHoveredSquares} from "../../redux/actions/draggedItem";
import theme from "../../constants/css/theme";
import {WeaponItemTypes} from "../../constants/dnd/types";

//itemId - an item inside if exists
const ClosingWeaponSquare = ({children, acceptedItemType, coords, itemId}) => {
  const dispatch = useDispatch();

  const draggedItem = useSelector(({draggedItem}) => draggedItem.item);
  let isAllowDrop = !children;

  if (draggedItem) {
    if (coords === 10) {
      console.log('isAllowDrop', isAllowDrop);
    }
    if (coords === 10) {
      console.log('id', itemId, 'dragged', draggedItem.id);
    }
    isAllowDrop = !children || itemId === draggedItem.id;
    if (coords === 10) {
      console.log('isAllowDropdragged', isAllowDrop);
    }
  }

  const [{isOver}, drop] = useDrop({
    accept: acceptedItemType,
    drop: (DNDItem, monitor) => {
      if (monitor.canDrop()) {
        // @ts-ignore
        if (DNDItem.isInventory) {
          dispatch(removeEquippedItem(draggedItem.mainCell));
        } else {
          dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
        }
        dispatch(setEquippedItem(coords));
      }
    },
    canDrop: (item) => {
      return isAllowDrop;
    },
    hover: () => {
      dispatch(removeHoveredSquares());
    },
    collect: (monitor) => {
      return {isOver: monitor.isOver({shallow: true})};
    }
  });

  if (coords === 1) {
    console.log('includes', WeaponItemTypes.includes(acceptedItemType));
    console.log('accItemType', acceptedItemType);
    console.log('weapTypes', WeaponItemTypes);
  }

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