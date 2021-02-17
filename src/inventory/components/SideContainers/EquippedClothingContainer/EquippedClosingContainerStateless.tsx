import React, { CSSProperties } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../../../../styles/inventory/equippedClosingInventory/EquippedClosingInventoryContainer.module.scss';
import AccessoriesTypeContainer from './AccessoriesTypeContainer';
import ClosingTypeContainer from './ClosingTypeContainer';
import capImage from '../../../../assets/inventory/images/equippedClosingInventory/cap.svg';
import hoodieImage from '../../../../assets/inventory/images/equippedClosingInventory/hoodie.svg';
import pantsImage from '../../../../assets/inventory/images/equippedClosingInventory/pants.svg';
import shoeImage from '../../../../assets/inventory/images/equippedClosingInventory/shoe.svg';
import glassesImage from '../../../../assets/inventory/images/equippedClosingInventory/eye-glasses.svg';
import UniqueServerDescription from '../../UI/UniqueServerDescription';
import { SingleCell } from '../EquippedWeaponsContainer/EquippedWeaponsContainer';
import { setGoingToDrop } from '../../../../redux/actions/inventory/draggedItem';

interface Props {
  onMouseOver: () => void;
  equippedContainerStyles: CSSProperties;

  headdressCells: SingleCell[];
  outerwearCells: SingleCell[];
  pantsCells: SingleCell[];
  shoesCells: SingleCell[];
  accessoriesCells: SingleCell[];
}

const EquippedClosingContainerStateless: React.FC<Props> = React.memo(function EquippedClosingInventoryContainer({
  onMouseOver,
  equippedContainerStyles,
  headdressCells,
  outerwearCells,
  pantsCells,
  shoesCells,
  accessoriesCells,
}) {
  return (
    <div
      style={equippedContainerStyles}
      className={classes.EquippedClosingInventoryContainer}
      onMouseOver={onMouseOver}
    >
      <ClosingTypeContainer typeTitle={'Головной убор'} typeImage={capImage} cells={headdressCells} />
      <ClosingTypeContainer typeTitle={'Верхняя Одежда'} typeImage={hoodieImage} cells={outerwearCells} />
      <ClosingTypeContainer typeTitle={'Низ'} typeImage={pantsImage} cells={pantsCells} />
      <ClosingTypeContainer typeTitle={'Обувь'} typeImageWidth={88} typeImage={shoeImage} cells={shoesCells} />
      <AccessoriesTypeContainer typeTitle={'Аксессуары'} typeImage={glassesImage} cells={accessoriesCells} />
      <UniqueServerDescription />
    </div>
  );
});

export default EquippedClosingContainerStateless;
