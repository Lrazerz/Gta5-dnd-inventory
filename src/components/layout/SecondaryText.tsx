import React from 'react';
// @ts-ignore
import classes from '../../styles/layout/SecondaryText.module.scss';

const SecondaryText = ({children, styles={}}) => {
  return (
    <div className={classes.SecondaryText} style={styles}>
      {children}
    </div>
  );
};

export default SecondaryText;