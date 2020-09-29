import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EquippedItem from "../../components/items/EquippedItem";
import classes from '../../styles/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import {addItem, removeItem} from "../../redux/actions/board";
import {removeEquippedItem, setEquippedItem} from "../../redux/actions/equippedItems";

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
        // setImageWidth(imageContainerWidth * item.width * 0.24);
        setImageWidth(imageContainerWidth * item.width * 0.44);
        // @ts-ignore
        setImageHeight(imageContainerHeight * item.height * 1);
      } else {
        // @ts-ignore
        setImageWidth(imageContainerWidth * item.width * 1.4);
        // @ts-ignore
        setImageHeight(imageContainerHeight * item.height * 1.4);
      }

      // function imageToDataUri(img, width, height) {
      //
      //   // create an off-screen canvas
      //   let canvas = document.createElement('canvas'),
      //     ctx = canvas.getContext('2d');
      //
      //   // set its dimension to target size
      //   canvas.width = width;
      //   canvas.height = height;
      //
      //   // draw source image into the off-screen canvas:
      //   ctx.drawImage(img, 0, 0, width, height);
      //
      //   // encode image to data-uri with base64 version of compressed image
      //   return canvas.toDataURL();
      // }

      // const resizeImage = () => {
      //   setResultDataUri(imageToDataUri(newImage, imageWidth, imageHeight));
      // }
      // const newImage = new Image();
      // newImage.onload = resizeImage;
      // newImage.src = item.imageUrl;
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();
  // const [{}, drag, preview] = useDrag({
  //   item: {type: item.category, isInventory: true},
  //   begin() {
  //     dispatch(addDraggedItem([0, 0], item, true));
  //   },
  //   end() {
  //     dispatch(draggedItemRelease());
  //   },
  //   collect: () => {
  //     return ({});
  //   }
  // });

  const imageOnMouseDown = (event) => {
    dispatch(addDraggedItem([0, 0], item));
    event.persist();
    const newClone = event.currentTarget.cloneNode(true);
    // event.target.style.width = '100%';
    if(item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
      newClone.children[0].children[0].style.width = '100%'
    }

    newClone.style.width = imageWidth + 'px';
    newClone.style.height = imageHeight + 'px';
    newClone.addEventListener('dragstart', (e) => {e.stopPropagation();e.preventDefault();return false});
    // event.currentTarget.style.opacity=0.2;
    event.currentTarget.style.pointerEvents = 'none';
    event.target.style.pointerEvents = 'none';
    // (2) подготовить к перемещению:
    // разместить поверх остального содержимого и в абсолютных координатах
    newClone.style.position = 'absolute';
    newClone.style.zIndex = 100;
    // переместим в body, чтобы мяч был точно не внутри position:relative


    // document.body.append(event.target);
    document.body.append(newClone);
    // и установим абсолютно спозиционированный мяч под курсор

    moveAt(event.pageX, event.pageY);

    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
      newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
      newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    // удалить более ненужные обработчики событий
    newClone.onmouseup = function() {
      console.log('onmouseup');

      if(canDropRef.current) {
        dispatch(removeEquippedItem(item.mainCell));

        // checks
        if(typeof hoveredSquareRef.current === 'number') {
          // add to equipped
          dispatch(setEquippedItem(hoveredSquareRef.current));
        } else {
           // add to board
          dispatch(addItem());
        }
        // debugger;
      } else {
        if(event.target) event.target.style.pointerEvents = 'auto';
        if(event.currentTarget) event.currentTarget.style.pointerEvents = 'auto';
      }
      dispatch(draggedItemRelease());
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;
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