import React, {useEffect, useRef, useState} from 'react';
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

const WeaponTypeContainer = ({typeTitle, acceptedTypes, cells}: Props) => {

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

  return (
    <div className={classes.WeaponTypeContainer}>
      <div className={classes.Shift}></div>
      <div className={classes.MainContent}>
        <div className={classes.TypeAndWeaponTitle}>
          <LeadText styles={{textAlign: 'right'}}>{typeTitle.toUpperCase()}</LeadText>
          <SecondaryText styles={{textAlign: 'right', marginBottom: '5%'}}>
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
      <div className={classes.UIBordersContainer}>
        <div className={classes.UIBorders}>
          <div className={classes.ClippedElement}/>
        </div>
      </div>
    </div>
  );
};

export default WeaponTypeContainer;