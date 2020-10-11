import React, {CSSProperties} from 'react';
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

const PhoneAndSimContainer = ({phoneType, simType, phoneCell, simCell}: Props) => {

  const hoveredSquare = useSelector(({draggedItem}) => draggedItem.hoveredSquare);

  let phoneSquareContent = phoneCell.cell.item ?
    (<SquareEquippedItem item={phoneCell.cell.item}/>) : null;

  let simSquareContent = simCell.cell.item ?
    (<SquareEquippedItem item={simCell.cell.item}/>) : null;

  // to keep draggedItem at the top of the screen
  const clipPathedElStyles: CSSProperties = {
    zIndex: hoveredSquare === 40 || hoveredSquare === 41 ? 200 : 200,
  }

  return (
    <div className={classes.PhoneAndSimContainer}>
      <div className={classes.TypeAndWeaponTitle}>
        <div className={standardClasses.TypeTitleText}>
          <LeadText styles={{textAlign: 'right'}}>ТЕЛЕФОН И СИМКАРТА</LeadText>
        </div>
      </div>
      <div className={classes.WeaponSquareContainer} style={clipPathedElStyles} onMouseOver={e => e.stopPropagation()}>
        <div className={classes.SquaresContainer}>
          <div className={classes.CirclesWrapper}>
            <div className={classes.Circle}>
              <ClosingWeaponSquare acceptedItemType={phoneType} coords={phoneCell.id}>
                {phoneSquareContent}
              </ClosingWeaponSquare>
            </div>
            <div className={classes.Circle}>
              <ClosingWeaponSquare acceptedItemType={simType} coords={simCell.id}>
                {simSquareContent}
              </ClosingWeaponSquare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAndSimContainer;