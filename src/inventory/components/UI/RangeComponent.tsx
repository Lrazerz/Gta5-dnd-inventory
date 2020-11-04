import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../styles/UI/RangeComponent.module.scss';
import {closeContextMenu} from "../../redux/actions/contextMenu";
import {addDraggedItem, draggedItemRelease, stackItem} from "../../redux/actions/draggedItem";
import {equippedChangeCurrentCount, removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";
import {addItem, boardChangeCurrentCountByItemId} from "../../redux/actions/board";
import Item from "../../models/Item";
import {addExternalBoardItem, externalBoardChangeCurrentCountByItemId} from "../../redux/actions/externalBoard";
import {mpTriggerDropExternalItem, mpTriggerDropItem} from "../../utils/mpTriggers";

interface Props {
  leftOffset: number;
  topOffset: number;
  contextItem: Item;
  hoveredArea: number;
  splitMenuOpen: boolean;
}

// hoveredArea - context item area
const RangeComponent: React.FC<Props> = React.memo(({leftOffset, topOffset, contextItem, hoveredArea, splitMenuOpen}) => {
  // lift up item to be at the top of the image
  const containerRef = useRef();

  const [splittedCount, setSplittedCount] = useState(0);
  const [reducedTopOffset, setReducedTopOffset] = useState();
  const dispatch = useDispatch();

  const {
    draggedItem: {canDrop, hoveredSquare, allHoveredSquares, item: draggedItem, xDown, yDown, goingToDrop, goingToStack,
      hoveredArea: hoveredAreaOfScreen},
    board: {board: boardCells, boardSquareSize},
    externalBoard: {externalBoard: externalBoardCells},
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
  const externalBoardCellsRef = useRef();
  const hoveredAreaOfScreenRef = useRef();
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
  // @ts-ignore
  externalBoardCellsRef.current = externalBoardCells;
  hoveredAreaOfScreenRef.current = hoveredAreaOfScreen;


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
    if (event.button !== 0) return;
    const contextItemWithChangedCount = {...contextItem, currentCount: Number(splittedCount)};
    // todo last-todo
    dispatch(addDraggedItem(contextItemWithChangedCount, hoveredArea));


    //region --------------------- Logic to add dragged item to the body ------------------------
    let requiredItem: HTMLElement;

    if(hoveredArea === 1) {
      requiredItem =
        document.getElementById(`square-common-item-${contextItem.mainCell[0]}-${contextItem.mainCell[1]}`);
    } else if (hoveredArea === 2) {
      requiredItem = document.getElementById(`external-square-common-item-${contextItem.mainCell[0]}-${contextItem.mainCell[1]}`);
    } else if (hoveredArea === 3) {
      requiredItem = document.getElementById(`square-equipped-item-${contextItem.mainCell}`);
    }
    // @ts-ignore
    const newClone: HTMLElement = requiredItem.cloneNode(true);

    const currentCountWrapper = newClone.childNodes[1];
    const currentCountEl = currentCountWrapper.childNodes[0];
    currentCountEl.textContent = String(splittedCount);

    newClone.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    newClone.style.zIndex = String(150);
    newClone.style.outline = 'none';
    newClone.style.backgroundColor = 'transparent';
    newClone.id = 'curr-dragged-item';

    if(typeof contextItem.mainCell === 'number') {
      // board square width
      newClone.style.width = boardSquareSize * contextItem.width * 1.25 + 'px';
      newClone.style.height = boardSquareSize * contextItem.height * 1.25 + 'px';
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
    //endregion

    newClone.onmouseup = () => {
      const goingToStackSaved = goingToStackRef.current;
      // if can't move all part (stack) - save draggedItem witl less count

      // ----------------------------- If can't stack all part of the item ---------------------------------
      if (canDropRef.current) {
        if (goingToStackRef.current) {
          // @ts-ignore
          if (goingToStackRef.current.draggedItemNewCurrentCount > 0) {

            //region ----------------------------- Visually change current count in the HTML -----------------------------
            const requiredItem: HTMLElement = document.getElementById(`curr-dragged-item`);
            const currentCountWrapper = requiredItem.childNodes[1];
            const currentCountEl = currentCountWrapper.childNodes[0];
            // @ts-ignore
            currentCountEl.textContent = String(goingToStackSaved.draggedItemNewCurrentCount);
            // @ts-ignore
            //endregion

            const contextItemWithChangedCount = {
              ...contextItem,
              //@ts-ignore
              currentCount: goingToStackSaved.draggedItemNewCurrentCount,
            };
            dispatch(stackItem(true));

            dispatch(draggedItemRelease());

            dispatch(addDraggedItem(contextItemWithChangedCount,  hoveredArea));

            return;
          }
        }
      }
      // -----------------------------------------------------------------------------------------------

      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;

      if (canDropRef.current) {
        //region --------------------------------- Going To Stack (full part of the item) ------------------------------------
        if (goingToStackRef.current) {
          //@ts-ignore
          if (goingToStackRef.current.stackableItem.mainCell !== contextItem.mainCell) {
            dispatch(stackItem(true));
          }
        }
        //endregion

        //region ------------------------------ Drop item ------------------------------
        else if (goingToDropRef.current) {
          // @ts-ignore
          if (hoveredArea === 1) {
            // if drop item from board
            //@ts-ignore
            dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            mpTriggerDropItem(draggedItemRef.current);
          } else if (hoveredArea === 2) {
            // drop item from equipped
            // @ts-ignore
            dispatch(externalBoardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            mpTriggerDropExternalItem(draggedItemRef.current);
          } else if (hoveredArea === 3) {
            // @ts-ignore
            dispatch(equippedChangeCurrentCount(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            mpTriggerDropItem(draggedItemRef.current);
          }
        }
        //endregion

        //region ------------------------------------- Add to equipped -------------------------------------
        else if (hoveredAreaOfScreenRef.current === 3) {
          if(contextItem.mainCell !== hoveredSquareRef.current) {
            // if add to equipped
            // ------------------------------------- Add from board (to eq) -----------------------------
            if(hoveredArea === 1) {
              //@ts-ignore
              dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            }
            // ------------------------------------- Add from external board (to eq) -----------------------------
            else if (hoveredArea === 2) {
              //@ts-ignore
              externalBoardChangeCurrentCountByItemId(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount);
              // ------------------------------------- Add from equipped (to eq) -----------------------------
            } else if (hoveredArea === 3) {
              // @ts-ignore
              equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount);
            }
            try {
              dispatch(setEquippedItem(hoveredSquareRef.current));
            } catch (e) {}
          }
        }
        //endregion

        // ------------------------------------- Add to board -------------------------------------
        else if (hoveredAreaOfScreenRef.current === 1) {
          // ------------------------------------------- Add from equipped (to board) ------------------------------
          if (hoveredArea === 3) {
            //@ts-ignore
            dispatch(equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount));
            try {
              dispatch(addItem());
            } catch (e) {}
          }
          // --------------------------------------------------------------------------------------
          // ------------------------------------------- Add from board (to board) ------------------------------
          else if (hoveredArea === 1) {
            // @ts-ignore
            // check all squares, not only mainCell

            // if any square of the source splitted item hovered
            let isPartOfItemHovered = false;

            // @ts-ignore
            allHoveredSquaresRef.current.forEach(hovSquare => {
              // @ts-ignore
              if(boardCellsRef.current[hovSquare[1]][hovSquare[0]] && boardCellsRef.current[hovSquare[1]][hovSquare[0]].id === contextItem.id) {
                isPartOfItemHovered = true;
              }
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
          // ------------------------------------------- Add from external board (to board) ------------------------------
          else if (hoveredArea === 2) {
            // @ts-ignore
            dispatch(externalBoardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            try {
              dispatch(addItem());
            } catch (e) {}
          }
          // --------------------------------------------------------------------------------------
        }
        // ------------------------------------- Add to external board -------------------------------------
        else if (hoveredAreaOfScreenRef.current === 2) {
          if (hoveredArea === 1) {
            // @ts-ignore
            dispatch(boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            try {
              dispatch(addExternalBoardItem());
            } catch (e) {}
          }
          // Add from external board to external board
          else if (hoveredArea === 2) {
            // if any square of the source splitted item hovered
            let isPartOfItemHovered = false;

            // @ts-ignore
            allHoveredSquaresRef.current.forEach(hovSquare => {
              // @ts-ignore
              if(externalBoardCellsRef.current[hovSquare[1]][hovSquare[0]] && externalBoardCellsRef.current[hovSquare[1]][hovSquare[0]].id === contextItem.id) {
                isPartOfItemHovered = true;
              }
            });

            if (!isPartOfItemHovered) {
              // check if this is not the current item square
              //@ts-ignore
              dispatch(externalBoardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
              try {
                dispatch(addExternalBoardItem());
              } catch (e) {}
            }
          }
          // Add from equipped to external board
          else if (hoveredArea === 3) {
            // @ts-ignore
            dispatch(equippedChangeCurrentCount(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
            try {
              dispatch(addExternalBoardItem());
            } catch (e) {}
          }
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
    top: reducedTopOffset ? topOffset - reducedTopOffset : topOffset - 100
  }

  if(!splitMenuOpen) {
    return null;
  }

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