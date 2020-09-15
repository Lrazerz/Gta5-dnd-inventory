import React, {useState, useEffect} from 'react'
import Square from "../../components/Square/Square";
import {AllItemTypes} from "../../constants/dnd/types";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../../redux/actions/board";
import Overlay from "../../components/UI/Overlay";
import {setHoveredSquares} from "../../redux/actions/draggedItem";
// @ts-ignore
import classes from '../../styles/board/BoardSquare.module.scss';
import theme from "../../constants/css/theme";
import {removeEquippedItem} from "../../redux/actions/equippedItems";

const BoardSquare = ({coords: [x,y], children}) => {
  const [isOver,setIsOver] = useState(false);

  const [hoveredSquare, allHoveredSquares, canDropRedux, item] =
    // @ts-ignore - AppBoard does not exists on DefaultRootState
    useSelector(({draggedItem}) =>
    ([draggedItem.hoveredSquare, draggedItem.allHoveredSquares,
    draggedItem.canDrop, draggedItem.item]));

  const dispatch = useDispatch();

  const [{}, drop] = useDrop({
    accept: AllItemTypes,
    drop: (DNDItem, monitor) => {
      if(monitor.canDrop()) {
        // @ts-ignore
        if (DNDItem.isInventory) {
          dispatch(removeEquippedItem(item.mainCell));
        } else {
          dispatch(removeItem(item.mainCell, item.width, item.height));
        }
        dispatch(addItem([x,y]));
      }
    },
    hover: (DNDItem, monitor) => {
      if(monitor.isOver({shallow: true})) {
        if(!hoveredSquare || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
          dispatch(setHoveredSquares([x,y]));
        }
      }
    },
    canDrop: () => canDropRedux,
  })

  useEffect(() => {
    if(allHoveredSquares) {
      const idx = allHoveredSquares.findIndex((el) => el[0] === x && el[1] === y);
      if(idx !== -1) {
        setIsOver(true);
      } else {
        setIsOver(false);
      }
    } else {
      setIsOver(false);
    }
  },[x,y,allHoveredSquares]);

  return (
    <div ref={drop} className={classes.BoardSquare} style={children === null ? {outline: '1px solid #4d515a'} : null}>
      <Square>{children}</Square>
      {isOver && !canDropRedux && <Overlay color={theme.colors.danger} />}
      {isOver && canDropRedux && <Overlay color={theme.colors.success} />}
    </div>
  )
}

export default BoardSquare;