import React, {CSSProperties, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import standardClasses from '../../styles/equippedClosingInventory/ClosingTypeContainer.module.scss';
import classes from '../../styles/equippedClosingInventory/AccessoriesTypeContainer.module.scss';
import Octagon from "../../components/equippedClosingInventory/Octagon";
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import LeadText from "../../components/layout/LeadText";
import {SingleCell} from "../equippedWeaponsInventory/EquippedWeaponsInventoryContainer";
import SquareEquippedItem from "./SquareEquippedItem";
import {setGoingToDrop} from "../../redux/actions/draggedItem";

interface Props {
  typeTitle: string;
  typeImage: any;
  acceptedType: string;
  cells: SingleCell[];
}

const AccessoriesTypeContainer: React.FC<Props> = ({typeTitle, typeImage, acceptedType, cells}) => {

  const squaresContent = cells.map(({id, cell}) => {
    let squareContent = null;

    if (cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <Octagon key={id} width={'19.8%'} coords={id}>
        <ClosingWeaponSquare acceptedItemType={acceptedType} coords={id}>
          {squareContent}
        </ClosingWeaponSquare>
      </Octagon>
    );
  });

  return (
    <div className={standardClasses.ClosingTypeContainer}>
      <div className={standardClasses.TitleContainer}>
        <img src={typeImage}/>
        <LeadText>&nbsp;{typeTitle.toUpperCase()}</LeadText>
      </div>
      <div className={standardClasses.Borders}/>
      <div className={standardClasses.SquaresContainer}>
        <div className={classes.SquaresWrapper}>
          {squaresContent}
          <div className={standardClasses.Arrow}/>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesTypeContainer;