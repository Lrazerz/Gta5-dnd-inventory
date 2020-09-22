import React from 'react';
import classes from '../../styles/items/EquippedItem.module.scss';
import {DragPreviewImage} from "react-dnd";

const EquippedItem = ({forwardedRef, children}) => {
  return (
  <>
    <div ref={forwardedRef} className={classes.EquippedItem}>
      {children}
    </div>
  </>
  );
};

export default EquippedItem;