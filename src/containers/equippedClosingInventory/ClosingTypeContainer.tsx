import React from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingTypeContainer.module.scss';
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import Octagon from "../../components/equippedClosingInventory/Octagon";
import LeadText from "../../components/layout/LeadText";
import SquareEquippedItem from "./SquareEquippedItem";

interface Props {
  typeTitle: string;
  typeImage: string;
  acceptedType: string;
  cells: any[];
}

const ClosingTypeContainer: React.FC<Props> =
    React.memo(function ClosingTypeContainer({typeTitle, typeImage, acceptedType, cells}) {

  const squaresContent = cells.map(({id,cell}) => {
    let squareContent = null;

    if(cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <div key={id} style={{width: '26%', position: 'relative'}}>
        <Octagon coords={id}>
          <ClosingWeaponSquare acceptedItemType={acceptedType} coords={id}>
            {squareContent}
          </ClosingWeaponSquare>
        </Octagon>
      </div>
    )
  });

  // last-remove
  // const outerContainerMouseUpHandler = e => {
  //   e.stopPropagation();
  // }

  return (
    <div className={classes.ClosingTypeContainer}>
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
});

export default ClosingTypeContainer;