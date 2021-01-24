import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDraggedItem, dragEndHandler} from "../../../../redux/actions/inventory/draggedItem";
import CommonItem from "../CommonItem";
import classes from '../../../../styles/inventory/board/SquareCommonItem.module.scss';
import SecondaryText from "../../layout/SecondaryText";
import {openContextMenu} from "../../../../redux/actions/inventory/contextMenu";
import ItemModel from "../../../models/ItemModel";
import {addHoveredItem} from "../../../../redux/actions/inventory/hoveredItem";

interface Props {
  coords: [number, number];
  item: ItemModel;
}

const SquareCommonItem: React.FC<Props> = React.memo(function SquareCommonItem({coords: [x, y], item}) {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  const boardSquareSize = useSelector(state => state.inventory.board.boardSquareSize);

  const canDrop = useSelector(state => state.inventory.draggedItem.canDrop);
  const hoveredSquare = useSelector(state => state.inventory.draggedItem.hoveredSquare);
  const draggedItem = useSelector(state => state.inventory.draggedItem.item);
  const xDown = useSelector(state => state.inventory.draggedItem.xDown);
  const yDown = useSelector(state => state.inventory.draggedItem.yDown);
  const goingToDrop = useSelector(state => state.inventory.draggedItem.goingToDrop);
  const goingToStack = useSelector(state => state.inventory.draggedItem.goingToStack);

  const hoveredItem = useSelector(state => state.inventory.hoveredItem.item);
  const hoveredItemArea = useSelector(state => state.inventory.hoveredItem.hoveredArea);

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

  //region -------------------- Click, hover handlers --------------------

  const handleContextMenuOpen = (e) => {
    const rect = e.target.getBoundingClientRect();
    dispatch(openContextMenu(item, rect, 1));
  };

  const handleMouseDown = (event) => {
    if (event.button !== 0) return;
    event.stopPropagation();
    dispatch(addDraggedItem({...item}, 1));

    const newClone = event.currentTarget.cloneNode(true);

    // last-add
    newClone.style.maxWidth = newClone.style.width;
    newClone.style.minWidth = newClone.style.width;
    newClone.style.maxHeight = newClone.style.height;
    newClone.style.minHeight = newClone.style.height;

    newClone.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      return false;
    });

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

  const handleMouseOver = (e) => {
    e.stopPropagation();
    if(!draggedItem && (!hoveredItem || hoveredItemArea === 1 || hoveredItem.mainCell !== item.mainCell)) {
      dispatch(addHoveredItem(item, 1));
    }
  }
  //endregion

  let imageElement = null;

  if (x === item.mainCell[0] && y === item.mainCell[1]) {
    let currentCountText = null;

    if (item.currentCount > 1) {
      currentCountText =
        (<div className={classes.CurrentCountText}>
          <SecondaryText styles={{fontSize: '0.9rem'}}>
            {item.currentCount}
          </SecondaryText>
        </div>);
    }


    // if item is hovered when we have no dragged item
    const isItemHovered = hoveredItem && hoveredItemArea === 1 && hoveredItem.mainCell === item.mainCell;

    const imageContainerStyles: CSSProperties = {
      width: imageWidth,
      height: imageHeight,
      //@ts-ignore
      top: imageHeight && imageWidth && item.isRotated ? -(imageHeight/2 - imageWidth/2) : 0,
      //@ts-ignore
      left: imageHeight && imageWidth && item.isRotated ? -(imageWidth/2 - imageHeight/2) : 0,
      pointerEvents: draggedItem ? 'none' : 'inherit',
      zIndex: draggedItem ? 'auto' : 100,
      transform: item.isRotated ? 'rotate3d(0,0,1,90deg)' : 'none',
      backgroundColor: isItemHovered ? 'rgba(151, 159, 161, 0.5)' : 'transparent',
    }

    imageElement = (
      <div className={classes.ImageContainer} style={imageContainerStyles} id={`square-common-item-${x}-${y}`}
           onMouseDown={handleMouseDown}
           onContextMenu={handleContextMenuOpen}
           onMouseOver={handleMouseOver}>
        <img src={item.imageUrl} style={item.isWeaponEquipped ? {opacity: '0.5'} : null}
             className={classes.Image} width='96%' height='96%'/>
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