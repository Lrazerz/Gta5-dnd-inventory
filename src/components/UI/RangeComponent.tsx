import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../styles/UI/RangeComponent.module.scss';
import {closeContextMenu, mpTriggerDropItem} from "../../redux/actions/contextMenu";
import {addDraggedItem, draggedItemRelease, stackItem} from "../../redux/actions/draggedItem";
import {equippedChangeCurrentCount, removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";
import {addItem, boardChangeCurrentCountByItemId} from "../../redux/actions/board";
import Item from "../../models/Item";

interface Props {
  leftOffset: number;
  topOffset: number;
  contextItem: Item;
  splitMenuOpen: boolean;
}

// todo change count remove splitMenuOpen
const RangeComponent: React.FC<Props> = React.memo(({leftOffset, topOffset, contextItem, splitMenuOpen}) => {
  // lift up item to be at the top of the image
  const containerRef = useRef();

  // todo change count remove contextItem &&
  const [splittedCount, setSplittedCount] = useState(0);
  const [reducedTopOffset, setReducedTopOffset] = useState();
  const dispatch = useDispatch();

  const {
    draggedItem: {canDrop, hoveredSquare, allHoveredSquares, item: draggedItem, xDown, yDown, goingToDrop, goingToStack},
    board: {board: boardCells},
  } = useSelector(state => state);

  // refs to pass to event handler
  const canDropRef = useRef();
  const hoveredSquareRef = useRef();
  const allHoveredSquaresRef = useRef();
  const draggedItemRef = useRef();
  const xDownRef = useRef();
  const yDownRef = useRef();
  const goingToDropRef = useRef();
  const goingToStackRef = useRef();
  const boardCellsRef = useRef();
  canDropRef.current = canDrop;
  hoveredSquareRef.current = hoveredSquare;
  allHoveredSquaresRef.current = allHoveredSquares;
  draggedItemRef.current = draggedItem;
  xDownRef.current = xDown;
  yDownRef.current = yDown;
  goingToDropRef.current = goingToDrop;
  goingToStackRef.current = goingToStack;
  boardCellsRef.current = boardCells;


  useEffect(() => {
    if(containerRef.current) {
      // @ts-ignore
      const rect = containerRef.current.getBoundingClientRect();
      setReducedTopOffset(rect.height);
    }
  }, [containerRef.current]);

  useEffect(() => {
    //@ts-ignore
    setSplittedCount(Math.floor(contextItem && contextItem.currentCount/2));
  },[contextItem]);

  // similar logic to squareCommonItem
  const successButtonMouseDownHandler = event => {
    event.persist();
    if (event.button !== 0) return;
    event.stopPropagation();
    const contextItemWithChangedCount = {...contextItem, currentCount: Number(splittedCount)};
    dispatch(addDraggedItem(contextItemWithChangedCount, contextItemWithChangedCount.mainCell as [number, number]));

    // last-remove
    // save target
    // const savedTarget = event.currentTarget;
    // savedTarget.style.zIndex = 0;

    // ---------------------Logic to add dragged item to the body------------------------

    let requiredItem: HTMLElement;

    if(typeof contextItem.mainCell === 'number') {
      requiredItem = document.getElementById(`square-equipped-item-${contextItem.mainCell}`);
    } else {
      requiredItem =
      document.getElementById(`square-common-item-${contextItem.mainCell[0]}-${contextItem.mainCell[1]}`);
    }

    // @ts-ignore
    const newClone: HTMLElement = requiredItem.cloneNode(true);

    const currentCountWrapper = newClone.childNodes[1];
    const currentCountEl = currentCountWrapper.childNodes[0];
    currentCountEl.textContent = String(splittedCount);

    // const newClone = event.currentTarget.cloneNode(true);
    newClone.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    // last-remove
    // savedTarget.style.pointerEvents = 'none';

    newClone.style.zIndex = String(150);
    newClone.style.outline = 'none';
    newClone.style.backgroundColor = 'transparent';
    newClone.id = 'curr-dragged-item';

    if(typeof contextItem.mainCell === 'number') {
      // board square width
      const squareWidth = document.body.clientWidth * 0.0323;
      newClone.style.width = squareWidth * contextItem.width + 'px';
      newClone.style.height = squareWidth * contextItem.height + 'px';
    }

    document.body.append(newClone);

    const moveAt = (pageX, pageY) => {
      newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
      newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
    }

    moveAt(event.pageX, event.pageY);

    const onMouseMove = (event) => {
      event.stopPropagation();
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    newClone.onmouseover = e => {
      e.stopPropagation();
    }

    newClone.onmouseup = () => {
      const goingToStackSaved = goingToStackRef.current;
      // if can't move all part (stack) - save draggedItem witl less count

      // ----------------------------- If can't stack all part of the item ---------------------------------
      if (canDropRef.current) {
        if (goingToStackRef.current) {
          // @ts-ignore
          if (goingToStackRef.current.draggedItemNewCurrentCount > 0) {
            console.log('goingToStackref current', goingToStackSaved);

            const requiredItem: HTMLElement = document.getElementById(`curr-dragged-item`);
            const currentCountWrapper = requiredItem.childNodes[1];
            const currentCountEl = currentCountWrapper.childNodes[0];
            // @ts-ignore
            currentCountEl.textContent = String(goingToStackSaved.draggedItemNewCurrentCount);
            // @ts-ignore
            const contextItemWithChangedCount = {
              ...contextItem,
              //@ts-ignore
              currentCount: goingToStackSaved.draggedItemNewCurrentCount
            };
            dispatch(stackItem(true));
            dispatch(draggedItemRelease());
            //@ts-ignore todo supressed
            dispatch(addDraggedItem(contextItemWithChangedCount, contextItemWithChangedCount.mainCell));
            if(contextItem.isEquipped) {
              //@ts-ignore
              dispatch(equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - (splittedCount - goingToStackSaved.draggedItemNewCurrentCount)));
            } else {
              //@ts-ignore
              dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - (splittedCount - goingToStackSaved.draggedItemNewCurrentCount)));
            }
            return;
          }
        }
      }
      // -----------------------------------------------------------------------------------------------

      event.stopPropagation();
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;

      if (canDropRef.current) {
        //--------------------------------- Going To Stack (full part of the item ------------------------------------
        if (goingToStackRef.current) {
          //@ts-ignore
          if (goingToStackRef.current.stackableItem.mainCell !== contextItem.mainCell) {
            dispatch(stackItem(true));
            if(contextItem.isEquipped) {
              //@ts-ignore
              dispatch(equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - splittedCount));
            } else {
              //@ts-ignore
              dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - splittedCount));
            }
          }
        }
        // ------------------------------ Drop item ------------------------------
        else if (goingToDropRef.current) {
          // @ts-ignore
          if (typeof draggedItemRef.current.mainCell === 'object') {
            // if drop item from board
            //@ts-ignore
            dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
          } else {
            // drop item from equipped
            // @ts-ignore
            dispatch(equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount));
          }
          mpTriggerDropItem(draggedItemRef.current);
        }
        // -----------------------------------------------------------------------

        // ------------------------------------- Add to equipped -------------------------------------
        else if (typeof hoveredSquareRef.current === 'number') {
          if(contextItem.mainCell !== hoveredSquareRef.current) {
            // if add to equipped
            // ------------------------------------- Add from board (to eq) -----------------------------
            if(typeof contextItem.mainCell === 'object') {

              //@ts-ignore
              dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            }
            // ---------------------------------------------------------------------------------------------
            // ------------------------------------- Add from equipped (to eq) -----------------------------
            else {
              //@ts-ignore
              equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount);
            }
            try {
              dispatch(setEquippedItem(hoveredSquareRef.current));
            } catch (e) {}
          }
        }
        // -----------------------------------------------------------------------
        // --------------------------------------------------------------------------------------
        // ------------------------------------- Add to board -------------------------------------
        // todo check from
        else if (typeof hoveredSquareRef.current === 'object') {
          // ------------------------------------------- Add from equipped (to board) ------------------------------
          if(typeof contextItem.mainCell === 'number') {
            //@ts-ignore
            dispatch(equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount));
            try {
              dispatch(addItem());
            } catch (e) {}
          }
          // --------------------------------------------------------------------------------------
          // ------------------------------------------- Add from board (to board) ------------------------------
          else {
            // @ts-ignore
            // check all squares, not only mainCell

            // if any square of the source splitted item hovered
            let isPartOfItemHovered = false;

            // @ts-ignore
            allHoveredSquaresRef.current.forEach(hovSquare => {
              if(boardCells[hovSquare[1]][hovSquare[0]] && boardCells[hovSquare[1]][hovSquare[0]].id === contextItem.id) isPartOfItemHovered = true;
            });

            if (!isPartOfItemHovered) {
              // check if this is not the current item square
              //@ts-ignore
              dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
              try {
                dispatch(addItem());
              } catch (e) {}
            }
          }
          // --------------------------------------------------------------------------------------
        }
      }
      // ----------------------------------------------------------------------------------------
      // last-remove
      // event.target.style.pointerEvents = 'inherit';
      dispatch(draggedItemRelease());
    }
  }
  const cancelButtonMouseDownHandler = () => {
    dispatch(closeContextMenu());
  }

  const splittedCountChangeHandler = e => {
    setSplittedCount(e.target.value);
  }

  const styles = {
    left: leftOffset,
    // @ts-ignore
    top: reducedTopOffset ? topOffset - reducedTopOffset : topOffset - 100,
    display: splitMenuOpen ? 'block' : 'none',
  }


  // todo change count remove contextItem &&
  return (
    <div className={classes.RangeComponentWrapper} style={styles} ref={containerRef} onClick={e => e.stopPropagation()}>
      <div className={classes.RangeComponentBG}>
        <div className={classes.InputRangeWrapper}>
          <input type='range' className={classes.Input} value={splittedCount} onChange={splittedCountChangeHandler}
                 min={1} max={contextItem && contextItem.currentCount - 1} step={1}/>
        </div>
        <div className={classes.SplitCurrentCount}>
          {splittedCount}
        </div>
        <div className={classes.ButtonWrapper}>
          <div className={classes.CancelButton} onClick={cancelButtonMouseDownHandler}>Отмена</div>
          <div className={classes.SuccessButton} onClick={successButtonMouseDownHandler}>Ок</div>
        </div>
      </div>
    </div>
  );
});

export default RangeComponent;