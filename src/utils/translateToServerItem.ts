import Item from "../models/Item";
import {xMax} from '../constants/boardDimensions';

const translateToServerItem = (item: Item) => {
  const {id, name, category, mainCell, width,
    height, currentCount, imageUrl, rest} = item;

  // translate coords to 1-dimension
  const posNumberLeftAngle = mainCell[1] * (xMax + 1) + (mainCell[0] + 1);

  return {
    ID: id,
    Name: name,
    category: category,
    PosNumberLeftAngle: posNumberLeftAngle,
    SizeX: width,
    SizeY: height,
    CurrentCount: currentCount,
    ImageUrl: imageUrl,
    ...rest
  }
}

export {translateToServerItem};