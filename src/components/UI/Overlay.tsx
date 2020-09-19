import React from 'react';
import classes from '../../styles/Overlay.module.scss';

interface Props {
  color: string;
}

const Overlay: React.FC<Props> = ({color}) => {
  return (
    <div style={{background: color}} className={classes.Overlay}/>
  );
};

export default Overlay;