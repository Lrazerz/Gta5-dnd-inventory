import React from 'react';
import classes from '../../styles/equippedClosingInventory/Octagon.module.scss';

const Octagon = ({children, width='26%'}) => {
  return (
    <div className={classes.Octagon} style={{width: width}}>
      {children}
      <div className={classes.TopBorder}/>
      <div className={classes.BottomBorder}/>
    </div>
  );
};

export default Octagon;