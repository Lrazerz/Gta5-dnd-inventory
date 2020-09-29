import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import CommonItem from "../../components/items/CommonItem/CommonItem";
import classes from '../../styles/board/SquareCommonItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import {addItem, removeItem} from "../../redux/actions/board";
import {setEquippedItem} from "../../redux/actions/equippedItems";

const SquareCommonItem = ({coords: [x, y], item}) => {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();
  // const [resultDataUri, setResultDataUri] = useState(null);

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
  const [{}, drag, preview] = [{}, null, () => {}]

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

    // fix mainCell position over draggedElement
    event.currentTarget.style.zIndex = 0;

    const newClone = event.currentTarget.cloneNode(true);
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

    newClone.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
    }

    newClone.onmouseup = function() {

      // debugger;
      if(canDropRef.current) {
        dispatch(removeItem(item.mainCell, item.width, item.height));

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
        event.target.style.pointerEvents = 'auto';
      }
      dispatch(draggedItemRelease());
      document.body.removeChild(newClone);
      document.removeEventListener('mousemove', onMouseMove);
      newClone.onmouseup = null;
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

    imageElement = (
      <>
          <div className={classes.ImageContainer} style={{width: imageWidth, height: imageHeight}}
               onMouseDown={imageOnMouseDown}>
          {/*backgroundImage: `url(${item.imageUrl})`, backgroundSize: `100% 100%`}}*/}
          {/*>*/}
            <img src={item.imageUrl}
                 className={classes.Image} style={item.isEquipped ? {opacity: '0.3'} : null}
                 onDragStart={(e) => {e.stopPropagation();e.preventDefault();return false}}/>
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