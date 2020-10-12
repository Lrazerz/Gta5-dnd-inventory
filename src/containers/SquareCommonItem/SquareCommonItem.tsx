import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDraggedItem, draggedItemRelease, stackItem} from "../../redux/actions/draggedItem";
import CommonItem from "../../components/items/CommonItem/CommonItem";
import classes from '../../styles/board/SquareCommonItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {addItem, changeEquippedState, removeEquippedWeaponFromBoard, removeItem} from "../../redux/actions/board";
import {removeEquippedItem, removeEquippedWeaponFromEquipped, setEquippedItem} from "../../redux/actions/equippedItems";
import {ItemTypes} from "../../constants/dnd/types";
import {mpTriggerDropItem, openContextMenu} from "../../redux/actions/contextMenu";

const SquareCommonItem = ({coords: [x, y], item}) => {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();
  const [leftOffset, setLeftOffset] = useState();
  const [topOffset, setTopOffset] = useState();

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

  const dispatch = useDispatch();

  const imageContainerRef = useRef();
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const current: HTMLElement | null = imageContainerRef.current;
      const CSSStyleDeclaration = window.getComputedStyle(current);

      let imageContainerWidth: string | number = CSSStyleDeclaration.getPropertyValue('width');
      let imageContainerHeight: string | number = CSSStyleDeclaration.getPropertyValue('height');

      // get number from string (string example: 123.45px)
      const regex = /^((\d|\.)+)/;
      imageContainerWidth = parseFloat(imageContainerWidth.match(regex)[0]);
      imageContainerHeight = parseFloat(imageContainerHeight.match(regex)[0]);

      // // old image sizes
      // // @ts-ignore
      // setImageWidth(imageContainerWidth * item.width - 2);
      // // @ts-ignore
      // setImageHeight(imageContainerHeight * item.height - 2);

      // new sizes
      // @ts-ignore
      setImageWidth(imageContainerWidth * (item.width - 0.2));
      // @ts-ignore
      setImageHeight(imageContainerHeight * (item.height - 0.2));
      // @ts-ignore
      setLeftOffset(imageContainerWidth * 0.1);
      // @ts-ignore
      setTopOffset(imageContainerHeight * 0.1);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let imageElement = null;

  const imageOnContextMenuOpen = (e) => {
    // last-remove
    // e.stopPropagation();
    e.persist();
    const rect = e.target.getBoundingClientRect();
    const averX = Math.floor(rect.left) + e.target.offsetWidth / 2;
    const requiredTop = Math.floor(rect.top + e.target.offsetHeight * 0.935);
    dispatch(openContextMenu(item, averX, requiredTop));
  };

  const imageOnMouseDown = (event) => {
    if (event.button !== 0) return;
    event.stopPropagation();
    dispatch(addDraggedItem([x, y], item));
    event.persist();

    // save target
    const savedTarget = event.currentTarget;
    // last-remove
    // savedTarget.style.zIndex = 0;

    const newClone = event.currentTarget.cloneNode(true);
    newClone.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      return false
    });

    // last-remove
    // savedTarget.style.pointerEvents = 'none';

    newClone.style.zIndex = 150;
    newClone.id = 'curr-dragged-item';

    document.body.append(newClone);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
      newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
    }

    const onMouseMove = (event) => {
      event.stopPropagation();
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    newClone.onmouseover = e => {
      e.stopPropagation();
    }

    newClone.onmouseup = () => {
      event.stopPropagation();
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;
      // last-remove
      // savedTarget.style.zIndex = 100;
      if (canDropRef.current) {
        if(goingToStackRef.current) {
          dispatch(stackItem());
        }
        else if (goingToDropRef.current) {
          // already have no hovered squares
          // @ts-ignore
          if (typeof draggedItemRef.current.mainCell === 'object') {
            // if drop item from board
            // @ts-ignore
            if (draggedItemRef.current.category === ItemTypes.WEAPON_RIFLE || draggedItemRef.current.category === ItemTypes.WEAPON_PISTOL
              // @ts-ignore
              || draggedItemRef.current.category === ItemTypes.WEAPON_LAUNCHER) {
              // @ts-ignore
              dispatch(removeEquippedWeaponFromEquipped(draggedItemRef.current.id));
            }
            // @ts-ignore
            dispatch(removeItem(draggedItemRef.current.mainCell, draggedItemRef.current.width, draggedItemRef.current.height));
          } else {
            // drop item from equipped
            // @ts-ignore
            if (draggedItemRef.current.category === ItemTypes.WEAPON_RIFLE || draggedItemRef.current.category === ItemTypes.WEAPON_PISTOL
              // @ts-ignore
              || draggedItemRef.current.category === ItemTypes.WEAPON_LAUNCHER) {
              // @ts-ignore
              dispatch(removeEquippedWeaponFromBoard(draggedItemRef.current.id));
            }
            // @ts-ignore
            dispatch(removeEquippedItem(draggedItemRef.current.mainCell));
          }
          mpTriggerDropItem(draggedItemRef.current);
        }
        else if (typeof hoveredSquareRef.current === 'number') {
          // if add to equipped
          if (item.category === ItemTypes.WEAPON_RIFLE || item.category === ItemTypes.WEAPON_PISTOL
            || item.category === ItemTypes.WEAPON_LAUNCHER) {
            // if weapon make transparent color
            dispatch(changeEquippedState(item, true));
          } else {
            dispatch(removeItem(item.mainCell, item.width, item.height));
          }
          try {
            dispatch(setEquippedItem(hoveredSquareRef.current));
          } catch (e) {
          }
        }
        else {
          // add to board (from board too)
          // @ts-ignore
          if (item.mainCell[0] !== hoveredSquareRef.current[0] - xDownRef.current || item.mainCell[1] !== hoveredSquareRef.current[1] - yDownRef.current) {
            // check if this is not the current item square
            dispatch(removeItem(item.mainCell, item.width, item.height));
            try {
              dispatch(addItem());
            } catch (e) {
            }
          }
        }
      }
      // last-remove
      // event.target.style.pointerEvents = 'inherit';
      dispatch(draggedItemRelease());
    };
  };

  if (x === item.mainCell[0] && y === item.mainCell[1]) {

    let currentCountText = null;

    if (item.currentCount > 1) {
      currentCountText =
        (<div className={classes.CurrentCountText}>
          <SecondaryText>
            {item.currentCount}
          </SecondaryText>
        </div>);
    }

    const imageElementStyles: CSSProperties = {
      width: imageWidth,
      height: imageHeight,
      top: topOffset,
      left: leftOffset,
      pointerEvents: draggedItem ? 'none' : 'inherit',
      zIndex: draggedItem ? 0 : 100,
    }

    imageElement = (
      <div className={classes.ImageContainer} style={imageElementStyles}
           onMouseDown={imageOnMouseDown}
           onContextMenu={imageOnContextMenuOpen}>
        <img src={item.imageUrl} style={item.isWeaponEquipped ? {opacity: '0.5'} : null}
             className={classes.Image}/>
        {currentCountText}
      </div>
    );
  }

  return (
    <CommonItem imageContainerForwardedRef={imageContainerRef}>
      {imageElement}
    </CommonItem>
  )
}


export default SquareCommonItem;