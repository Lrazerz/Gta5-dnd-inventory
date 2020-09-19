import React from 'react';
import classes from '../../styles/equippedClosingInventory/Octagon.module.scss';

const Octagon = ({children, width='26%'}) => {
  return (
    <div className={classes.Octagon} style={{width: width}}>
      {children}
    </div>
  );
};

export default Octagon;