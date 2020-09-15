import React from 'react';
// @ts-ignore
import classes from '../../styles/equippedClosingInventory/ClosingTypeContainer.module.scss';
import ClosingSquare from "../../components/equippedClosingInventory/ClosingSquare";
import Octagon from "../../components/equippedClosingInventory/Octagon";
import LeadText from "../../components/layout/LeadText";
import SquareEquippedItem from "./SquareEquippedItem";
import {SingleCell} from "../equippedWeaponsInventory/EquippedWeaponsInventoryContainer";

const ClosingTypeContainer = ({typeTitle, typeImage, acceptedType, cells}) => {
  const squaresContent = cells.map(({id,cell}) => {
    let squareContent = null;

    if(cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <Octagon key={id}>
        <ClosingSquare acceptedItemType={acceptedType} coords={id}>
          {squareContent}
        </ClosingSquare>
      </Octagon>
    )
  });

  return (
    <div className={classes.ClosingTypeContainer}>
      <div className={classes.UIBorderContainer}>
        <div className={classes.UIBorder}>
          <div className={classes.ClippedElement} />
        </div>
      </div>
      <div className={classes.MainContent}>
        <div className={classes.TitleContainer}>
          <div className={classes.ImageContainer}>
            <img src={typeImage}/>
          </div>
          <LeadText>
            &nbsp;{typeTitle.toUpperCase()}
          </LeadText>
        </div>
        <div className={classes.SquaresContainer}>
          {squaresContent}
          <div className={classes.Arrow}/>
        </div>
      </div>
    </div>
  );
};

export default ClosingTypeContainer;