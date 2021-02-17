import { translateExternalToServerItem, translateToServerItem } from '../../../inventory/utils/translateToServerItem';

//region ------------------------------ Move triggers ------------------------------
// when add item at board or equipped inventory (addItem, setEquippedItem)
const mpTriggerMoveItem = (item) => {
  const transformedItem = translateToServerItem(item);
  try {
    console.log('cef_cl_moveItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_moveItem', transformedItem);
  } catch (e) {}
};

// when add item at external board from board/eq (addExternalBoardItem)  (*in fact addExtBoardItem)
const mpTriggerMoveToExternalItem = (item) => {
  const transformedItem = translateToServerItem(item);
  try {
    console.log('cef_cl_moveToExternalItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_moveToExternalItem', transformedItem);
  } catch (e) {}
};

// move from external to board/eq
const mpTriggerMoveFromExternalItem = (item) => {
  const transformedItem = translateToServerItem(item);
  try {
    console.log('cef_cl_moveFromExternalItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_moveFromExternalItem', transformedItem);
  } catch (e) {}
};

// when add item at external board from external board
const mpTriggerMoveFromExternalToExternalItem = (item) => {
  const transformedItem = translateToServerItem(item);
  try {
    console.log('cef_cl_moveExternalItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_moveExternalItem', transformedItem);
  } catch (e) {}
};
//endregion

//region ------------------------------ Drop triggers ------------------------------
// invoke from dragEndHandler, RangeComponent, contextMenu ("Выкинуть")
const mpTriggerDropItem = (item) => {
  const transformedItem = translateToServerItem(item);
  try {
    console.log('cef_cl_dropItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_dropItem', transformedItem);
  } catch (e) {}
};

// invoke from dragEndHandler, RangeComponent, contextMenu ("Выкинуть")
const mpTriggerDropExternalItem = (item) => {
  const transformedItem = translateExternalToServerItem(item);
  try {
    console.log('cef_cl_dropExternalItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_dropExternalItem', transformedItem);
  } catch (e) {}
};
//endregion

//region ------------------------------ Stack triggers ------------------------------
const mpTriggerStackItem = (draggedItem, stackableItem) => {
  const transformedDraggedItem = translateToServerItem(draggedItem);
  const transformedStackableItem = translateToServerItem(stackableItem);
  try {
    console.log('cef_cl_stackItem', transformedDraggedItem, transformedStackableItem);
    // @ts-ignore
    mp.trigger('cef_cl_stackItem', transformedDraggedItem, transformedStackableItem);
  } catch (e) {}
};

const mpTriggerStackToExternalItem = (draggedItem, stackableItem) => {
  const transformedDraggedItem = translateToServerItem(draggedItem);
  const transformedStackableItem = translateExternalToServerItem(stackableItem);
  try {
    console.log('cef_cl_stackToExternalItem', transformedDraggedItem, transformedStackableItem);
    // @ts-ignore
    mp.trigger('cef_cl_stackToExternalItem', transformedDraggedItem, transformedStackableItem);
  } catch (e) {}
};

const mpTriggerStackFromExternalItem = (draggedItem, stackableItem) => {
  const transformedDraggedItem = translateExternalToServerItem(draggedItem);
  const transformedStackableItem = translateToServerItem(stackableItem);
  try {
    console.log('cef_cl_stackFromExternalItem', transformedDraggedItem, transformedStackableItem);
    // @ts-ignore
    mp.trigger('cef_cl_stackFromExternalItem', transformedDraggedItem, transformedStackableItem);
  } catch (e) {}
};

const mpTriggerStackFromExternalToExternalItem = (draggedItem, stackableItem) => {
  const transformedDraggedItem = translateExternalToServerItem(draggedItem);
  const transformedStackableItem = translateExternalToServerItem(stackableItem);
  try {
    console.log('cef_cl_stackExternalItem', transformedDraggedItem, transformedStackableItem);
    // @ts-ignore
    mp.trigger('cef_cl_stackExternalItem', transformedDraggedItem, transformedStackableItem);
  } catch (e) {}
};
//endregion

//region ------------------------------ Rotate triggers ------------------------------
// rotate item on board when have no dragged item
const mpTriggerRotateBoardItem = (item) => {
  const transformedItem = translateToServerItem(item);
  try {
    console.log('cef_cl_rotateItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_rotateItem', transformedItem);
  } catch (e) {}
};

const mpTriggerRotateExternalItem = (item) => {
  const transformedItem = translateExternalToServerItem(item);
  try {
    console.log('cef_cl_rotateExternalItem', transformedItem);
    // @ts-ignore
    mp.trigger('cef_cl_rotateExternalItem', transformedItem);
  } catch (e) {}
};
//endregion

export {
  mpTriggerMoveItem,
  mpTriggerMoveToExternalItem,
  mpTriggerMoveFromExternalItem,
  mpTriggerMoveFromExternalToExternalItem,
  mpTriggerDropItem,
  mpTriggerDropExternalItem,
  mpTriggerStackItem,
  mpTriggerStackToExternalItem,
  mpTriggerStackFromExternalItem,
  mpTriggerStackFromExternalToExternalItem,
  mpTriggerRotateBoardItem,
  mpTriggerRotateExternalItem,
};
