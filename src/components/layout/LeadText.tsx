import React from 'react';
import classes from '../../styles/layout/LeadText.module.scss';

const LeadText = ({children, styles={}}) => {
  return (
    <div className={classes.LeadText} style={styles}>
      {children}
    </div>
  );
};

export default LeadText;