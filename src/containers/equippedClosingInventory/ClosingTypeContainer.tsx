import React from 'react';
// @ts-ignore
import classes from '../../styles/equippedClosingInventory/ClosingTypeContainer.module.scss';
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import Octagon from "../../components/equippedClosingInventory/Octagon";
import LeadText from "../../components/layout/LeadText";
import SquareEquippedItem from "./SquareEquippedItem";

const ClosingTypeContainer = ({typeTitle, typeImage, acceptedType, cells}) => {

  const squaresContent = cells.map(({id,cell}) => {
    let squareContent = null;

    if(cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <Octagon key={id} coords={id}>
        <ClosingWeaponSquare acceptedItemType={acceptedType} coords={id}>
          {squareContent}
        </ClosingWeaponSquare>
      </Octagon>
    )
  });

  return (
    <div className={classes.ClosingTypeContainer} onMouseUp={e => e.stopPropagation()}>
      <div className={classes.TitleContainer}>
        <div className={classes.ImageContainer}>
          <img src={typeImage}/>
        </div>
        <LeadText>
          &nbsp;{typeTitle.toUpperCase()}
        </LeadText>
      </div>
      <div className={classes.Borders}/>
      <div className={classes.SquaresContainer}>
        {squaresContent}
        <div className={classes.Arrow}/>
      </div>
    </div>
  );
};

export default ClosingTypeContainer;