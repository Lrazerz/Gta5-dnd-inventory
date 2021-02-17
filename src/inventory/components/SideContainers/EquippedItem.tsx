import React from 'react';
import classes from '../../../styles/inventory/items/EquippedItem.module.scss';

const EquippedItem = ({ children }) => {
  return (
    <>
      <div className={classes.EquippedItem}>{children}</div>
    </>
  );
};

export default EquippedItem;
