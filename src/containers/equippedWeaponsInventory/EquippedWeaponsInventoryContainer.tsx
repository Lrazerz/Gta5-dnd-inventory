import React, {CSSProperties} from 'react';
import classes from '../../styles/equippedWeaponsInventory/EquippedWeaponsInventoryContainer.module.scss';
import WeaponTypeContainer from "./WeaponTypeContainer";
import PhoneAndSimContainer from "./PhoneAndSimContainer";
import {useSelector, useDispatch} from 'react-redux';
import {ItemTypes} from "../../constants/dnd/types";
import EquippedItemsCell from "../../models/EquippedItemsCell";
import {setGoingToDrop} from "../../redux/actions/draggedItem";

export interface SingleCell {
  id: number,
  cell: EquippedItemsCell | null
}

export interface WeaponTypeContainerCells {
  weaponCell: SingleCell,
  ammoCell: SingleCell,
  toolsCells: SingleCell[],
}

const EquippedWeaponsInventoryContainer = React.memo(function EquippedWeaponsInventoryContainer() {
  const dispatch = useDispatch();
  const {equippedItems: {cells: equippedCells},
    draggedItem: {goingToDrop, hoveredSquare, item: draggedItem}} = useSelector((state) => state);

  // accepted types
  const primaryWeaponAcceptedTypes = {
    mainSquareType: ItemTypes.WEAPON_RIFLE,
    ammoType: ItemTypes.AMMO,
    toolsType: ItemTypes.TOOLS,
  }
  const pistolAcceptedTypes = {
    mainSquareType: ItemTypes.WEAPON_PISTOL,
    ammoType: ItemTypes.AMMO,
    toolsType: ItemTypes.TOOLS,
  }
  const heavyWeaponAcceptedTypes = {
    mainSquareType: ItemTypes.WEAPON_LAUNCHER,
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

  const goingToDropOnThisSquare: boolean = goingToDrop && goingToDrop.areaId === 0;
  // to keep item at the to of the screen, while
  const hoveredSquareFromClosingInventory: boolean = typeof hoveredSquare === 'number' && hoveredSquare < 50;
  // to keep item at the top of the screen
  // z-index: 200, when draggedItem and goingToDrop === false || true and areaId !== 0
  const conditions_to_z_index_200 = draggedItem &&
    !goingToDropOnThisSquare &&
    !hoveredSquareFromClosingInventory;

  const equippedContainerMouseOverHandler = e => {
    if(draggedItem) dispatch(setGoingToDrop(true, 0));
  }

  const equippedContainerStyles: CSSProperties = {
    zIndex: conditions_to_z_index_200 ? 200 : 'auto',
  }

  return (
    <div className={classes.EquippedWeaponsInventoryContainer} style={equippedContainerStyles}
    onMouseOver={equippedContainerMouseOverHandler}>
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
});

export default EquippedWeaponsInventoryContainer;