import React from 'react';
//@ts-ignore
import classes from '../../styles/equippedWeaponsInventory/PhoneAndSimContainer.module.scss';
// @ts-ignore
import standardClasses from '../../styles/equippedWeaponsInventory/WeaponTypeContainer.module.scss';
import LeadText from "../../components/layout/LeadText";
import ClosingSquare from "../../components/equippedClosingInventory/ClosingSquare";
import SquareEquippedItem from "../equippedClosingInventory/SquareEquippedItem";
import {SingleCell} from './EquippedWeaponsInventoryContainer';

interface Props {
  phoneType: string;
  simType: string;
  phoneCell: SingleCell;
  simCell: SingleCell;
}

const PhoneAndSimContainer = ({phoneType, simType, phoneCell, simCell}: Props) => {
  let phoneSquareContent = phoneCell.cell.item ?
    (<SquareEquippedItem item={phoneCell.cell.item}/>) : null;

  let simSquareContent = simCell.cell.item ?
    (<SquareEquippedItem item={simCell.cell.item}/>) : null;

  return (
    <div className={classes.PhoneAndSimContainer}>
      <div className={standardClasses.MainContent}>
        <div className={classes.TypeAndWeaponTitle}>
            <div className={standardClasses.TypeTitleText}>
              <LeadText styles={{textAlign: 'right'}}>ТЕЛЕФОН И СИМКАРТА</LeadText>
            </div>
          </div>
        <div className={classes.WeaponSquareContainer}>
          <div className={classes.SquaresContainer}>
            <div className={classes.CirclesWrapper}>
              <div className={classes.Circle}>
                <ClosingSquare acceptedItemType={phoneType} coords={phoneCell.id}>
                  {phoneSquareContent}
                </ClosingSquare>
              </div>
              <div className={classes.Circle}>
                <ClosingSquare acceptedItemType={simType} coords={simCell.id}>
                  {simSquareContent}
                </ClosingSquare>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.UIBordersContainer}>
          <div className={classes.UIBorders}>
            <div className={classes.ClippedElement} />
          </div>
      </div>
    </div>
  );
};

export default PhoneAndSimContainer;