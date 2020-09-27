import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import CommonItem from "../../components/items/CommonItem/CommonItem";
import classes from '../../styles/board/SquareCommonItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";
import Draggable from 'react-draggable';

const SquareCommonItem = ({coords: [x, y], item}) => {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();
  const [resultDataUri, setResultDataUri] = useState(null);

  const dispatch = useDispatch();
  // Allow drag
  // const [{}, drag, preview] = useDrag({
  //   item: {type: item.category, isInventory: false},
  //   begin() {
  //     console.log('SquareCommonItem useDrag begin');
  //     dispatch(addDraggedItem([x, y], item));
  //   },
  //   end() {
  //     console.log('SquareCommonItem useDrag end');
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
        {/*<Draggable onStart={() => dispatch(addDraggedItem([x, y], item))}*/}
        {/*           onDrag={(props) => console.log('ondrag props', props)}*/}
        {/*onStop={(props) => console.log('stop',props)}>*/}
          <div className={classes.ImageContainer} style={{width: imageWidth, height: imageHeight,
          backgroundImage: `url(${item.imageUrl})`, backgroundSize: `100% 100%`}} draggable={"true"}
          onDragStart={e => {e.dataTransfer.effectAllowed = "all"}}>
            {/*<img src={item.imageUrl}*/}
            {/*     className={classes.Image} style={item.isEquipped ? {opacity: '0.3'} : null}/>*/}
            {currentCountText}
          </div>
        {/*</Draggable>*/}
      </>
    );
  }

  useEffect(() => {
    function imageToDataUri(img, width, height) {

      // create an off-screen canvas
      let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

      // set its dimension to target size
      canvas.width = width;
      canvas.height = height;

      // draw source image into the off-screen canvas:
      ctx.drawImage(img, 0, 0, width, height);

      // encode image to data-uri with base64 version of compressed image
      return canvas.toDataURL();
    }

    const resizeImage = () => {
      setResultDataUri(imageToDataUri(newImage, imageWidth, imageHeight));
    }
    const newImage = new Image();
    newImage.onload = resizeImage;
    newImage.src = item.imageUrl;

  }, [item, imageWidth, imageHeight]);

  return (
    <CommonItem imageContainerForwardedRef={imageContainerRef}
                imageUrl={resultDataUri ? resultDataUri : null}>
      {imageElement}
    </CommonItem>
  )
}


export default SquareCommonItem;