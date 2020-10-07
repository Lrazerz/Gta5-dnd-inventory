import React from 'react';
import classes from '../../styles/UI/ContextMenu.module.scss';
import SecondaryText from "../layout/SecondaryText";

const ContextMenu = ({contextActions, leftOffset, topOffset}) => {

  // in percents
  const height = 5.6 + (contextActions.length - 1) * 3.8;

  return (
    <div className={classes.ContextMenuWrapper} style={{left: `calc(${leftOffset}px - 3.23%)`, top: topOffset,
    height: `${height}%`}}>
      <div className={classes.ContextMenu}>
        {
          contextActions.map((action,i) => {
            return (
              <div key={i} className={classes.Button} onClick={(e) => {console.log('ContextMenu click');action.handler(e)}}
              style={{ backgroundColor: action.label.toLowerCase() === 'выкинуть' ? '#FF5306' : '#3A72F7' }}>
                <SecondaryText styles={{fontWeight: '800', textAlign: 'center', letterSpacing: '.01rem'}}>{action.label}</SecondaryText>
              </div>
              )
          })
        }
      </div>
    </div>
  );
};

export default ContextMenu;