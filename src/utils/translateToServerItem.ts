import Item from "../models/Item";
import {xMax} from '../constants/boardDimensions';

const translateToServerItem = (item: Item, enabled: boolean = false) => {
  const {id, name, category, mainCell, width,
    height, currentCount, imageUrl} = item;
  let {rest} = item;

  // translate coords to 1-dimension
  let posNumberLeftAngle = mainCell;

  if(!enabled) {
    posNumberLeftAngle = mainCell[1] * (xMax + 1) + (mainCell[0] + 1);
    rest = {...rest, Enabled: false};
  } else {
    rest = {...rest, Enabled: true};
  }

  return JSON.stringify({
    ID: id,
    Name: name,
    category: category,
    PosNumberLeftAngle: posNumberLeftAngle,
    SizeX: width,
    SizeY: height,
    CurrentCount: currentCount,
    ImageUrl: imageUrl,
    ...rest
  });
}

export {translateToServerItem};