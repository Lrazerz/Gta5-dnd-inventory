import React from 'react';
import classes from '../../../../styles/hud/components/Corporations/TasksTab/OpenCloseArrowButton.module.scss';

interface Props {
  isOpened: boolean;
}

const OpenCloseArrowButton: React.FC<Props> = React.memo((Props) => {
  console.log('CLASSES', classes);
  return (
    <div className={`${classes.OpenCloseArrowButton} ${Props.isOpened ? classes.Close : classes.Open}`}/>
  );
});

export default OpenCloseArrowButton;