import React from 'react';
// @ts-ignore
import classes from '../../styles/equippedClosingInventory/ClosingWeaponSquare.module.scss';
import {useDispatch} from 'react-redux';
import {useDrop} from "react-dnd";
import Overlay from "../UI/Overlay";
import {useSelector} from 'react-redux';
import Item from "../../models/Item";
import {removeEquippedItem, setEquippedItem, setEquippedItems} from "../../redux/actions/equippedItems";
import {addItem, removeItem} from "../../redux/actions/board";
import {removeHoveredSquares} from "../../redux/actions/draggedItem";

const ClosingSquare = ({children, acceptedItemType, coords}) => {
  const dispatch = useDispatch();

  const item = useSelector(({draggedItem}) => draggedItem.item)

  const [{}, drop] = useDrop({
    accept: acceptedItemType,
    drop: (DNDItem, monitor) => {
      if(monitor.canDrop()) {
        // @ts-ignore
        if (DNDItem.isInventory) {
          dispatch(removeEquippedItem(item.mainCell));
        } else {
          dispatch(removeItem(item.mainCell, item.width, item.height));
        }
        dispatch(setEquippedItem(coords));
      }
    },
    canDrop: (item) => {
      //@ts-ignore
      return true;
    },
    hover: () => {
      dispatch(removeHoveredSquares());
    },
    collect: (monitor) => {
      return ({});
    }
  });

  return (
    <div ref={drop} className={classes.ClosingWeaponSquare}>
      {children}
    </div>
  );
};

export default ClosingSquare;