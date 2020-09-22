import React, {useState, useEffect} from 'react'
import Square from "../../components/Square/Square";
import {AllItemTypes} from "../../constants/dnd/types";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../../redux/actions/board";
import Overlay from "../../components/UI/Overlay";
import {setHoveredSquares} from "../../redux/actions/draggedItem";
import classes from '../../styles/board/BoardSquare.module.scss';
import theme from "../../constants/css/theme";
import {removeEquippedItem} from "../../redux/actions/equippedItems";
import {translateToServerItem} from "../../utils/translateToServerItem";

const BoardSquare = ({coords: [x, y], children}) => {
  const [isOver, setIsOver] = useState(false);
  // for simultaneously change overlay color
  const [canDrop, setCanDrop] = useState(false);

  const {hoveredSquare, allHoveredSquares, canDrop: canDropRedux, item, xDown, yDown} =
    // @ts-ignore - AppBoard does not exists on DefaultRootState
    useSelector(({draggedItem}) => draggedItem);

  const dispatch = useDispatch();

  const [{}, drop] = useDrop({
    accept: AllItemTypes,
    drop: (DNDItem, monitor) => {
      if (monitor.canDrop()) {
        // if the same item
        if(typeof item.mainCell === 'object' &&
          item.mainCell[0] === x - xDown && item.mainCell[1] === y - yDown) {
          return;
        }
        // @ts-ignore
        if (DNDItem.isInventory) {
          dispatch(removeEquippedItem(item.mainCell));
        } else {
          dispatch(removeItem(item.mainCell, item.width, item.height));
        }
        dispatch(addItem([x, y]));
      }
    },
    hover: (DNDItem, monitor) => {
      if (monitor.isOver({shallow: true})) {
        if (!hoveredSquare || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
          dispatch(setHoveredSquares([x, y]));
        }
      }
    },
    canDrop: () => canDropRedux
  });

  useEffect(() => {
    if (allHoveredSquares) {
      const idx = allHoveredSquares.findIndex((el) => el[0] === x && el[1] === y);
      if (idx !== -1) {
        setIsOver(true);
      } else {
        setIsOver(false);
      }
    } else {
      setIsOver(false);
    }
    setCanDrop(canDropRedux)
  }, [x, y, allHoveredSquares]);

  let styles = {outline: `1px solid ${theme.colors.gray}`};

  if (children) {
    styles = null;
  }
  if (isOver) {
    styles = {outline: `1px solid ${theme.colors.gray}`}
  }

  // if(x === 4 && y === 0) {
  //   // true && false === danger
  //   console.log('boardSquare: isover', isOver, 'canDrop', canDropRedux);
  // }

  return (
    <div ref={drop} className={classes.BoardSquare} style={styles}>
      <Square>{children}</Square>
      {isOver && !canDrop && <Overlay color={theme.colors.danger}/>}
      {isOver && canDrop && <Overlay color={theme.colors.success}/>}
    </div>
  )
}

export default BoardSquare;