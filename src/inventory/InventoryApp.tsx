import React, {CSSProperties, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSquareSize} from "../redux/actions/inventory/board";
import {rotateItem, rotateItemOnBoard, setGoingToDrop} from "../redux/actions/inventory/draggedItem";
import {removeHoveredItem} from "../redux/actions/inventory/hoveredItem";
import {closeContextMenu} from "../redux/actions/inventory/contextMenu";
import InventoryAppStateless from "./InventoryAppStateless";

const InventoryApp =  React.memo(function InventoryApp() {

  //region ------------------------------ Get state from redux, set references ------------------------------
  const dispatch = useDispatch();

  const boardSquareSize = useSelector(state => state.inventory.board.boardSquareSize);
  const contextMenu = useSelector(state => state.inventory.contextMenu);
  const draggedItemInfo = useSelector(state => state.inventory.draggedItem);
  const hoveredItemInfo = useSelector(state => state.inventory.hoveredItem);

  const {goingToDrop, item: draggedItem} = draggedItemInfo;
  const {item: hoveredItem, hoveredArea: hoveredItemArea} = hoveredItemInfo;

  const goingToDropRef = useRef();
  const draggedItemRef = useRef();
  const contextMenuRef = useRef();
  goingToDropRef.current = goingToDrop;
  draggedItemRef.current = draggedItem;
  contextMenuRef.current = contextMenu;
  //endregion

  if(!boardSquareSize) {
    const bodyWidth = document.body.getBoundingClientRect().width;
    dispatch(setSquareSize(bodyWidth * 0.04125));
  }

  //region ------------------------------ Event handlers ------------------------------
  if(!document.oncontextmenu) {
    document.oncontextmenu = e => {
      e.preventDefault();
    }
  }

  const spaceDownHandler = (e) => {
    e.preventDefault();
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault();
      if (draggedItem && draggedItem.width > 1 && draggedItem.height > 1) {
        dispatch(rotateItem());
      } else if (hoveredItem && hoveredItemArea !== 3 &&
        hoveredItem.width > 1 && hoveredItem.height > 1) {
        dispatch(rotateItemOnBoard(hoveredItem, hoveredItemArea));
      }
    }
  }

  document.onkeydown = spaceDownHandler;

  if(!window.onclick) {
    window.onclick = (e) => {
      e.preventDefault();
      // @ts-ignore
      if (contextMenuRef.current.contextItem) {
        dispatch(closeContextMenu());
      }
    }
  }

  const removeCurrentHoveredItem = () => {
    if (hoveredItem) {
      dispatch(removeHoveredItem());
    }
  }

  // act as backdrop
  const tooltipMouseOverHandler = e => {
    if (draggedItemRef.current && !goingToDropRef.current) {
      dispatch(setGoingToDrop(true));
      e.stopPropagation();
    }
  }
  //endregion

  //Allow ToolTip to be BackDrop
  const tooltipStyles: CSSProperties = {
    pointerEvents: goingToDrop ? 'none' : 'inherit',
    zIndex: goingToDrop ? 'auto' : 200,
  }

  return <InventoryAppStateless contextMenu={contextMenu} tooltipStyles={tooltipStyles}
                                onTooltipMouseOver={tooltipMouseOverHandler} onContainersMouseOver={removeCurrentHoveredItem} />
});

export default InventoryApp;
