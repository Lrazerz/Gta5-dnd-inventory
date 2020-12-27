import React from 'react';
import classes from '../../../styles/inventory/UI/ContextMenu.module.scss';
import SecondaryText from "../layout/SecondaryText";
import {getContextActionsForCell} from "../../../redux/actions/inventory/contextMenu";
import ItemModel from "../../models/Item";

interface Props {
  leftOffset: number;
  topOffset: number;
  contextItem: ItemModel;
  hoveredArea: number;
}

const ContextMenu: React.FC<Props> = React.memo(function ContextMenu({leftOffset, topOffset, contextItem, hoveredArea}) {
  const contextActions = getContextActionsForCell(contextItem, hoveredArea);

  // in percents
  const height = 5.6 + (contextActions.length - 1) * 3.8;

  return (
    <div className={classes.ContextMenuWrapper} style={{left: leftOffset, top: topOffset,
    height: `${height}%`}} onClick={e => e.stopPropagation()}>
      <div className={classes.ContextMenu}>
        {
          contextActions.map((action,i) => {
            return (
              <div key={i} className={classes.Button} onClick={(e) => {e.stopPropagation();action.handler()}}
              style={{ backgroundColor: action.label.toLowerCase() === 'выкинуть' ? '#FF5306' : '#3A72F7' }}>
                <SecondaryText styles={{fontWeight: 800, textAlign: 'center', letterSpacing: '0.008rem'}}>{action.label}</SecondaryText>
              </div>
              )
          })
        }
      </div>
    </div>
  );
});

export default ContextMenu;