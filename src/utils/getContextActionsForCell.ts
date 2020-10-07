// // выкинуть можно как с доски, так и с одетого инвентаря, потому разные диспатчи
// import store from "../redux/store";
// import {ItemTypes} from "../constants/dnd/types";
// import {removeEquippedWeapon} from "../redux/actions/board";
// import {removeEquippedItem} from "../redux/actions/equippedItems";
// import {translateToServerItem} from "./translateToServerItem";
// import {ContextAction} from "../models/Context/ContextAction";
// const {dispatch} = store;
//
// // for dropUnequippedItem - if category is weapon, check for isWeaponEquipped
//
// const _mpTriggerDropItem = (item) => {
//   const translatedItem = translateToServerItem(item);
//   try {
//     //@ts-ignore
//     mp.trigger('cef_cl_dropItem', translatedItem);
//   } catch(e) {
//     console.error('error with mp.trigger', e);
//   }
// }
//
// const _removeBoardItemHandler = (item) => {
//   const {category, id, mainCell} = item;
//   // тут еще чекать если оружие, то удалить с доски его тоже
//   if(category === ItemTypes.WEAPON_RIFLE || category === ItemTypes.WEAPON_PISTOL
//     || category === ItemTypes.WEAPON_LAUNCHER) {
//     // if item is weapon remove transparent weapon from board too
//     // @ts-ignore AnyAction, but I use redux-thunk
//     dispatch(removeEquippedWeapon(id));
//   }
//   // @ts-ignore
//   dispatch(removeEquippedItem(mainCell));
// }
//
// const _removeEquippedItemHandler = (item) => {
//   const {category, id, mainCell} = item;
//   // тут еще чекать если оружие, то удалить с доски его тоже
//   if(category === ItemTypes.WEAPON_RIFLE || category === ItemTypes.WEAPON_PISTOL
//   || category === ItemTypes.WEAPON_LAUNCHER) {
//     // if item is weapon remove transparent weapon from board too
//     // @ts-ignore AnyAction, but I use redux-thunk
//     dispatch(removeEquippedWeapon(id));
//   }
//   // @ts-ignore
//   dispatch(removeEquippedItem(mainCell));
// }
//
// // returns function to invoke when drop action selected
// const _dropItemHandler = (removeItemFunc, item) => () => {
//   removeItemFunc(item);
//   _mpTriggerDropItem(item);
// }
//
// const getContextActionsForCell = (item) => {
//   const contextActions: ContextAction[] = [];
//   if(typeof item.mainCell === 'object') {
//     // if item from board
//     //
//     // switch(item.category) {
//     //
//     // }
//     //
//     contextActions.push(new ContextAction('Выкинуть', _dropItemHandler(_removeBoardItemHandler, item)));
//   } else {
//     // item from equipped items
//     contextActions.push(new ContextAction('Выкинуть', _dropItemHandler(_removeEquippedItemHandler, item)));
//   }
//   return contextActions;
// }
//
// export default getContextActionsForCell;