import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDraggedItem, dragEndHandler} from "../../redux/actions/draggedItem";
import CommonItem from "../../components/items/CommonItem/CommonItem";
import classes from '../../styles/board/SquareCommonItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {openContextMenu} from "../../redux/actions/contextMenu";
import Item from "../../models/Item";
import {addHoveredItem} from "../../redux/actions/hoveredItem";

interface Props {
  coords: [number, number];
  item: Item;
}

const SquareCommonItem: React.FC<Props> = React.memo(function SquareCommonItem({coords: [x, y], item}) {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  const {
    board: {boardSquareSize},
    draggedItem: {canDrop, hoveredSquare, item: draggedItem, xDown, yDown, goingToDrop, goingToStack},
    hoveredItem: {item: hoveredItem}
  } = useSelector(state => state);

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

  useEffect(() => {
    // ***1.25 coz image's width === 80% of the container
    if(boardSquareSize) {
      // @ts-ignore
      setImageWidth(item.width * boardSquareSize);
      // @ts-ignore
      setImageHeight(item.height * boardSquareSize);
    }
  }, [boardSquareSize]);

  let imageElement = null;

  const handleContextMenuOpen = (e) => {
    // last-remove
    // e.stopPropagation();
    e.persist();
    const rect = e.target.getBoundingClientRect();
    dispatch(openContextMenu(item, rect));
  };

  const handleMouseDown = (event) => {
    if (event.button !== 0) return;
    event.stopPropagation();
    dispatch(addDraggedItem({...item}, [x,y]));
    event.persist();

    // last-remove
    // save target
    // const savedTarget = event.currentTarget;
    // savedTarget.style.zIndex = 0;

    const newClone = event.currentTarget.cloneNode(true);

    newClone.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    // last-remove
    // savedTarget.style.pointerEvents = 'none';

    newClone.style.outline = 'none';
    newClone.style.backgroundColor = 'transparent';
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

      dispatch(dragEndHandler());
    };
  };

  const handleMouseOver = () => {
    if(!draggedItem && (!hoveredItem || hoveredItem.mainCell !== item.mainCell)) {
      dispatch(addHoveredItem(item));
    }
  }

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

    // if item is hovered when we have no dragged item
    const isItemHovered = hoveredItem && hoveredItem.mainCell === item.mainCell;

    const imageContainerStyles: CSSProperties = {
      width: imageWidth,
      height: imageHeight,
      //@ts-ignore
      top: imageHeight && imageWidth && item.isRotated ? -(imageHeight/2 - imageWidth/2) : 0,
      //@ts-ignore
      left: imageHeight && imageWidth && item.isRotated ? -(imageWidth/2 - imageHeight/2) : 0,
      pointerEvents: draggedItem ? 'none' : 'inherit',
      zIndex: draggedItem ? 0 : 100,
      transform: item.isRotated ? 'rotate3d(0,0,1,90deg)' : 'none',
      backgroundColor: isItemHovered ? 'rgba(151, 159, 161, 0.5)' : 'transparent',
    }

    imageElement = (
      <div className={classes.ImageContainer} style={imageContainerStyles} id={`square-common-item-${x}-${y}`}
           onMouseDown={handleMouseDown}
           onContextMenu={handleContextMenuOpen}
           onMouseOver={handleMouseOver}>
        <img src={item.imageUrl} style={item.isWeaponEquipped ? {opacity: '0.5'} : null}
             className={classes.Image}/>
        {currentCountText}
      </div>
    );
  }

  return (
    <CommonItem>
      {imageElement}
    </CommonItem>
  )
});

export default SquareCommonItem;