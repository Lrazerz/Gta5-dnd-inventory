import React from 'react';
import classes from '../../../../styles/inventory/CommonItem.module.scss';

interface Props {
  children: any;
}

const CommonItem: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.CommonItem}>
        {children}
    </div>
  );
};

export default CommonItem;