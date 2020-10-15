import React from 'react';
import classes from '../../styles/UI/ContextMenu.module.scss';
import SecondaryText from "../layout/SecondaryText";
import {getContextActionsForCell} from "../../redux/actions/contextMenu";
import Item from "../../models/Item";

interface Props {
  leftOffset: number;
  topOffset: number;
  contextItem: Item;
}

const ContextMenu: React.FC<Props> = React.memo(function ContextMenu({leftOffset, topOffset, contextItem}) {

  const contextActions = getContextActionsForCell(contextItem);

  // in percents
  const height = 5.6 + (contextActions.length - 1) * 3.8;

  return (
    <div className={classes.ContextMenuWrapper} style={{left: leftOffset, top: topOffset,
    height: `${height}%`}} onClick={e => e.stopPropagation()}>
      <div className={classes.ContextMenu}>
        {
          contextActions.map((action,i) => {
            return (
              <div key={i} className={classes.Button} onClick={(e) => action.handler()}
              style={{ backgroundColor: action.label.toLowerCase() === 'выкинуть' ? '#FF5306' : '#3A72F7' }}>
                <SecondaryText styles={{fontWeight: 800, textAlign: 'center', letterSpacing: '.01rem'}}>{action.label}</SecondaryText>
              </div>
              )
          })
        }
      </div>
    </div>
  );
});

export default ContextMenu;