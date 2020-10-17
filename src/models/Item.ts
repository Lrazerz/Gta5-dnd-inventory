import {ItemCategories} from "../constants/dnd/categories";

export default class Item {
  public id: string;
  public name: string;
  // smth like itemType
  public category: ItemCategories | string;

  // [x,y] (PosNumberLeftAngle on server (1-102))
  // x from 0 to 16, y from 0 to 5
  // or number if item is equipped
  public mainCell: [number, number] | number;

  // SizeX on server
  public width: number;

  // SizeY on server
  public height: number;

  // equipped or not
  // public enabled: boolean;

  // count of items (stack, number in the right top corner)
  public currentCount: number | undefined;

  public maxCount: number | undefined;

  public imageUrl: string | null;

  public isEquipped: boolean;

  public rest: any;

  // weapons still exists in the inventory, even if equipped
  public isWeaponEquipped: boolean;

  // is rotated 90 degrees
  public isRotated: boolean;

  constructor(id: string, name: string, category: ItemCategories | string, mainCell: [number, number] | number,
              width: number, height: number, currentCount: number, maxCount: number | undefined, imageUrl: string | null,
              isEquipped: boolean, isRotated = false, rest: any, isWeaponEquipped: boolean = false) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.mainCell = mainCell;
    this.width = width;
    this.height = height;
    this.currentCount = currentCount;
    this.maxCount = maxCount;
    this.imageUrl = imageUrl;
    this.isEquipped = isEquipped;
    this.isRotated = isRotated;
    this.rest = rest;
    this.isWeaponEquipped = isWeaponEquipped;
  }
}