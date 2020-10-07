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

const AccessoriesTypeContainer = ({typeTitle, typeImage, acceptedType, cells}) => {

  const dispatch = useDispatch();
  const {item: draggedItem, goingToDrop} = useSelector(state => state.draggedItem);
  const draggedItemRef = useRef();
  const goingToDropRef = useRef();
  draggedItemRef.current = draggedItem;
  goingToDropRef.current = goingToDrop;

  const squaresContent = cells.map(({id, cell}) => {
    let squareContent = null;

    if (cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <Octagon key={id} width={'19.8%'}>
        <ClosingWeaponSquare acceptedItemType={acceptedType} coords={id}
                             itemId={cell.item && cell.item.id}>
          {squareContent}
        </ClosingWeaponSquare>
      </Octagon>
    );
  });

  const mouseOverHandler = (e) => {
    if(draggedItemRef.current && goingToDropRef.current) {
      console.log('mouse over closingTypeContainer');
      dispatch(setGoingToDrop(false));
    }
    e.stopPropagation();
  }

  const styles: CSSProperties = {
    zIndex: draggedItem ? 200 : 'auto',
    pointerEvents: goingToDrop ? 'inherit' : 'none',
  }

  return (
    <div className={standardClasses.ClosingTypeContainer} style={styles} onMouseOver={mouseOverHandler}>
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