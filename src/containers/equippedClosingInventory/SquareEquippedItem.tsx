import React, {useEffect} from 'react';
import {useDrag} from 'react-dnd';
import {useDispatch} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import EquippedItem from "../../components/items/EquippedItem";
import classes from '../../styles/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";

const SquareEquippedItem = ({item}: { item: any }) => {

  const dispatch = useDispatch();
  const [{}, drag] = useDrag({
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
  if(item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
    imageStyles = {
      top: '1%',
      right: '1%',
      height: '98%',
      width: 'auto'
    }
  }

  {/*useEffect(() => {*/}
  //   function imageToDataUri(img, width, height) {
  //
  //     // create an off-screen canvas
  {/*    let canvas = document.createElement('canvas'),*/}
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
    <EquippedItem forwardedRef={drag}>
      {item.imageUrl && <img src={item.imageUrl} className={classes.Image} style={imageStyles}

      />}
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