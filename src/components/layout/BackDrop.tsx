import React, {CSSProperties, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../styles/layout/BackDrop.module.scss';
import {setGoingToDrop} from "../../redux/actions/draggedItem";

const BackDrop = () => {
  const dispatch = useDispatch();
  const {goingToDrop, item: draggedItem} = useSelector(state => state.draggedItem);
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

  const style: CSSProperties = {
    pointerEvents: goingToDrop ? 'none' : 'inherit',
    // backgroundColor: goingToDrop ? 'red' : 'transparent',
  }

  return (
    <div className={classes.BackDrop} onMouseOver={mouseOverHandler} style={style}>
    </div>
  );
};

export default BackDrop;