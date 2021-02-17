// All types should be lowerCase
import { ItemCategories } from './categories';

const ItemTypes = {
  // Standardized
  WEAPON_RIFLE: ItemCategories[0],
  WEAPON_PISTOL: ItemCategories[1],
  WEAPON_LAUNCHER: ItemCategories[2],

  AMMO: ItemCategories[3],

  DRUG_LIGHT: ItemCategories[4],
  DRUG_HARD: ItemCategories[5],
  EAT: ItemCategories[6],

  // Not Standardized
  HEADDRESS: ItemCategories[7],
  OUTERWEAR: ItemCategories[8],
  PANTS: ItemCategories[9],
  SHOES: ItemCategories[10],
  ACCESSORIES: ItemCategories[11],

  // TOOLS - Tools for weapons
  TOOLS: ItemCategories[12],
  SIM_CARD: ItemCategories[13],
  PHONE: ItemCategories[14],
};

const AllItemTypes = [];

for (const propName in ItemTypes) {
  AllItemTypes.push(ItemTypes[propName]);
}

const WeaponItemTypes = [ItemCategories[0], ItemCategories[1], ItemCategories[2]];

export { ItemTypes, AllItemTypes, WeaponItemTypes };
