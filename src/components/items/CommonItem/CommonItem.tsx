import React from 'react';
// @ts-ignore
import classes from '../../../styles/CommonItem.module.scss';
import {DragPreviewImage} from "react-dnd";

interface Props {
  children: any;
  forwardedRef: React.Ref<any>;
  imageContainerForwardedRef: React.Ref<any>;
  connectPreview: any;
  imageUrl: string;
}

const CommonItem: React.FC<Props> = ({
                                       children, forwardedRef, imageContainerForwardedRef,
                                       connectPreview, imageUrl
                                     }) => {
  return (
    <>
      <DragPreviewImage connect={connectPreview} src={imageUrl}/>
      <div ref={forwardedRef} className={classes.CommonItem}>
        <div ref={imageContainerForwardedRef} className={classes.ImageContainer}>
          {children}
        </div>
      </div>
    </>
  );
};

export default CommonItem;