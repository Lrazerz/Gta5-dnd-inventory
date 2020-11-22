import React, {CSSProperties} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from '../../styles/equippedClosingInventory/EquippedClosingInventoryContainer.module.scss';
import AccessoriesTypeContainer from "./AccessoriesTypeContainer";
import ClosingTypeContainer from "./ClosingTypeContainer";
import capImage from '../../../assets/inventory/images/equippedClosingInventory/cap.svg';
import hoodieImage from '../../../assets/inventory/images/equippedClosingInventory/hoodie.svg';
import pantsImage from '../../../assets/inventory/images/equippedClosingInventory/pants.svg';
import shoeImage from '../../../assets/inventory/images/equippedClosingInventory/shoe.svg';
import glassesImage from '../../../assets/inventory/images/equippedClosingInventory/eye-glasses.svg';
import UniqueServerDescription from "../../components/UI/UniqueServerDescription";
import {SingleCell} from "../equippedWeaponsInventory/EquippedWeaponsInventoryContainer";
import {setGoingToDrop} from "../../../redux/actions/inventory/draggedItem";

interface Props {
  onMouseOver: () => void;
}

const EquippedClosingInventoryContainer: React.FC<Props> =
  React.memo(function EquippedClosingInventoryContainer({onMouseOver: mouseOverHandler}) {

  const dispatch = useDispatch();
  const {equippedItems: {cells: equippedCells},
    draggedItem: {goingToDrop, hoveredSquare, item: draggedItem}} = useSelector(state => state.inventory);

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

  const equippedContainerMouseOverHandler = e => {
    if (draggedItem) dispatch(setGoingToDrop(true, 0));
    mouseOverHandler();
  }

  const goingToDropOnThisSquare: boolean = goingToDrop && goingToDrop.areaId === 0;
  // to keep item at the to of the screen, while
  const hoveredSquareFromClosingInventory: boolean = typeof hoveredSquare === 'number' && hoveredSquare >= 50;
  // to keep item at the top of the screen
  // z-index: 200, when draggedItem and goingToDrop === false || true and areaId !== 0
  const conditions_to_z_index_200 = draggedItem &&
    !goingToDropOnThisSquare &&
    !hoveredSquareFromClosingInventory;

  const equippedContainerStyles: CSSProperties = {
    zIndex: conditions_to_z_index_200 ? 200 : 'auto',
  }

  return (
    <div className={classes.EquippedClosingInventoryContainer} style={equippedContainerStyles}
         onMouseOver={equippedContainerMouseOverHandler}>
      <ClosingTypeContainer typeTitle={'Головной убор'}
                            typeImage={capImage} cells={headdressCells}/>
      <ClosingTypeContainer typeTitle={'Верхняя Одежда'}
                            typeImage={hoodieImage} cells={outerwearCells}/>
      <ClosingTypeContainer typeTitle={'Низ'}
                            typeImage={pantsImage} cells={pantsCells}/>
      <ClosingTypeContainer typeTitle={'Обувь'} typeImageWidth={88}
                            typeImage={shoeImage} cells={shoesCells}/>
      <AccessoriesTypeContainer typeTitle={'Аксессуары'}
                                typeImage={glassesImage} cells={accessoriesCells}/>
      <UniqueServerDescription/>
    </div>

  );
});

export default EquippedClosingInventoryContainer;