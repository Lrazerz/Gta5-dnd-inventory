import React from 'react';
// @ts-ignore
import classes from '../../styles/Overlay.module.scss';

interface Props {
  color: string;
}

const Overlay: React.FC<Props> = ({color}) => {
  return (
    <div style={{backgroundColor: color}} className={classes.Overlay}/>
  );
};

export default Overlay;