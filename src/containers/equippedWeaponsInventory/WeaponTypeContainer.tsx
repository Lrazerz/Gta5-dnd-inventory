import React, {CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../styles/equippedWeaponsInventory/WeaponTypeContainer.module.scss';
import Octagon from "../../components/equippedClosingInventory/Octagon";
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import LeadText from "../../components/layout/LeadText";
import SecondaryText from "../../components/layout/SecondaryText";
import {WeaponTypeContainerCells} from './EquippedWeaponsInventoryContainer';
import SquareEquippedItem from "../equippedClosingInventory/SquareEquippedItem";

interface Props {
  typeTitle: string;
  acceptedTypes: { mainSquareType: string, ammoType: string, toolsType: string };
  cells: WeaponTypeContainerCells;
}

const WeaponTypeContainer: React.FC<Props> = React.memo(function WeaponTypeContainer({typeTitle, acceptedTypes, cells}) {

  const {hoveredSquare} = useSelector(({draggedItem}) => draggedItem);

  const {mainSquareType, ammoType, toolsType} = acceptedTypes;

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
      <Octagon key={toolsCell.id} width={'19.85%'} coords={toolsCell.id}>
        <ClosingWeaponSquare acceptedItemType={toolsType} coords={toolsCell.id}>
          {toolsSquareContent}
        </ClosingWeaponSquare>
      </Octagon>
    );
  });

  // console.log('weaponSquareContainerStyles', hoveredSquare, weaponCell.id);
  // to keep dragged item at the top of the screen
  const weaponSquareContainerStyles: CSSProperties = {
    zIndex: hoveredSquare === weaponCell.id ? 'auto' : 200,
  }

  return (
    <div className={classes.WeaponTypeContainer}>
        <div className={classes.TypeAndWeaponTitle}>
          <LeadText styles={{textAlign: 'right'}}>{typeTitle.toUpperCase()}</LeadText>
          <SecondaryText styles={{textAlign: 'right'}}>
            {weaponCell.cell.item && weaponCell.cell.item.name}
          </SecondaryText>
        </div>
        <div className={classes.WeaponSquareContainer} style={weaponSquareContainerStyles} onMouseOver={e => e.stopPropagation()}>
            <ClosingWeaponSquare acceptedItemType={mainSquareType}
                                 coords={weaponCell.id}>
              {weaponSquareContent}
            </ClosingWeaponSquare>
        </div>
        <div className={classes.AttachmentsSquaresContainer}>
          <div className={classes.LeftArrow}/>
          <Octagon width={'19.85%'} coords={ammoCell.id}>
            <ClosingWeaponSquare acceptedItemType={ammoType} coords={ammoCell.id}>
              {ammoSquareContent}
            </ClosingWeaponSquare>
          </Octagon>
          {toolsSquares}
        </div>
    </div>
  );
});

export default WeaponTypeContainer;