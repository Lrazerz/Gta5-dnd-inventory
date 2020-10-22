import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EquippedItem from "../../components/items/EquippedItem";
import classes from '../../styles/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {addDraggedItem, dragEndHandler, draggedItemRelease, stackItem} from "../../redux/actions/draggedItem";
import {addItem, removeItemFromBoard, removeItem} from "../../redux/actions/board";
import {removeEquippedItem, removeEquippedWeaponFromEquipped, setEquippedItem} from "../../redux/actions/equippedItems";
import {ItemTypes} from "../../constants/dnd/types";
import {mpTriggerDropItem, openContextMenu} from "../../redux/actions/contextMenu";
import Item from "../../models/Item";
import {addHoveredItem} from "../../redux/actions/hoveredItem";

interface Props {
  item: Item;
}

const SquareEquippedItem: React.FC<Props> = React.memo(function SquareEquippedItem ({item}) {

  const {
    draggedItem: {canDrop, hoveredSquare, item: draggedItem, goingToDrop, goingToStack},
    hoveredItem: {item: hoveredItem}
  } = useSelector(state => state);

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

  // set image dimensions to resize
  const imageContainerRef = useRef();
  useEffect(() => {
    // Handler to call on window resize
    // function to set preview image dimensions
    function handleResize() {
      const current: HTMLElement | null = imageContainerRef.current;
      const CSSStyleDeclaration = window.getComputedStyle(current);

      let imageContainerWidth: string | number = CSSStyleDeclaration.getPropertyValue('width');
      let imageContainerHeight: string | number = CSSStyleDeclaration.getPropertyValue('height');

      // get number from string (string example: 123.45px)
      const regex = /^((\d|\.)+)/;
      imageContainerWidth = parseFloat(imageContainerWidth.match(regex)[0]);
      imageContainerHeight = parseFloat(imageContainerHeight.match(regex)[0]);

      if(item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
        // @ts-ignore
        setImageWidth(imageContainerWidth * item.width * 0.44);
        // @ts-ignore
        setImageHeight(imageContainerHeight * item.height);
      } else {
        // @ts-ignore
        setImageWidth(imageContainerWidth * item.width * 1.4);
        // @ts-ignore
        setImageHeight(imageContainerHeight * item.height * 1.4);
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();

  const handleContextMenuOpen = (e) => {
    const rect = e.target.getBoundingClientRect();
    dispatch(openContextMenu(item, rect));
  };

  const handleMouseDown = (event) => {
    if(event.button !== 0) return;
    dispatch(addDraggedItem({...item}));
    event.persist();

    // last-remove
    // const savedTarget = event.currentTarget;
    // event.target.style.zIndex = 0;

    const newClone = event.currentTarget.cloneNode(true);
    // event.target.style.width = '100%';
    if(item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
      // careful
      newClone.children[0].children[0].style.width = '100%'
    }

    newClone.style.width = imageWidth + 'px';
    newClone.style.height = imageHeight + 'px';
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
      dispatch(dragEndHandler(true));
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

    if(!draggedItem && (!hoveredItem || hoveredItem.mainCell !== item.mainCell)) {
      dispatch(addHoveredItem(item));
    }
  }

  const isItemHovered = hoveredItem && hoveredItem.mainCell === item.mainCell;

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
           onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}
           onMouseUp={e => console.log('mouse up image')}/>
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
            <SecondaryText>
              {item.currentCount}
            </SecondaryText>
          </div>)}
        </div>
      </div>
      );
  }

  // result data uri - image after resizing in canvas
  return (
    <EquippedItem imageContainerForwardedRef={imageContainerRef}>
      {item.imageUrl && imageElement}
    </EquippedItem>
  );
});

export default SquareEquippedItem;