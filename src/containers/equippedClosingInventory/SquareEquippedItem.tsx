import React, {useEffect, useRef, useState} from 'react';
import {useDrag} from 'react-dnd';
import {useDispatch} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import EquippedItem from "../../components/items/EquippedItem";
import classes from '../../styles/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";

const SquareEquippedItem = ({item}: { item: any }) => {
  const [resultDataUri, setResultDataUri] = useState(null);

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

      // @ts-ignore
      let imageWidth = imageContainerWidth * item.width * 1.4;
      // @ts-ignore
      let imageHeight = imageContainerHeight * item.height * 1.4;

      if(item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
        imageWidth = imageContainerWidth * item.width * 0.33;
        imageHeight = imageContainerHeight * item.height * 1.15;
      }

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
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();
  const [{}, drag, preview] = useDrag({
    item: {type: item.category, isInventory: true},
    begin() {
      dispatch(addDraggedItem([0, 0], item, true));
    },
    end() {
      dispatch(draggedItemRelease());
    },
    collect: () => {
      return ({});
    }
  });

  let imageStyles;
  if (item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
    imageStyles = {
      top: '1%',
      right: '1%',
      height: '98%',
      width: 'auto'
    }
  }

  return (
    <EquippedItem forwardedRef={drag} imageContainerForwardedRef={imageContainerRef} connectPreview={preview}
    imageUrl={resultDataUri}>
      {item.imageUrl && <img src={item.imageUrl} className={classes.Image} style={imageStyles}/>}
      {item.currentCount > 1
      &&
      (<div className={classes.CurrentCount}>
        <SecondaryText>
          {item.currentCount}
        </SecondaryText>
      </div>)}
    </EquippedItem>
  );
}

export default SquareEquippedItem;