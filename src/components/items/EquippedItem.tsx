import React from 'react';
import classes from '../../styles/items/EquippedItem.module.scss';

const EquippedItem = ({forwardedRef, children, imageContainerForwardedRef, connectPreview, imageUrl}) => {
  return (
  <>
    <div ref={forwardedRef} className={classes.EquippedItem}>
      <div ref={imageContainerForwardedRef} className={classes.ImageContainer}>
        {children}
      </div>
    </div>
  </>
  );
};

export default EquippedItem;