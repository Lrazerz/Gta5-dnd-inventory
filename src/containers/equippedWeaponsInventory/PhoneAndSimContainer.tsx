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

  const [transparentElTopOffset, setTransparentElTopOffset] = useState();

  const containerRef = useRef();

  // const hoveredSquare = useSelector(({draggedItem}) => draggedItem.hoveredSquare);

  useEffect(() => {
    const current = containerRef.current;

    const CSSStyleDeclaration = window.getComputedStyle(current);
    let containerHeight: number | string =  CSSStyleDeclaration.getPropertyValue('height');
    const regex = /^((\d|\.)+)/;
    containerHeight = parseFloat(containerHeight.match(regex)[0]);
    console.log('height', containerHeight * 0.2);
    // @ts-ignore
    setTransparentElTopOffset(containerHeight * 0.2);
  }, [containerRef]);

  let phoneSquareContent = phoneCell.cell.item ?
    (<SquareEquippedItem item={phoneCell.cell.item}/>) : null;

  let simSquareContent = simCell.cell.item ?
    (<SquareEquippedItem item={simCell.cell.item}/>) : null;

  return (
    <div className={classes.PhoneAndSimContainer} ref={containerRef}>
      <div className={classes.TypeAndWeaponTitle}>
        <div className={standardClasses.TypeTitleText}>
          <LeadText styles={{textAlign: 'right'}}>ТЕЛЕФОН И СИМКАРТА</LeadText>
        </div>
      </div>
      <div className={classes.WeaponSquareContainer}/>

      <div className={classes.TransparentHoverEl} style={transparentElTopOffset ? {top: transparentElTopOffset} : null} onMouseOver={e => e.stopPropagation()}>
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
});

export default PhoneAndSimContainer;