// All types should be lowerCase
const ItemTypes = {
  HEADDRESS: 'headdress',
  OUTERWEAR: 'outerwear',
  PANTS: 'pants',
  SHOES: 'shoes',
  ACCESSORIES: 'accessories',

  WEAPON: 'weapon',
  AMMO: 'ammo',
  TOOLS: 'tools',

  PHONE: 'phone',
  SIM_CARD: 'simcard',
}

let AllItemTypes = [];

for (const propName in ItemTypes) {
  AllItemTypes.push(ItemTypes[propName]);
}

export {ItemTypes, AllItemTypes};