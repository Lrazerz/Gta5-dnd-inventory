import React from 'react';
import classes from '../../../../styles/inventory/equippedWeaponsInventory/PhoneAndSimContainer.module.scss';
import standardClasses from '../../../../styles/inventory/equippedWeaponsInventory/WeaponTypeContainer.module.scss';
import LeadText from '../../layout/LeadText';
import ClosingWeaponSquare from '../ClosingWeaponSquare';
import SquareEquippedItem from '../SquareEquippedItem';
import { SingleCell } from './EquippedWeaponsContainer';

interface Props {
  phoneCell: SingleCell;
  simCell: SingleCell;
}

const PhoneAndSimContainer = React.memo(function PhoneAndSimContainer({ phoneCell, simCell }: Props) {
  const phoneSquareContent = phoneCell.cell.item ? <SquareEquippedItem item={phoneCell.cell.item} /> : null;

  const simSquareContent = simCell.cell.item ? <SquareEquippedItem item={simCell.cell.item} /> : null;

  return (
    <div className={classes.PhoneAndSimContainer}>
      <div className={classes.TypeAndWeaponTitle}>
        <div className={standardClasses.TypeTitleText}>
          <LeadText styles={{ textAlign: 'right' }}>ТЕЛЕФОН И СИМКАРТА</LeadText>
        </div>
      </div>
      <div className={classes.WeaponSquareContainer} />

      <div className={classes.TransparentHoverEl} onMouseOver={(e) => e.stopPropagation()}>
        <div className={classes.SquaresContainer}>
          <div className={classes.CirclesWrapper}>
            <div className={classes.Circle}>
              <ClosingWeaponSquare coords={phoneCell.id}>{phoneSquareContent}</ClosingWeaponSquare>
            </div>
            <div className={classes.Circle}>
              <ClosingWeaponSquare coords={simCell.id}>{simSquareContent}</ClosingWeaponSquare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PhoneAndSimContainer;
