import React from 'react';
import classes from '../../../styles/CommonItem.module.scss';

interface Props {
  children: any;
  imageContainerForwardedRef: React.Ref<any>;
  imageUrl: any;
}

const CommonItem: React.FC<Props> = ({
                                       children, imageContainerForwardedRef, imageUrl
                                     }) => {
  return (
    <>
      <div className={classes.CommonItem}>
        <div ref={imageContainerForwardedRef} className={classes.ImageContainer}>
          {children}
        </div>
      </div>
    </>
  );
};

export default CommonItem;