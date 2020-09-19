import {ItemCategories} from "../constants/dnd/categories";

export default class Item {
  public id: string;
  public name: string;
  // smth like itemType
  public category: ItemCategories;

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
  public currentCount: number;

  public imageUrl: string | null;

  public rest: any;

  constructor(id: string, name: string, category: ItemCategories, mainCell: [number, number], width: number, height: number,
              currentCount: number, imageUrl: string | null, rest: any) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.mainCell = mainCell;
    this.width = width;
    this.height = height;
    this.currentCount = currentCount;
    this.imageUrl = imageUrl;
    this.rest = rest;
  }
}