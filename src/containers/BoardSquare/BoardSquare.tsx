import React, {useState, useEffect} from 'react'
import Square from "../../components/Square/Square";
import {AllItemTypes, ItemTypes} from "../../constants/dnd/types";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../../redux/actions/board";
import Overlay from "../../components/UI/Overlay";
import {setHoveredSquares} from "../../redux/actions/draggedItem";
import classes from '../../styles/board/BoardSquare.module.scss';
import theme from "../../constants/css/theme";
import {removeEquippedItem} from "../../redux/actions/equippedItems";
import {Simulate} from "react-dom/test-utils";
import drag = Simulate.drag;

const BoardSquare = ({coords: [x, y], children}) => {
  const [isOver, setIsOver] = useState(false);
  // for simultaneously change overlay color
  const [canDrop, setCanDrop] = useState(false);

  const {hoveredSquare, allHoveredSquares, canDrop: canDropRedux, item: draggedItem, xDown, yDown} =
    // @ts-ignore - AppBoard does not exists on DefaultRootState
    useSelector(({draggedItem}) => draggedItem);

  const dispatch = useDispatch();

  const [{}, drop] = useDrop({
    accept: AllItemTypes,
    drop: (DNDItem, monitor) => {
      if (monitor.canDrop()) {
        // if the same item
        if(typeof draggedItem.mainCell === 'object' &&
          draggedItem.mainCell[0] === x - xDown && draggedItem.mainCell[1] === y - yDown) {
          return;
        }
        // @ts-ignore
        if (DNDItem.isInventory) {
          // check if weapon - remove prev (transparent) weapon from board
          if(draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
          || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
            dispatch(removeItem(draggedItem.mainCellOnBoard, draggedItem.width, draggedItem.height));
          }
          dispatch(removeEquippedItem(draggedItem.mainCell));
        } else {
          dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
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

  let styles = {outline: `1px solid rgba(109, 114, 125, 0.3)`};

  if (children) {
    styles = null;
  }
  if (isOver) {
    styles = {outline: `1px solid rgba(109, 114, 125, 0.3)`}
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