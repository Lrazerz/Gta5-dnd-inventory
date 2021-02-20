import ItemModel from '../models/ItemModel';
import { xMax } from '../constants/boardDimensions';

// change PosNumberLeftAngle, Enableds
const translateToServerItem = (item: ItemModel) => {
  const { id, name, category, mainCell, width, height, currentCount, isRotated, rest } = item;

  let posNumberLeftAngle = mainCell;

  // translate coords to 1-dimension
  if (typeof item.mainCell === 'object') {
    posNumberLeftAngle = mainCell[1] * (xMax + 1) + (mainCell[0] + 1);
  }

  //last-change
  // change before sending item
  // if(isRotated) {
  //   const tmp = width;
  //   width = height;
  //   height = tmp;
  // }

  return JSON.stringify({
    ID: id,
    Name: name,
    Category: category,
    PosNumberLeftAngle: posNumberLeftAngle,
    SizeX: width,
    SizeY: height,
    CurrentCount: currentCount,
    Enabled: typeof item.mainCell === 'number',
    IsRotated: isRotated,
    ...rest,
  });
};

// has no enabled field
const translateExternalToServerItem = (item: ItemModel) => {
  const { Enabled, ...rest } = JSON.parse(translateToServerItem(item));
  return JSON.stringify(rest);
};

export { translateToServerItem, translateExternalToServerItem };
