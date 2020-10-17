import Item from "../models/Item";
import {xMax} from '../constants/boardDimensions';

// change PosNumberLeftAngle, Enableds
const translateToServerItem = (item: Item) => {
  let {id, name, category, mainCell, width,
    height, currentCount, isEquipped, isRotated, rest} = item;

  let posNumberLeftAngle = mainCell;

  // translate coords to 1-dimension
  if(!isEquipped) {
    posNumberLeftAngle = mainCell[1] * (xMax + 1) + (mainCell[0] + 1);
  }

  // change before sending item
  if(isRotated) {
    const tmp = width;
    width = height;
    height = tmp;
  }

  return JSON.stringify({
    ID: id,
    Name: name,
    Category: category,
    PosNumberLeftAngle: posNumberLeftAngle,
    SizeX: width,
    SizeY: height,
    CurrentCount: currentCount,
    Enabled: isEquipped,
    IsRotated: isRotated,
    ...rest
  });
}

export {translateToServerItem};