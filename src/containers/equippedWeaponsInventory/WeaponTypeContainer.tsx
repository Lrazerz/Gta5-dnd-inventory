import React, {CSSProperties, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../styles/equippedWeaponsInventory/WeaponTypeContainer.module.scss';
import Octagon from "../../components/equippedClosingInventory/Octagon";
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import LeadText from "../../components/layout/LeadText";
import SecondaryText from "../../components/layout/SecondaryText";
import {WeaponTypeContainerCells} from './EquippedWeaponsInventoryContainer';
import SquareEquippedItem from "../equippedClosingInventory/SquareEquippedItem";
import {setGoingToDrop} from "../../redux/actions/draggedItem";

interface Props {
  typeTitle: string;
  acceptedTypes: { mainSquareType: string, ammoType: string, toolsType: string };
  cells: WeaponTypeContainerCells;
}

const WeaponTypeContainer = ({typeTitle, acceptedTypes, cells}: Props) => {

  const dispatch = useDispatch();
  const {item: draggedItem, goingToDrop} = useSelector(state => state.draggedItem);
  const draggedItemRef = useRef();
  const goingToDropRef = useRef();
  draggedItemRef.current = draggedItem;
  goingToDropRef.current = goingToDrop;

  const {mainSquareType, ammoType, toolsType} = acceptedTypes;

  // every has id and item
  const {weaponCell, ammoCell, toolsCells} = cells;

  const weaponSquareContent = weaponCell.cell.item ?
    (<SquareEquippedItem item={weaponCell.cell.item}/>) : null;

  const ammoSquareContent = ammoCell.cell.item ?
    (<SquareEquippedItem key={ammoCell.id}
                         item={ammoCell.cell.item}/>) : null;

  const toolsSquares = toolsCells.map(toolsCell => {
    let toolsSquareContent = null;

    if (toolsCell.cell.item) {
      toolsSquareContent = (
        <SquareEquippedItem item={toolsCell.cell.item}/>
      );
    }

    return (
      <Octagon key={toolsCell.id} width={'19.85%'}>
        <ClosingWeaponSquare acceptedItemType={toolsType} coords={toolsCell.id}
                             itemId={toolsCell.cell.item && toolsCell.cell.item.id}>
          {toolsSquareContent}
        </ClosingWeaponSquare>
      </Octagon>
    );
  });

  const mouseOverHandler = (e) => {
    if(draggedItemRef.current && goingToDropRef.current) {
      dispatch(setGoingToDrop(false));
    }
    e.stopPropagation();
  }

  const styles: CSSProperties = {
    zIndex: draggedItem ? 200 : 'auto',
    pointerEvents: goingToDrop ? 'inherit' : 'none',
  }

  return (
    <div className={classes.WeaponTypeContainer} style={styles} onMouseOver={mouseOverHandler}>
        <div className={classes.TypeAndWeaponTitle}>
          <LeadText styles={{textAlign: 'right'}}>{typeTitle.toUpperCase()}</LeadText>
          <SecondaryText styles={{textAlign: 'right'}}>
            {weaponCell.cell.item && weaponCell.cell.item.name}
          </SecondaryText>
        </div>
        <div className={classes.WeaponSquareContainer}>
            <ClosingWeaponSquare acceptedItemType={mainSquareType}
                                 coords={weaponCell.id}
                                 itemId={weaponCell.cell.item && weaponCell.cell.item.id}>
              {weaponSquareContent}
            </ClosingWeaponSquare>
        </div>
        <div className={classes.AttachmentsSquaresContainer}>
          <div className={classes.LeftArrow}/>
          <Octagon width={'19.85%'}>
            <ClosingWeaponSquare acceptedItemType={ammoType} coords={ammoCell.id}
                                 itemId={ammoCell.cell.item && ammoCell.cell.item.id}>
              {ammoSquareContent}
            </ClosingWeaponSquare>
          </Octagon>
          {toolsSquares}
        </div>
    </div>
  );
};

export default WeaponTypeContainer;