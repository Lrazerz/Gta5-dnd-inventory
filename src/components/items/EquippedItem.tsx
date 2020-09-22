import React from 'react';
import classes from '../../styles/items/EquippedItem.module.scss';
import {DragPreviewImage} from "react-dnd";

const EquippedItem = ({forwardedRef, children, imageContainerForwardedRef, connectPreview, imageUrl}) => {
  return (
  <>
    {imageUrl && <DragPreviewImage connect={connectPreview} src={imageUrl}/>}
    <div ref={forwardedRef} className={classes.EquippedItem}>
      <div ref={imageContainerForwardedRef} className={classes.ImageContainer}>
        {children}
      </div>
    </div>
  </>
  );
};

export default EquippedItem;