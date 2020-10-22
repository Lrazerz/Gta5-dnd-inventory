import React from 'react';
import classes from '../../styles/items/EquippedItem.module.scss';

const EquippedItem = ({children}) => {
  return (
  <>
    <div className={classes.EquippedItem}>
        {children}
    </div>
  </>
  );
};

export default EquippedItem;