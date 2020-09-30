import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import CommonItem from "../../components/items/CommonItem/CommonItem";
import classes from '../../styles/board/SquareCommonItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {addItem, removeItem} from "../../redux/actions/board";
import {setEquippedItem} from "../../redux/actions/equippedItems";

const SquareCommonItem = ({coords: [x, y], item, draggedItem}) => {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  const {canDrop, hoveredSquare} = useSelector(state => {return state.draggedItem;});

  // refs to pass to event handler
  const canDropRef = useRef();
  const hoveredSquareRef = useRef();
  canDropRef.current = canDrop;
  hoveredSquareRef.current = hoveredSquare;

  const dispatch = useDispatch();
  // Allow drag
  // const [{}, drag, preview] = useDrag({
  //   item: {type: item.category, isInventory: false},
  //   begin() {
  //     dispatch(addDraggedItem([x, y], item));
  //   },
  //   end() {
  //     dispatch(draggedItemRelease());
  //   },
  //   collect: (monitor) => {
  //     return ({});
  //   }
  // });

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

    // newClone.onmouseup = () => {
    //   document.removeEventListener('mousemove', onMouseMove);
    // }

    newClone.onmouseup = function() {
      console.log('newClone mouse up');
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;
      savedTarget.style.zIndex = 100;

      // debugger;
      if(canDropRef.current) {
        dispatch(removeItem(item.mainCell, item.width, item.height));

        // checks
        if(typeof hoveredSquareRef.current === 'number') {
          // add to equipped
          try {
            dispatch(setEquippedItem(hoveredSquareRef.current));
          } catch (e) {}
        } else {
          // add to board
          try {
            dispatch(addItem());
          } catch(e) {}
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
      <>
          <div className={classes.ImageContainer} style={imageElementStyles}
               onMouseDown={imageOnMouseDown}
               onMouseOver={(e) => {console.log('mouse over imageCOnt')}}
               onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}>
          {/*backgroundImage: `url(${item.imageUrl})`, backgroundSize: `100% 100%`}}*/}
          {/*>*/}
            <img src={item.imageUrl}
                 className={classes.Image}/>
            {currentCountText}
          </div>
      </>
    );
  }

  // useEffect(() => {
  //   function imageToDataUri(img, width, height) {
  //
  //     // create an off-screen canvas
  //     let canvas = document.createElement('canvas'),
  {/*      ctx = canvas.getContext('2d');*/}

  //     // set its dimension to target size
  //     canvas.width = width;
  //     canvas.height = height;
  //
  //     // draw source image into the off-screen canvas:
  //     ctx.drawImage(img, 0, 0, width, height);
  //
  //     // encode image to data-uri with base64 version of compressed image
  //     return canvas.toDataURL();
  //   }
  //
  //   const resizeImage = () => {
  //     setResultDataUri(imageToDataUri(newImage, imageWidth, imageHeight));
  //   }
  //   const newImage = new Image();
  //   newImage.onload = resizeImage;
  //   newImage.src = item.imageUrl;
  //
  // }, [item, imageWidth, imageHeight]);

  return (
    <CommonItem imageContainerForwardedRef={imageContainerRef} mainCell={x === item.mainCell[0] && y === item.mainCell[1]}>
      {imageElement}
    </CommonItem>
  )
}


export default SquareCommonItem;