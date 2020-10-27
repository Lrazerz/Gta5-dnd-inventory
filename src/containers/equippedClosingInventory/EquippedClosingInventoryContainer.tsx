import React, {memo, CSSProperties} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
import {setGoingToDrop} from "../../redux/actions/draggedItem";

interface Props {
  onMouseOver: () => void;
}

const EquippedClosingInventoryContainer: React.FC<Props> =
  React.memo(function EquippedClosingInventoryContainer({onMouseOver: mouseOverHandler}) {

  const dispatch = useDispatch();
  const {equippedItems: {cells: equippedCells},
    draggedItem: {goingToDrop, hoveredSquare, item: draggedItem}} = useSelector(state => state);

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
    e.persist();
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
      <ClosingTypeContainer typeTitle={'Обувь'}
                            typeImage={bootsImage} cells={shoesCells}/>
      <AccessoriesTypeContainer typeTitle={'Аксессуары'}
                                typeImage={glassesImage} cells={accessoriesCells}/>
      <UniqueServerDescription/>
    </div>

  );
});

export default EquippedClosingInventoryContainer;