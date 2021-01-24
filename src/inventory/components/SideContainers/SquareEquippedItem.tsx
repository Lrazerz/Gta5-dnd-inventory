import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EquippedItem from "./EquippedItem";
import classes from '../../../styles/inventory/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../layout/SecondaryText";
import {addDraggedItem, dragEndHandler, draggedItemRelease} from "../../../redux/actions/inventory/draggedItem";
import {openContextMenu} from "../../../redux/actions/inventory/contextMenu";
import ItemModel from "../../models/ItemModel";
import {addHoveredItem} from "../../../redux/actions/inventory/hoveredItem";

interface Props {
  item: ItemModel;
}

const SquareEquippedItem: React.FC<Props> = React.memo(function SquareEquippedItem ({item}) {

  const dispatch = useDispatch();

  const boardSquareSize = useSelector(state => state.inventory.board.boardSquareSize);

  const canDrop = useSelector(state => state.inventory.draggedItem.canDrop);
  const hoveredSquare = useSelector(state => state.inventory.draggedItem.hoveredSquare);
  const draggedItem = useSelector(state => state.inventory.draggedItem.item);
  const goingToDrop = useSelector(state => state.inventory.draggedItem.goingToDrop);
  const goingToStack = useSelector(state => state.inventory.draggedItem.goingToStack);

  const hoveredItem = useSelector(state => state.inventory.hoveredItem.item);
  const hoveredItemArea = useSelector(state => state.inventory.hoveredItem.hoveredArea);


  const goingToDropRef = useRef();
  const draggedItemRef = useRef();
  draggedItemRef.current = draggedItem;
  goingToDropRef.current = goingToDrop;
  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  // refs to pass to event handler
  const canDropRef = useRef();
  const hoveredSquareRef = useRef();
  const goingToStackRef = useRef();
  canDropRef.current = canDrop;
  hoveredSquareRef.current = hoveredSquare;
  goingToStackRef.current = goingToStack;

  //region -------------------- Set image dimensions to resize --------------------
  useEffect(() => {
    // ***1.25 coz image's width === 80% of the container
    if(boardSquareSize) {
      // @ts-ignore
      setImageWidth(item.width * boardSquareSize * 1.25);
      // @ts-ignore
      setImageHeight(item.height * boardSquareSize * 1.25);
    }
  }, [boardSquareSize])
  //endregion

  //region -------------------- Click and hover handlers --------------------
  const handleContextMenuOpen = (e) => {
    const rect = e.target.getBoundingClientRect();
    dispatch(openContextMenu(item, rect, 3));
  };

  const handleMouseDown = (event) => {
    if(event.button !== 0) return;
    dispatch(addDraggedItem({...item}, 3));

    // last-remove
    // const savedTarget = event.currentTarget;
    // event.target.style.zIndex = 0;

    const newClone = event.currentTarget.cloneNode(true);
    // event.target.style.width = '100%';
    if(item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
      // careful
      newClone.childNodes[0].style.width = '80%';
      newClone.children[0].style.height = '80%';
      newClone.children[0].style.left = '10%';
      newClone.children[0].style.top = '10%';
      newClone.children[0].style.justifyContent = 'center';
      newClone.children[0].children[0].style.width = '100%'
      newClone.children[0].children[0].style.height = '100%'
    }

    // last-add
    newClone.style.maxWidth = imageWidth + 'px';
    newClone.style.minWidth = imageWidth + 'px';
    newClone.style.maxHeight = imageHeight + 'px';
    newClone.style.minHeight = imageHeight + 'px';

    newClone.addEventListener('dragstart', (e) => {e.stopPropagation();e.preventDefault();return false});

    // last-remove
    // event.target.style.pointerEvents = 'none';

    newClone.style.position = 'absolute';
    newClone.style.zIndex = 150;
    newClone.style.backgroundColor = 'transparent';
    newClone.style.background = 'transparent';
    newClone.id = 'curr-dragged-item';

    document.body.append(newClone);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
      newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    newClone.onmouseup = function() {
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;
      // last-remove
      // event.target.style.zIndex = 100;
      dispatch(dragEndHandler());
      // last-remove
      // event.target.style.pointerEvents = 'auto';
      dispatch(draggedItemRelease());
    }
  }

  const handleMouseOver = (e) => {
    // Stop propagation to prevent instant remove hoveredItem and don't stop to allow
    // hover when have draggedItem
    if(hoveredItem) {
      e.stopPropagation();
    }

    if(!draggedItem && (!hoveredItem ||hoveredItemArea !== 3 || hoveredItem.mainCell !== item.mainCell)) {
      dispatch(addHoveredItem(item, 3));
    }
  }
  //endregion

  const isItemHovered = hoveredItem && hoveredItemArea === 3 && hoveredItem.mainCell === item.mainCell;

  let additionalImageContainerStyles: CSSProperties = {
    backgroundColor: isItemHovered ? 'rgba(151, 159, 161, 0.5)' : 'transparent',
  }

  let imageElement = (
    <div className={classes.ImageContainer}
         style={additionalImageContainerStyles}
         id={`square-equipped-item-${item.mainCell}`}
         onMouseDown={handleMouseDown}
         onContextMenu={handleContextMenuOpen}
         onMouseOver={handleMouseOver}>
      <img src={item.imageUrl} className={classes.Image}
           onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}/>
      {item.currentCount > 1 &&
      (<div className={classes.CurrentCount}>
        <SecondaryText>
          {item.currentCount}
        </SecondaryText>
      </div>)}
    </div>
    );

  if (item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
    const imageStyles: CSSProperties = {
      top: '1%',
      right: '1%',
      height: '98%',
      width: '60%',
      pointerEvents: 'none',
    }

    const additionalImageContainerStyles = {
      background: isItemHovered ? 'linear-gradient(90deg, transparent, rgba(151, 159, 161, 0.5))' : 'transparent',
      clipPath: `polygon(0% 10.56792%, 77.45% 10.56792%, 81.0447% 0%, 100% 0%,
      100% 100%, 81.0447% 100%, 77.45% 89.43208%, 0% 89.43208%)`
    }

    imageElement = (
      <div id={`square-equipped-item-${item.mainCell}`}
           style={{width: '100%', height: '100%', ...additionalImageContainerStyles}}
           onMouseDown={handleMouseDown}
           onMouseOver={handleMouseOver}>
        <div className={classes.ClosingSquareWrapper} onContextMenu={handleContextMenuOpen}>
          <img src={item.imageUrl} className={classes.Image} style={imageStyles}
               onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}/>
          {item.currentCount > 1 &&
          (<div className={classes.CurrentCount}>
            <SecondaryText styles={{fontSize: '0.9rem'}}>
              {item.currentCount}
            </SecondaryText>
          </div>)}
        </div>
      </div>
      );
  }

  // result data uri - image after resizing in canvas
  return (
    <EquippedItem>
      {item.imageUrl && imageElement}
    </EquippedItem>
  );
});

export default SquareEquippedItem;