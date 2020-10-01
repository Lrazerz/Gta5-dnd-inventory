import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EquippedItem from "../../components/items/EquippedItem";
import classes from '../../styles/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import {addItem, removeItem} from "../../redux/actions/board";
import {removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";
import {ItemTypes} from "../../constants/dnd/types";

const SquareEquippedItem = ({item}: { item: any }) => {
  // const [resultDataUri, setResultDataUri] = useState(null);
  const {canDrop, hoveredSquare} = useSelector(state => {return state.draggedItem;});
  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  // refs to pass to event handler
  const canDropRef = useRef();
  const hoveredSquareRef = useRef();
  canDropRef.current = canDrop;
  hoveredSquareRef.current = hoveredSquare;


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
        setImageHeight(imageContainerHeight * item.height * 1);
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

  const imageOnMouseDown = (event) => {
    dispatch(addDraggedItem([0, 0], item));
    event.persist();

    const savedTarget = event.currentTarget;
    savedTarget.style.zIndex = 0;

    const newClone = event.currentTarget.cloneNode(true);
    // event.target.style.width = '100%';
    if(item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
      // careful
      newClone.children[0].children[0].style.width = '100%'
    }

    newClone.style.width = imageWidth + 'px';
    newClone.style.height = imageHeight + 'px';
    newClone.addEventListener('dragstart', (e) => {e.stopPropagation();e.preventDefault();return false});

    event.target.style.pointerEvents = 'none';

    newClone.style.position = 'absolute';
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

    newClone.onmouseup = function() {
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;
      savedTarget.style.zIndex = 100;

      if(canDropRef.current) {
        dispatch(removeEquippedItem(item.mainCell));

        if(typeof hoveredSquareRef.current === 'number') {
          // if add to equipped
          try {
            dispatch(setEquippedItem(hoveredSquareRef.current));
          } catch (e) {}
        } else {
          // if add to board
          if(item.category === ItemTypes.WEAPON_RIFLE || item.category === ItemTypes.WEAPON_PISTOL
          || item.category === ItemTypes.WEAPON_LAUNCHER) {
            // if item is weapon - remove prev item from board and set isWeaponEquipped to false\
            console.log('it maincellonboard', item.mainCellOnBoard);
            dispatch(removeItem(item.mainCellOnBoard, item.width, item.height));
          }
          try {
            dispatch(addItem());
          } catch (e) {}
        }
      } else {
        event.target.style.pointerEvents = 'inherit';
      }
      dispatch(draggedItemRelease());
    };

  };

  let imageElement = (
    <>
      <img src={item.imageUrl} className={classes.Image} onMouseDown={imageOnMouseDown}
           onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}/>
      {item.currentCount > 1 &&
      (<div className={classes.CurrentCount}>
        <SecondaryText>
          {item.currentCount}
        </SecondaryText>
      </div>)}
    </>
    );

  if (item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
    const imageStyles = {
      top: '1%',
      right: '1%',
      height: '98%',
      width: '60%'
    }

    imageElement = (
      <div style={{width: '100%', height: '100%'}} onMouseDown={imageOnMouseDown}>
        <div className={classes.ClosingSquareWrapper}>
          <img src={item.imageUrl} className={classes.Image} style={imageStyles}
               onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}/>
          {item.currentCount > 1 &&
          (<div className={classes.CurrentCount} style={{top: '1%', right: '1%'}}>
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
}

export default SquareEquippedItem;