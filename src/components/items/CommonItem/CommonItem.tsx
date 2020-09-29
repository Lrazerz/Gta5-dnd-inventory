import React from 'react';
import classes from '../../../styles/CommonItem.module.scss';

interface Props {
  children: any;
  imageContainerForwardedRef: React.Ref<any>;
  mainCell: boolean;
}

const CommonItem: React.FC<Props> = ({
                                       children, imageContainerForwardedRef, mainCell}) => {

  return (
    <>
      <div ref={imageContainerForwardedRef} className={classes.CommonItem}
           onDragStart={(e) => {e.preventDefault();return false}}>
          {children}
      </div>
    </>
  );
};

export default CommonItem;