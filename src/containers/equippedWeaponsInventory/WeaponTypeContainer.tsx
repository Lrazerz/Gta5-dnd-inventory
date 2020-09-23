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
  const [mainContentWidth, setMainContentWidth] = useState();
  const [UIBordersContainerWidth, setUIBordersContainerWidth] = useState();
  const weaponTypeContainerRef = useRef();

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const current: HTMLElement | null = weaponTypeContainerRef.current;
      const CSSStyleDeclaration = window.getComputedStyle(current);

      let weaponTypeContainerWidth: string | number = CSSStyleDeclaration.getPropertyValue('width');

      // get number from string (string example: 123.45px)
      const regex = /^((\d|\.)+)/;
      weaponTypeContainerWidth = parseFloat(weaponTypeContainerWidth.match(regex)[0]);

      //@ts-ignore
      setMainContentWidth(Math.floor(weaponTypeContainerWidth * 0.754));
      //@ts-ignore
      setUIBordersContainerWidth(Math.floor(weaponTypeContainerWidth * 0.256));
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [weaponTypeContainerRef]);

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

  console.log(mainContentWidth);
  console.log(UIBordersContainerWidth);
  return (
    <div ref={weaponTypeContainerRef} className={classes.WeaponTypeContainer}>
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