import React, { CSSProperties } from 'react';
import classes from '../../../../styles/inventory/equippedWeaponsInventory/equippedWeaponsInventoryContainer.module.scss';
import WeaponTypeContainer from './WeaponTypeContainer';
import PhoneAndSimContainer from './PhoneAndSimContainer';
import EquippedItemsCellModel from '../../../models/EquippedItemsCellModel';
import { WeaponTypeContainerCells } from './EquippedWeaponsContainer';

export interface SingleCell {
  id: number;
  cell: EquippedItemsCellModel | null;
}

interface Props {
  onMouseOver: () => void;
  equippedContainerStyles: CSSProperties;

  primaryWeaponCells: WeaponTypeContainerCells;
  secondaryWeaponCells: WeaponTypeContainerCells;
  heavyWeaponCells: WeaponTypeContainerCells;
  phoneCell: SingleCell;
  simCell: SingleCell;
}

const EquippedWeaponsContainerStateless: React.FC<Props> = React.memo(function EquippedWeaponsInventoryContainer({
  onMouseOver,
  equippedContainerStyles,
  primaryWeaponCells,
  secondaryWeaponCells,
  heavyWeaponCells,
  phoneCell,
  simCell,
}) {
  return (
    <div
      className={classes.EquippedWeaponsInventoryContainer}
      style={equippedContainerStyles}
      onMouseOver={onMouseOver}
    >
      <WeaponTypeContainer typeTitle={'Основное Оружие'} cells={primaryWeaponCells} />
      <WeaponTypeContainer typeTitle={'Пистолет'} cells={secondaryWeaponCells} />
      <WeaponTypeContainer typeTitle={'Тяжелое Оружие'} cells={heavyWeaponCells} />
      <PhoneAndSimContainer phoneCell={phoneCell} simCell={simCell} />
    </div>
  );
});

export default EquippedWeaponsContainerStateless;
