import React, {CSSProperties} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import EquippedItemsCellModel from "../../../models/EquippedItemsCellModel";
import {setGoingToDrop} from "../../../../redux/actions/inventory/draggedItem";
import EquippedWeaponsContainerStateless from "./EquippedWeaponsContainerStateless";

export interface SingleCell {
  id: number,
  cell: EquippedItemsCellModel | null
}

export interface WeaponTypeContainerCells {
  weaponCell: SingleCell,
  ammoCell: SingleCell,
  toolsCells: SingleCell[],
}

interface Props {
  onMouseOver: () => void;
}

const EquippedWeaponsContainer: React.FC<Props> =
  React.memo(function EquippedWeaponsInventoryContainer({onMouseOver: mouseOverHandler}) {
  const dispatch = useDispatch();
  const {equippedItems: {cells: equippedCells},
    draggedItem: {goingToDrop, hoveredSquare, item: draggedItem}} = useSelector((state) => state.inventory);

  const getCell: (number) => SingleCell = (id) => ({id, cell: equippedCells[id]});

  // cells
  const primaryWeaponCells: WeaponTypeContainerCells = {
    weaponCell: getCell(1),
    ammoCell: getCell(10),
    toolsCells: [getCell(11), getCell(12), getCell(13)]
  };
  const secondaryWeaponCells: WeaponTypeContainerCells = {
    weaponCell: getCell(2),
    ammoCell: getCell(20),
    toolsCells: [getCell(21), getCell(22), getCell(23)]
  };
  const heavyWeaponCells: WeaponTypeContainerCells = {
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

  const equippedContainerMouseOverHandler = () => {
    if(draggedItem) dispatch(setGoingToDrop(true, 0));
    mouseOverHandler();
  }

  const equippedContainerStyles: CSSProperties = {
    zIndex: conditions_to_z_index_200 ? 200 : 'auto',
  }

  return <EquippedWeaponsContainerStateless onMouseOver={equippedContainerMouseOverHandler}
                                            equippedContainerStyles={equippedContainerStyles}
                                            primaryWeaponCells={primaryWeaponCells}
                                            secondaryWeaponCells={secondaryWeaponCells}
                                            heavyWeaponCells={heavyWeaponCells} phoneCell={phoneCell}
                                            simCell={simCell} />
});

export default EquippedWeaponsContainer;