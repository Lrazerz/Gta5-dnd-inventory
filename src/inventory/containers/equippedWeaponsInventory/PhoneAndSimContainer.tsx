import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../styles/equippedWeaponsInventory/PhoneAndSimContainer.module.scss';
import standardClasses from '../../styles/equippedWeaponsInventory/WeaponTypeContainer.module.scss';
import LeadText from "../../components/layout/LeadText";
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import SquareEquippedItem from "../equippedClosingInventory/SquareEquippedItem";
import {SingleCell} from './EquippedWeaponsInventoryContainer';

interface Props {
  phoneType: string;
  simType: string;
  phoneCell: SingleCell;
  simCell: SingleCell;
}

const PhoneAndSimContainer = React.memo(function PhoneAndSimContainer({phoneType, simType, phoneCell, simCell}: Props) {

  let phoneSquareContent = phoneCell.cell.item ?
    (<SquareEquippedItem item={phoneCell.cell.item}/>) : null;

  let simSquareContent = simCell.cell.item ?
    (<SquareEquippedItem item={simCell.cell.item}/>) : null;

  return (
    <div className={classes.PhoneAndSimContainer}>
      <div className={classes.TypeAndWeaponTitle}>
        <div className={standardClasses.TypeTitleText}>
          <LeadText styles={{textAlign: 'right'}}>ТЕЛЕФОН И СИМКАРТА</LeadText>
        </div>
      </div>
      <div className={classes.WeaponSquareContainer}/>

      <div className={classes.TransparentHoverEl} onMouseOver={e => e.stopPropagation()}>
        <div className={classes.SquaresContainer}>
          <div className={classes.CirclesWrapper}>
            <div className={classes.Circle}>
              <ClosingWeaponSquare coords={phoneCell.id}>
                {phoneSquareContent}
              </ClosingWeaponSquare>
            </div>
            <div className={classes.Circle}>
              <ClosingWeaponSquare coords={simCell.id}>
                {simSquareContent}
              </ClosingWeaponSquare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PhoneAndSimContainer;