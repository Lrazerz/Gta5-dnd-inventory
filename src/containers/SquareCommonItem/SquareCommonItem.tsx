import React, {useEffect, useRef, useState} from 'react';
import {useDrag} from 'react-dnd';
import {useDispatch} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import CommonItem from "../../components/items/CommonItem/CommonItem";
import classes from '../../styles/board/SquareCommonItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";

const SquareCommonItem = ({coords: [x, y], item}) => {

  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();
  const [resultDataUri, setResultDataUri] = useState(null);

  const dispatch = useDispatch();
  // Allow drag
  const [{}, drag, preview] = useDrag({
    item: {type: item.category, isInventory: false},
    begin() {
      dispatch(addDraggedItem([x, y], item));
    },
    end() {
      dispatch(draggedItemRelease());
    },
    collect: (monitor) => {
      return ({});
    }
  });

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
  }, []); // Empty array ensures that effect is only run on mount

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

    // console.log('SqCommItem', item.isEquipped, item);
    imageElement = (
      <>
        <div className={classes.ImageContainer} style={{width: imageWidth, height: imageHeight}}>
          <img src={item.imageUrl}
               className={classes.Image} style={item.isEquipped ? {opacity: '0.3'} : null}/>
          {currentCountText}
        </div>
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
    <CommonItem forwardedRef={drag} imageContainerForwardedRef={imageContainerRef} connectPreview={preview}
                imageUrl={resultDataUri ? resultDataUri : null}>
      {imageElement}
    </CommonItem>
  )
}


export default SquareCommonItem;