import React from 'react';
import {useDrag} from 'react-dnd';
import {useDispatch} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import EquippedItem from "../../components/items/EquippedItem";
import classes from '../../styles/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";

const SquareEquippedItem = ({item}: { item: any }) => {

  const dispatch = useDispatch();
  const [{}, drag, preview] = useDrag({
    item: {type: item.category, isInventory: true},
    begin() {
      dispatch(addDraggedItem([0, 0], item, true));
    },
    end() {
      dispatch(draggedItemRelease());
    },
    collect: () => {
      return ({});
    }
  });

  return (
    <EquippedItem forwardedRef={drag} previewConnect={preview} imageUrl={item.imageUrl}>
      {item.imageUrl && <img src={item.imageUrl} className={classes.Image}/>}
      {item.currentCount > 1
      &&
      (<div className={classes.CurrentCount}>
        <SecondaryText>
          {item.currentCount}
        </SecondaryText>
      </div>)}
    </EquippedItem>
  );
}

export default SquareEquippedItem;