export default class Item {
  public name: string;
  // smth like itemType
  public category: string;

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

  constructor(name: string, category: string, mainCell: [number,number], width: number, height: number,
              currentCount: number, imageUrl: string | null) {
    this.name = name;
    this.category = category;
    this.mainCell = mainCell;
    this.width = width;
    this.height = height;
    this.currentCount = currentCount;
    this.imageUrl = imageUrl;
  }
}