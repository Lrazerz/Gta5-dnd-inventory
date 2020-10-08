import Item from "./Item";
import {ItemCategories} from "../constants/dnd/categories";

export default class WeaponItem extends Item {
  // Just save field mainCell, for equipped weapons
  public mainCellOnBoard: [number, number] | number;

  constructor(id: string, name: string, category: ItemCategories | string, mainCell: [number, number], width: number,
              height: number, currentCount: number, maxCount: number | undefined, imageUrl: string | null,
              isEquipped = false, rest: any, mainCellOnBoard = mainCell) {
    super(id, name, category, mainCell, width, height, currentCount, maxCount, imageUrl, isEquipped, rest);
    this.mainCellOnBoard = mainCellOnBoard;
  }
}