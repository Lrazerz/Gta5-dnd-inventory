import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../styles/UI/RangeComponent.module.scss';
import {closeContextMenu, mpTriggerDropItem} from "../../redux/actions/contextMenu";
import {addDraggedItem, draggedItemRelease, stackItem} from "../../redux/actions/draggedItem";
import {equippedChangeCurrentCount, removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";
import {addItem, boardChangeCurrentCount} from "../../redux/actions/board";

// todo change count remove splitMenuOpen
const RangeComponent = ({leftOffset, topOffset, contextItem, splitMenuOpen}) => {
  // lift up item to be at the top of the image
  const containerRef = useRef();

  // todo change count remove contextItem &&
  const [splittedCount, setSplittedCount] = useState(Math.floor(contextItem && contextItem.currentCount/2));
  const [reducedTopOffset, setReducedTopOffset] = useState();
  const dispatch = useDispatch();

  const {canDrop, hoveredSquare, item: draggedItem, xDown, yDown, goingToDrop, goingToStack} = useSelector(state => state.draggedItem);

  // refs to pass to event handler
  const canDropRef = useRef();
  const hoveredSquareRef = useRef();
  const draggedItemRef = useRef();
  const xDownRef = useRef();
  const yDownRef = useRef();
  const goingToDropRef = useRef();
  const goingToStackRef = useRef();
  canDropRef.current = canDrop;
  hoveredSquareRef.current = hoveredSquare;
  draggedItemRef.current = draggedItem;
  xDownRef.current = xDown;
  yDownRef.current = yDown;
  goingToDropRef.current = goingToDrop;
  goingToStackRef.current = goingToStack;


  useEffect(() => {
    if(containerRef.current) {
      // @ts-ignore
      const rect = containerRef.current.getBoundingClientRect();
      setReducedTopOffset(rect.height);
    }
  }, [containerRef.current]);

  // similar logic to squareCommonItem
  const successButtonMouseDownHandler = event => {
    event.persist();
    if (event.button !== 0) return;
    event.stopPropagation();
    const contextItemWithChangedCount = {...contextItem, currentCount: Number(splittedCount)};
    console.log('contextItemWithChangedCount', contextItemWithChangedCount);
    dispatch(addDraggedItem(contextItemWithChangedCount, contextItemWithChangedCount.mainCell));

    // last-remove
    // save target
    // const savedTarget = event.currentTarget;
    // savedTarget.style.zIndex = 0;

    // ---------------------Logic to add dragged item to the body------------------------

    let requiredItem: HTMLElement;

    console.log('requiredItem', requiredItem, contextItem);
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
    newClone.id = 'curr-dragged-item';

    if(typeof contextItem.mainCell === 'number') {
      // board square width
      const squareWidth = document.body.clientWidth * 0.0323;
      newClone.style.width = squareWidth + 'px';
      newClone.style.height = squareWidth + 'px';
      console.log('new width', newClone.style.width);
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

      // ----------------------------- utils ----------------------------
      const _getItemSquares = (mainCell, width, height) => {
        const allItemSquares = [];
        for (let y = mainCell[1]; y < mainCell[1] + height; y++) {
          for (let x = mainCell[0]; x < mainCell[0] + width; x++) {
            allItemSquares.push([x, y]);
          }
        }
        return allItemSquares;
      }
      // ----------------------------------------------------------------

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
            dispatch(addDraggedItem(contextItemWithChangedCount, contextItemWithChangedCount.mainCell));
            if(contextItem.isEquipped) {
              //@ts-ignore
              dispatch(equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - (splittedCount - goingToStackSaved.draggedItemNewCurrentCount)));
            } else {
              const splittedItemSquares = _getItemSquares(contextItem.mainCell, contextItem.width, contextItem.height);
              //@ts-ignore
              dispatch(boardChangeCurrentCount(splittedItemSquares, contextItem.currentCount - (splittedCount - goingToStackSaved.draggedItemNewCurrentCount)));
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
              dispatch(equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - splittedCount));
            } else {
              const splittedItemSquares = _getItemSquares(contextItem.mainCell, contextItem.width, contextItem.height);
              //@ts-ignore
              dispatch(boardChangeCurrentCount(splittedItemSquares, contextItem.currentCount - splittedCount));
            }
          }
        }
        // ------------------------------ Drop item ------------------------------
        else if (goingToDropRef.current) {
          // @ts-ignore
          if (typeof draggedItemRef.current.mainCell === 'object') {
            // if drop item from board
            // @ts-ignore
            const splittedItemSquares = _getItemSquares(contextItem.mainCell, contextItem.width, contextItem.height);
            //@ts-ignore
            dispatch(boardChangeCurrentCount(splittedItemSquares, contextItem.currentCount - draggedItemRef.current.currentCount));
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

              const splittedItemSquares = _getItemSquares(contextItem.mainCell, contextItem.width, contextItem.height);
              //@ts-ignore
              dispatch(boardChangeCurrentCount(splittedItemSquares, contextItem.currentCount - draggedItemRef.current.currentCount));
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
            if (contextItem.mainCell[0] !== hoveredSquareRef.current[0] - xDownRef.current || contextItem.mainCell[1] !== hoveredSquareRef.current[1] - yDownRef.current) {
              // check if this is not the current item square
              const splittedItemSquares = _getItemSquares(contextItem.mainCell, contextItem.width, contextItem.height);
              //@ts-ignore
              dispatch(boardChangeCurrentCount(splittedItemSquares, contextItem.currentCount - draggedItemRef.current.currentCount));
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

    // todo change count rewrite (find node to clone etc)
//     else {
//       // from equipped
//       dispatch(addDraggedItem(contextItem));
//
//       // last-remove
//       // const savedTarget = event.currentTarget;
//       // savedTarget.style.zIndex = 0;
//
//     const newClone = event.currentTarget.cloneNode(true);
//     event.target.style.width = '100%';
//
//       newClone.style.width = imageWidth + 'px';
//       newClone.style.height = imageHeight + 'px';
//       newClone.addEventListener('dragstart', (e) => {e.stopPropagation();e.preventDefault();return false});
//
//       // last-remove
//       // event.target.style.pointerEvents = 'none';
//
//       newClone.style.position = 'absolute';
//       newClone.style.zIndex = 150;
//       newClone.id = 'curr-dragged-item';
//
//       document.body.append(newClone);
//
//       moveAt(event.pageX, event.pageY);
//
//       function moveAt(pageX, pageY) {
//     //     newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
//     //     newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
//     //   }
//     //
//     //   function onMouseMove(event) {
//     //     moveAt(event.pageX, event.pageY);
//     //   }
//     //
//     //   document.addEventListener('mousemove', onMouseMove);
//     //
//     //   newClone.onmouseup = function() {
//     //     document.body.removeChild(newClone);
//     {/*    document.removeEventListener('mousemove', onMouseMove);*/}
//     //     newClone.onmouseup = null;
//     //     // last-remove
//     //     // savedTarget.style.zIndex = 100;
//     //
//     //     if(canDropRef.current) {
//     //       if(goingToStackRef.current) {
//     //         dispatch(stackItem());
//     //       }
//     //       else if(goingToDropRef.current) {
//     //         // already have no hovered squares
//     //         // @ts-ignore
//     //         if(typeof draggedItemRef.current.mainCell === 'object') {
//     //           // if drop item from board
//     //           // @ts-ignore
//     //           if(draggedItemRef.current.category === ItemTypes.WEAPON_RIFLE || draggedItemRef.current.category === ItemTypes.WEAPON_PISTOL
//     //             // @ts-ignore
//     //             || draggedItemRef.current.category === ItemTypes.WEAPON_LAUNCHER) {
//     //             // @ts-ignore
//     //             dispatch(removeEquippedWeaponFromEquipped(draggedItemRef.current.id));
//     //           }
//     //           // @ts-ignore
//     //           dispatch(removeItem(draggedItemRef.current.mainCell, draggedItemRef.current.width, draggedItemRef.current.height));
//     //         }
//     //         else {
//     //           // drop item from equipped
//     //           // @ts-ignore
//     //           if(draggedItemRef.current.category === ItemTypes.WEAPON_RIFLE || draggedItemRef.current.category === ItemTypes.WEAPON_PISTOL
//     //             // @ts-ignore
//     //             || draggedItemRef.current.category === ItemTypes.WEAPON_LAUNCHER) {
//     //             // @ts-ignore
//     //             dispatch(removeEquippedWeaponFromBoard(draggedItemRef.current.id));
//     //           }
//     //           // @ts-ignore
//     //           dispatch(removeEquippedItem(draggedItemRef.current.mainCell));
//     //         }
//     //         mpTriggerDropItem(draggedItemRef.current);
//     //       }
//     //       else if(typeof hoveredSquareRef.current === 'number') {
//     //         // if add to equipped, from equipped too
//     //         // @ts-ignore
//     //         if(item.mainCell !== hoveredSquareRef.current) {
//     //           // check if not the same item
//     //           dispatch(removeEquippedItem(item.mainCell));
//     //           try {
//     //             // try coz mp.trigger
//     //             dispatch(setEquippedItem(hoveredSquareRef.current));
//     //           } catch (e) {}
//     //         }
//     //       }
//     //       else {
//     //         dispatch(removeEquippedItem(item.mainCell));
//     //         // if add to board
//     //         if(item.category === ItemTypes.WEAPON_RIFLE || item.category === ItemTypes.WEAPON_PISTOL
//     //           || item.category === ItemTypes.WEAPON_LAUNCHER) {
//     //           // if item is weapon - remove prev item from board and set isWeaponEquipped to false
//     //           dispatch(removeEquippedWeaponFromBoard(item.id));
//     //         }
//     //         try {
//     //           dispatch(addItem());
//     //         } catch (e) {}
//     //       }
//     //     }
//     //     // last-remove
//     //     // event.target.style.pointerEvents = 'inherit';
//     //     dispatch(draggedItemRelease());
//     //   }
//     //
//
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
                 min={1} max={contextItem && contextItem.currentCount} step={1}/>
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
};

export default RangeComponent;