import React from 'react';
// @ts-ignore
import classes from '../../styles/equippedWeaponsInventory/EquippedWeaponsInventoryContainer.module.scss';
import WeaponTypeContainer from "./WeaponTypeContainer";
import PhoneAndSimContainer from "./PhoneAndSimContainer";
import {useSelector} from 'react-redux';
import {ItemTypes} from "../../constants/dnd/types";
import EquippedItemsCell from "../../models/EquippedItemsCell";

export interface SingleCell {
  id: number,
  cell: EquippedItemsCell | null
}

export interface WeaponTypeContainerCells {
  weaponCell: SingleCell,
  ammoCell: SingleCell,
  toolsCells: SingleCell[],
}

const EquippedWeaponsInventoryContainer = () => {
  const equippedCells = useSelector(({equippedItems}) => equippedItems.cells);

  // accepted types
  const primaryWeaponAcceptedTypes = {
    mainSquareType: ItemTypes.WEAPON,
    ammoType: ItemTypes.AMMO,
    toolsType: ItemTypes.TOOLS,
  }
  const pistolAcceptedTypes = {
    mainSquareType: ItemTypes.WEAPON,
    ammoType: ItemTypes.AMMO,
    toolsType: ItemTypes.TOOLS,
  }
  const heavyWeaponAcceptedTypes = {
    mainSquareType: ItemTypes.WEAPON,
    ammoType: ItemTypes.AMMO,
    toolsType: ItemTypes.TOOLS,
  }

  const getCell: (number) => SingleCell = (id) => ({id, cell: equippedCells[id]});

  // cells
  const primaryWeaponCells: WeaponTypeContainerCells = {
    weaponCell: getCell(1),
    ammoCell: getCell(10),
    toolsCells: [getCell(11), getCell(12), getCell(13)]
  };
  const secondaryWeaponCells = {
    weaponCell: getCell(2),
    ammoCell: getCell(20),
    toolsCells: [getCell(21), getCell(22), getCell(23)]
  };
  const heavyWeaponCells = {
    weaponCell: getCell(3),
    ammoCell: getCell(30),
    toolsCells: [getCell(31), getCell(32), getCell(33)]
  };

  const phoneCell: SingleCell = {id: 40, cell: equippedCells[40]};
  const simCell: SingleCell = {id: 41, cell: equippedCells[41]};

  return (
    <div className={classes.EquippedWeaponsInventoryContainer}>
      <WeaponTypeContainer typeTitle={'Основное Оружие'} acceptedTypes={primaryWeaponAcceptedTypes}
                            cells={primaryWeaponCells}/>
      <WeaponTypeContainer typeTitle={'Пистолет'} acceptedTypes={pistolAcceptedTypes}
                            cells={secondaryWeaponCells}/>
      <WeaponTypeContainer typeTitle={'Тяжелое Оружие'} acceptedTypes={heavyWeaponAcceptedTypes}
                            cells={heavyWeaponCells}/>
      <PhoneAndSimContainer phoneType={ItemTypes.PHONE} simType={ItemTypes.SIM_CARD}
                            phoneCell={phoneCell} simCell={simCell}/>
    </div>
  );
};

export default EquippedWeaponsInventoryContainer;