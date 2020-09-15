import React from 'react';
import {DragPreviewImage, useDrag} from 'react-dnd';
import {useDispatch} from "react-redux";
import {addDraggedItem, draggedItemRelease} from "../../redux/actions/draggedItem";
import EquippedItem from "../../components/items/EquippedItem";
import Item from "../../models/Item";
// @ts-ignore
import classes from '../../styles/equippedClosingInventory/SquareEquippedItem.module.scss';
import SecondaryText from "../../components/layout/SecondaryText";

const SquareEquippedItem = ({item}: {item: Item}) => {

  const dispatch = useDispatch();
  const [{}, drag, preview] = useDrag({
    item: {type: item.category, isInventory: true},
    begin() {
      dispatch(addDraggedItem([0,0], item, true));
    },
    end(DNDItem, monitor) {
      dispatch(draggedItemRelease());
    },
    collect: () => {
      return ({});
    }
  });

  // const imageContainerRef = useRef();
  // // @ts-ignore
  //
  // useEffect(() => {
  //   // Handler to call on window resize
  //   function handleResize() {
  //     const current: HTMLElement | null = imageContainerRef.current;
  //     const CSSStyleDeclaration = window.getComputedStyle(current);
  //
  //     let imageContainerWidth: string | number = CSSStyleDeclaration.getPropertyValue('width');
  //     let imageContainerHeight: string | number = CSSStyleDeclaration.getPropertyValue('height');
  //
  //     // get number from string (string example: 123.45px)
  //     const regex = /^((\d|\.)+)/;
  //     imageContainerWidth = parseFloat(imageContainerWidth.match(regex)[0]);
  //     imageContainerHeight = parseFloat(imageContainerHeight.match(regex)[0]);
  //
  //     // @ts-ignore
  //     setImageWidth(imageContainerWidth * width - 2);
  //     // @ts-ignore
  //     setImageHeight(imageContainerHeight * height - 2);
  //
  //     const a = window.getComputedStyle(current);
  //   }
  //
  //   // Add event listener
  //   window.addEventListener("resize", handleResize);
  //
  //   // Call handler right away so state gets updated with initial size
  //   handleResize();
  //
  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []); // Empty array ensures that effect is only run on mount

  // image inside commonItem and pos absolute ofc
  return (
    <EquippedItem forwardedRef={drag} previewConnect={preview} imageUrl={item.imageUrl}>
      {item.imageUrl && <img src={item.imageUrl} className={classes.Image}/>}
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