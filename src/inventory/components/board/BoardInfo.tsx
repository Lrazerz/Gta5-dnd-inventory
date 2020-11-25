import React, {CSSProperties, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from '../../../styles/inventory/board/BoardInfo.module.scss';
import cashImage from '../../../assets/inventory/images/board/cash.png';
import SecondaryText from "../../components/layout/SecondaryText";
import {setGoingToDrop} from "../../../redux/actions/inventory/draggedItem";

interface Props {
  cash: string;
}

const BoardInfo: React.FC<Props> = React.memo(function BoardInfo({cash}) {
  const dispatch = useDispatch();
  const {goingToDrop, item: draggedItem} = useSelector(state => state.inventory.draggedItem);
  const goingToDropRef = useRef();
  const draggedItemRef = useRef();
  goingToDropRef.current = goingToDrop;
  draggedItemRef.current = draggedItem;

  const mouseOverHandler = e => {
    if (draggedItemRef.current && !goingToDropRef.current) {
      dispatch(setGoingToDrop(true));
      e.stopPropagation();
    }
  }

  // allow to be BackDrop
  const styles: CSSProperties = {
    pointerEvents: goingToDrop ? 'none' : 'inherit',
    zIndex: goingToDrop ? 'auto' : 200,
    // backgroundColor: goingToDrop ? 'red' : 'transparent',
  }

  return (
    <div className={classes.BoardInfo} style={styles} onMouseOver={mouseOverHandler}>
      <img src={cashImage}/>
      <SecondaryText styles={{width: 'auto', fontWeight: 500}}>
        &nbsp;Наличные:{' '}
        <span className={classes.CurrentCashText}>
            ${cash}
          </span>
      </SecondaryText>
    </div>
  );
});

export default BoardInfo;