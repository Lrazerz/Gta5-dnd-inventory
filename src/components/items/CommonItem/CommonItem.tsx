import React from 'react';
import classes from '../../../styles/CommonItem.module.scss';

interface Props {
  children: any;
  imageContainerForwardedRef: React.Ref<any>;
  mainCell: boolean;
}

const CommonItem: React.FC<Props> = ({ children, imageContainerForwardedRef }) => {
  return (
    <div ref={imageContainerForwardedRef} className={classes.CommonItem}
         onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}>
        {children}
    </div>
  );
};

export default CommonItem;