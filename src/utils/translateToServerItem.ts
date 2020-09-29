import Item from "../models/Item";
import {xMax} from '../constants/boardDimensions';

const translateToServerItem = (item: Item) => {
  const {id, name, category, mainCell, width,
    height, currentCount, isEquipped} = item;
  let {rest} = item;

  // translate coords to 1-dimension
  let posNumberLeftAngle = mainCell;

  if(!isEquipped) {
    posNumberLeftAngle = mainCell[1] * (xMax + 1) + (mainCell[0] + 1);
  } else {
  }

  return JSON.stringify({
    ID: id,
    Name: name,
    category: category,
    PosNumberLeftAngle: posNumberLeftAngle,
    SizeX: width,
    SizeY: height,
    CurrentCount: currentCount,
    Enabled: isEquipped,
    ...rest
  });
}

export {translateToServerItem};