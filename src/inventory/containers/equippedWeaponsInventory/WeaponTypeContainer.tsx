import React from 'react';
import classes from '../../../styles/inventory/equippedWeaponsInventory/WeaponTypeContainer.module.scss';
import Octagon from "../../components/equippedClosingInventory/Octagon";
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import LeadText from "../../components/layout/LeadText";
import SecondaryText from "../../components/layout/SecondaryText";
import {WeaponTypeContainerCells} from './EquippedWeaponsInventoryContainer';
import SquareEquippedItem from "../equippedClosingInventory/SquareEquippedItem";

interface Props {
  typeTitle: string;
  cells: WeaponTypeContainerCells;
}

const WeaponTypeContainer: React.FC<Props> = React.memo(function WeaponTypeContainer({typeTitle, cells}) {

  // every has id and item
  const {weaponCell, ammoCell, toolsCells} = cells;

  const weaponSquareContent = weaponCell.cell.item ?
    (<SquareEquippedItem key={weaponCell.id} item={weaponCell.cell.item}/>) : null;

  const ammoSquareContent = ammoCell.cell.item ?
    (<SquareEquippedItem key={ammoCell.id}
                         item={ammoCell.cell.item}/>) : null;

  const toolsSquares = toolsCells.map(toolsCell => {
    let toolsSquareContent = null;

    if (toolsCell.cell.item) {
      toolsSquareContent = (
        <SquareEquippedItem key={toolsCell.cell.item.id} item={toolsCell.cell.item}/>
      );
    }

    return (
      <div key={toolsCell.id} style={{width: '19.85%', position: 'relative'}}>
        <Octagon coords={toolsCell.id}>
          <ClosingWeaponSquare coords={toolsCell.id}>
            {toolsSquareContent}
          </ClosingWeaponSquare>
        </Octagon>
      </div>
    );
  });

  return (
    <div className={classes.WeaponTypeContainer}>
        <div className={classes.TypeAndWeaponTitle}>
          <LeadText styles={{textAlign: 'right'}}>{typeTitle.toUpperCase()}</LeadText>
          <SecondaryText styles={{textAlign: 'right'}}>
            {weaponCell.cell.item && weaponCell.cell.item.name}
          </SecondaryText>
        </div>
        <div className={classes.WeaponSquareContainer} onMouseOver={e => e.stopPropagation()}>
        </div>
        <div className={classes.TransparentHoveredEl}
             onMouseOver={e => e.stopPropagation()}>
          <ClosingWeaponSquare coords={weaponCell.id}>
            {weaponSquareContent}
          </ClosingWeaponSquare>
        </div>
        <div className={classes.AttachmentsSquaresContainer}>
          <div className={classes.LeftArrow}/>
          <div style={{width: '19.85%', position: 'relative'}}>
            <Octagon coords={ammoCell.id}>
              <ClosingWeaponSquare coords={ammoCell.id}>
                {ammoSquareContent}
              </ClosingWeaponSquare>
            </Octagon>
          </div>
          {toolsSquares}
        </div>
    </div>
  );
});

export default WeaponTypeContainer;