import Item from "./Item";
import {ItemCategories} from "../constants/dnd/categories";

export default class WeaponItem extends Item {
  public isEquipped: boolean;
  // Just save field mainCell, for equipped weapons
  public mainCellOnBoard: [number, number] | number;

  constructor(id: string, name: string, category: ItemCategories | string, mainCell: [number, number], width: number, height: number,
              currentCount: number, imageUrl: string | null, rest: any, isEquipped = false, mainCellOnBoard = mainCell) {
    super(id, name, category, mainCell, width, height, currentCount, imageUrl, rest);
    this.isEquipped = isEquipped;
    this.mainCellOnBoard = mainCellOnBoard;
  }
}