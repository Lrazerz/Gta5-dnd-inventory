import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import CommonItem from "../../components/items/CommonItem/CommonItem";
import classes from '../../styles/board/SquareCommonItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {addItem, changeEquippedState, removeItem} from "../../redux/actions/board";
import {setEquippedItem} from "../../redux/actions/equippedItems";
import {ItemTypes} from "../../constants/dnd/types";

const SquareCommonItem = ({coords: [x, y], item}) => {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  const {canDrop, hoveredSquare, item: draggedItem, xDown, yDown} = useSelector(state =>  state.draggedItem);

  // refs to pass to event handler
  const canDropRef = useRef();
  const hoveredSquareRef = useRef();
  const draggedItemRef = useRef();
  const xDownRef = useRef();
  const yDownRef = useRef();
  canDropRef.current = canDrop;
  hoveredSquareRef.current = hoveredSquare;
  draggedItemRef.current = draggedItem;
  xDownRef.current = xDown;
  yDownRef.current = yDown;

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

      // @ts-ignore
      setImageWidth(imageContainerWidth * item.width - 2);
      // @ts-ignore
      setImageHeight(imageContainerHeight * item.height - 2);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let imageElement = null;

  const imageOnMouseDown = (event) => {
    dispatch(addDraggedItem([x, y], item));
    event.persist();

    // save target
    const savedTarget = event.currentTarget;
    savedTarget.style.zIndex = 0;

    const newClone = event.currentTarget.cloneNode(true);
    newClone.addEventListener('dragstart', (e) => {e.stopPropagation();e.preventDefault();return false});
    // event.currentTarget.style.opacity=0.2;

    savedTarget.style.pointerEvents = 'none';
    // event.target.style.pointerEvents = 'none';

    // newClone.style.position = 'absolute';
    newClone.style.zIndex = 150;

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

    // newClone.onmouseup = () => {
    //   document.removeEventListener('mousemove', onMouseMove);
    // }

    newClone.onmouseup = function() {
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;
      savedTarget.style.zIndex = 100
      if(canDropRef.current) {
        // if can drop
        if(typeof hoveredSquareRef.current === 'number') {
          // if add to equipped
          if(item.category === ItemTypes.WEAPON_RIFLE || item.category === ItemTypes.WEAPON_PISTOL
            || item.category === ItemTypes.WEAPON_LAUNCHER) {
            // if weapon make transparent color
            dispatch(changeEquippedState(item, true));
          } else {
            dispatch(removeItem(item.mainCell, item.width, item.height));
          }
          try {
            dispatch(setEquippedItem(hoveredSquareRef.current));
          } catch (e) {}
        } else {
          // add to board (from board too)
          // @ts-ignore
          if(item.mainCell[0] !== hoveredSquareRef.current[0] - xDownRef.current || item.mainCell[1] !== hoveredSquareRef.current[1] - yDownRef.current) {
            // check if this is not the current item square
            dispatch(removeItem(item.mainCell, item.width, item.height));
            try {
              dispatch(addItem());
            } catch(e) {}
          }
        }
        // debugger;
      } else {
        event.target.style.pointerEvents = 'inherit';
      }
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
      pointerEvents: draggedItem ? 'none' : 'inherit',
    }

    imageElement = (
        <div className={classes.ImageContainer} style={imageElementStyles}
             onMouseDown={imageOnMouseDown}
             onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}>
        {/*backgroundImage: `url(${item.imageUrl})`, backgroundSize: `100% 100%`}}*/}
        {/*>*/}
          <img src={item.imageUrl} style={item.isWeaponEquipped ? {opacity: '0.5'} : null}
               className={classes.Image}/>
          {currentCountText}
        </div>
    );
  }

  return (
    <CommonItem imageContainerForwardedRef={imageContainerRef} mainCell={x === item.mainCell[0] && y === item.mainCell[1]}>
      {imageElement}
    </CommonItem>
  )
}


export default SquareCommonItem;