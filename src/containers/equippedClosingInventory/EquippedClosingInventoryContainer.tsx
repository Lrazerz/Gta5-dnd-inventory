import React from 'react';
import {useSelector} from 'react-redux';
import classes from '../../styles/equippedClosingInventory/EquippedClosingInventoryContainer.module.scss';
import AccessoriesTypeContainer from "./AccessoriesTypeContainer";
import ClosingTypeContainer from "./ClosingTypeContainer";
import capImage from '../../assets/images/equippedClosingInventory/cap.png';
import hoodieImage from '../../assets/images/equippedClosingInventory/hoodie.png';
import pantsImage from '../../assets/images/equippedClosingInventory/pants.png';
import bootsImage from '../../assets/images/equippedClosingInventory/boots.png';
import glassesImage from '../../assets/images/equippedClosingInventory/glasses.png';
import UniqueServerDescription from "../../components/UI/UniqueServerDescription";
import {ItemTypes} from "../../constants/dnd/types";
import {SingleCell} from "../equippedWeaponsInventory/EquippedWeaponsInventoryContainer";

const EquippedClosingInventoryContainer = () => {
  const equippedCells = useSelector(({equippedItems}) => equippedItems.cells);

  const headdressCells: SingleCell[] = [
    {id: 50, cell: equippedCells[50]},
    {id: 51, cell: equippedCells[51]},
    {id: 52, cell: equippedCells[52]},
  ];
  const outerwearCells: SingleCell[] = [
    {id: 60, cell: equippedCells[60]},
    {id: 61, cell: equippedCells[61]},
    {id: 62, cell: equippedCells[62]},
  ];
  const pantsCells: SingleCell[] = [
    {id: 70, cell: equippedCells[70]},
    {id: 71, cell: equippedCells[71]},
    {id: 72, cell: equippedCells[72]},
  ];
  const shoesCells: SingleCell[] = [
    {id: 80, cell: equippedCells[80]},
    {id: 81, cell: equippedCells[81]},
    {id: 82, cell: equippedCells[82]},
  ];
  const accessoriesCells: SingleCell[] = [
    {id: 90, cell: equippedCells[90]},
    {id: 91, cell: equippedCells[91]},
    {id: 92, cell: equippedCells[92]},
    {id: 93, cell: equippedCells[92]},
  ];

  return (
    <div className={classes.EquippedClosingInventoryContainer}>
      <ClosingTypeContainer typeTitle={'Головной убор'}
                            typeImage={capImage} acceptedType={ItemTypes.HEADDRESS}
                            cells={headdressCells}/>
      <ClosingTypeContainer typeTitle={'Верхняя Одежда'}
                            typeImage={hoodieImage} acceptedType={ItemTypes.OUTERWEAR}
                            cells={outerwearCells}/>
      <ClosingTypeContainer typeTitle={'Низ'}
                            typeImage={pantsImage} acceptedType={ItemTypes.PANTS}
                            cells={pantsCells}/>
      <ClosingTypeContainer typeTitle={'Обувь'}
                            typeImage={bootsImage} acceptedType={ItemTypes.SHOES}
                            cells={shoesCells}/>
      <AccessoriesTypeContainer typeTitle={'Аксессуары'}
                                typeImage={glassesImage} acceptedType={ItemTypes.ACCESSORIES}
                            cells={accessoriesCells}/>
      <UniqueServerDescription/>
    </div>

  );
};

export default EquippedClosingInventoryContainer;