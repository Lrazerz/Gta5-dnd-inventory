import {ItemCategories} from "../constants/dnd/categories";

export default class ItemToBoard {
  constructor(public id: number,
              public name: string,
              public category: ItemCategories,
              public mainCell: [number, number],
              public width: number,
              public height: number,
              public squares: [[number,number]] | [],
              public currentCount: number,
              public imageUrl: string | null) {
  }
}