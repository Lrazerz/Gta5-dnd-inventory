import React from 'react';
import classes from '../../styles/items/EquippedItem.module.scss';
import {DragPreviewImage} from "react-dnd";

const EquippedItem = ({forwardedRef, children, previewConnect, imageUrl}) => {
  return (
  <>
    {/*<div ref={previewConnect}>asdasd</div>*/}
    {/*<DragPreviewImage connect={previewConnect} src={imageUrl} />*/}
    <div ref={forwardedRef} className={classes.EquippedItem}>
      {children}
    </div>
  </>
  );
};

export default EquippedItem;