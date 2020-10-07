import React, {CSSProperties, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// @ts-ignore
import classes from '../../styles/equippedClosingInventory/ClosingTypeContainer.module.scss';
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import Octagon from "../../components/equippedClosingInventory/Octagon";
import LeadText from "../../components/layout/LeadText";
import SquareEquippedItem from "./SquareEquippedItem";
import {setGoingToDrop} from "../../redux/actions/draggedItem";

const ClosingTypeContainer = ({typeTitle, typeImage, acceptedType, cells}) => {

  const dispatch = useDispatch();
  const {item: draggedItem, goingToDrop} = useSelector(state => state.draggedItem);
  const draggedItemRef = useRef();
  const goingToDropRef = useRef();
  draggedItemRef.current = draggedItem;
  goingToDropRef.current = goingToDrop;

  const squaresContent = cells.map(({id,cell}) => {
    let squareContent = null;

    if(cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <Octagon key={id}>
        <ClosingWeaponSquare acceptedItemType={acceptedType} coords={id}
                             itemId={cell.item && cell.item.id}>
          {squareContent}
        </ClosingWeaponSquare>
      </Octagon>
    )
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
    <div className={classes.ClosingTypeContainer} onMouseUp={e => e.stopPropagation()} onMouseOver={mouseOverHandler} style={styles}>
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