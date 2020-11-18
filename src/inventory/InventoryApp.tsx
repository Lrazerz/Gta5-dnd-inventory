import React, {CSSProperties, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppBoard from "./containers/AppBoard/AppBoard";
// @ts-ignore
import classes from './styles/InventoryApp.module.scss';
import EquippedClosingInventoryContainer
  from "./containers/equippedClosingInventory/EquippedClosingInventoryContainer";
import EquippedWeaponsInventoryContainer from "./containers/equippedWeaponsInventory/EquippedWeaponsInventoryContainer";
import SecondaryText from "./components/layout/SecondaryText";
// @ts-ignore
import leftSparksSvg from "./assets/images/UI/left-sparks.svg";
// @ts-ignore
import rightSparksSvg from "./assets/images/UI/right-sparks.svg";
import {openDoubleInventory, openOrRefreshInventory, setSquareSize} from "./redux/actions/board";
import RangeComponent from "./components/UI/RangeComponent";
const ContextMenu = React.lazy(() => import("./components/UI/ContextMenu"));
import {closeContextMenu} from "./redux/actions/contextMenu";
import {rotateItem, rotateItemOnBoard, setGoingToDrop} from "./redux/actions/draggedItem";
import {removeHoveredItem} from "./redux/actions/hoveredItem";

const InventoryApp =  React.memo(function InventoryApp() {

  //region ------------------------------ Get state from redux, set references ------------------------------
  // const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const {
    board: {boardSquareSize},
    contextMenu,
    draggedItem: {goingToDrop, item: draggedItem},
    hoveredItem: {item: hoveredItem, hoveredArea: hoveredItemArea}
  } = useSelector(state => state);

  const goingToDropRef = useRef();
  const draggedItemRef = useRef();
  const contextMenuRef = useRef();
  goingToDropRef.current = goingToDrop;
  draggedItemRef.current = draggedItem;
  contextMenuRef.current = contextMenu;
  //endregion

  if(!boardSquareSize) {
    const bodyWidth = document.body.getBoundingClientRect().width;
    dispatch(setSquareSize(bodyWidth * 0.04125));
  }

  //region ------------------------------ Event handlers ------------------------------
  if(!document.oncontextmenu) {
    document.oncontextmenu = e => {
      e.preventDefault();
    }
  }

  const spaceDownHandler = (e) => {
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault();
      if (draggedItem && draggedItem.width > 1 && draggedItem.height > 1) {
        dispatch(rotateItem());
      } else if (hoveredItem && hoveredItemArea !== 3 &&
        hoveredItem.width > 1 && hoveredItem.height > 1) {
        dispatch(rotateItemOnBoard(hoveredItem, hoveredItemArea))
      }
    }
  }

  document.onkeydown = spaceDownHandler;

  if(!window.onclick) {
    window.onclick = (e) => {
      e.preventDefault();
      // @ts-ignore
      if (contextMenuRef.current.contextItem) {
        dispatch(closeContextMenu());
      }
    }
  }

  const removeCurrentHoveredItem = () => {
    if (hoveredItem) {
      dispatch(removeHoveredItem());
    }
  }

  // act as backdrop
  const tooltipMouseOverHandler = e => {
    if (draggedItemRef.current && !goingToDropRef.current) {
      dispatch(setGoingToDrop(true));
      e.stopPropagation();
    }
  }
  //endregion

  //Allow ToolTip to be BackDrop
  const tooltipStyles: CSSProperties = {
    pointerEvents: goingToDrop ? 'none' : 'inherit',
    zIndex: goingToDrop ? 'auto' : 200,
  }

  return (
    <>
      {/*<div className={classes.BgWrapper}/>*/}
      {/*<div className={classes.BlurredWrapper}/>*/}
      <div className={classes.AppContainer}>
        <div className={classes.TopTooltip} style={tooltipStyles} onMouseOver={tooltipMouseOverHandler}>
          <SecondaryText styles={{fontWeight: 600, color: '#fcfdff', width: 'auto'}}>
            Нажмите I для выхода
          </SecondaryText>
        </div>
        <div className={classes.App}>
          <EquippedClosingInventoryContainer onMouseOver={removeCurrentHoveredItem}/>
          <AppBoard onMouseOver={removeCurrentHoveredItem}/>
          <EquippedWeaponsInventoryContainer onMouseOver={removeCurrentHoveredItem}/>
        </div>
        <object type="image/svg+xml" data={leftSparksSvg} className={classes.LeftSparksSvgContainer}/>
        <object type="image/svg+xml" data={rightSparksSvg} className={classes.RightSparksSvgContainer}/>
        {contextMenu.contextItem && (<React.Suspense fallback={<div>Loading...</div>}>

        {!contextMenu.splitMenuOpen && (<ContextMenu contextItem={contextMenu.contextItem}
                                                                                leftOffset={contextMenu.leftOffset}
                                                                                topOffset={contextMenu.topOffset}
                                                                                hoveredArea={contextMenu.hoveredArea}
                                                                                />)}
        </React.Suspense>)}
        <RangeComponent leftOffset={contextMenu.leftOffset}
                        topOffset={contextMenu.topOffsetTopContext}
                        contextItem={contextMenu.contextItem}
                        hoveredArea={contextMenu.hoveredArea}
                        splitMenuOpen={contextMenu.splitMenuOpen}/>)
      </div>
    </>
  );
});

export default InventoryApp;
