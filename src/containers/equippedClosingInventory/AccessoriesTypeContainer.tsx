import React from 'react';
// @ts-ignore
import standardClasses from '../../styles/equippedClosingInventory/ClosingTypeContainer.module.scss';
// @ts-ignore
import classes from '../../styles/equippedClosingInventory/AccessoriesTypeContainer.module.scss';
import Octagon from "../../components/equippedClosingInventory/Octagon";
import ClosingSquare from "../../components/equippedClosingInventory/ClosingSquare";
import LeadText from "../../components/layout/LeadText";
import {SingleCell} from "../equippedWeaponsInventory/EquippedWeaponsInventoryContainer";
import SquareEquippedItem from "./SquareEquippedItem";

interface Props {
  typeTitle: string;
  typeImage: any;
  acceptedType: string;
  cells: SingleCell[];
}

const AccessoriesTypeContainer = ({typeTitle, typeImage, acceptedType, cells}) => {

  const squaresContent = cells.map(({id,cell}) => {
    let squareContent = null;

    if(cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <Octagon key={id} width={'19.8%'}>
        <ClosingSquare acceptedItemType={acceptedType} coords={id}>
          {squareContent}
        </ClosingSquare>
      </Octagon>
    );
  });

  return (
    <div className={standardClasses.ClosingTypeContainer}>
      <div className={standardClasses.UIBorderContainer}>
        <div className={standardClasses.UIBorder}/>
      </div>
      <div className={standardClasses.MainContent}>
        <div className={standardClasses.TitleContainer}>
        <img src={typeImage}/>
          <LeadText>&nbsp;{typeTitle.toUpperCase()}</LeadText>
        </div>
        <div className={standardClasses.SquaresContainer}>
          <div className={classes.SquaresWrapper}>
            {squaresContent}
            <div className={standardClasses.Arrow}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesTypeContainer;