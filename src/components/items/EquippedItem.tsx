import React from 'react';
import classes from '../../styles/items/EquippedItem.module.scss';

const EquippedItem = ({children, imageContainerForwardedRef}) => {
  return (
  <>
    <div ref={imageContainerForwardedRef} className={classes.EquippedItem}>
        {children}
    </div>
  </>
  );
};

export default EquippedItem;