import React, {CSSProperties, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppBoard from "./containers/AppBoard/AppBoard";
import classes from './styles/App.module.scss';
import EquippedClosingInventoryContainer
  from "./containers/equippedClosingInventory/EquippedClosingInventoryContainer";
import EquippedWeaponsInventoryContainer from "./containers/equippedWeaponsInventory/EquippedWeaponsInventoryContainer";
import SecondaryText from "./components/layout/SecondaryText";
import leftSparksSvg from "./assets/images/UI/left-sparks.svg";
import rightSparksSvg from "./assets/images/UI/right-sparks.svg";
import {openDoubleInventory, openOrRefreshInventory, setSquareSize} from "./redux/actions/board";
import RangeComponent from "./components/UI/RangeComponent";
const ContextMenu = React.lazy(() => import("./components/UI/ContextMenu"));
import {closeContextMenu} from "./redux/actions/contextMenu";
import {rotateItem, rotateItemOnBoard, setGoingToDrop} from "./redux/actions/draggedItem";
import {removeHoveredItem} from "./redux/actions/hoveredItem";
import {closeExternalBoard} from "./redux/actions/externalBoard";

const App = React.memo(function App() {

  //region ------------------------------ Get state from redux, set references ------------------------------
  const [isOpen, setIsOpen] = useState(false);
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

  // @ts-ignore
  if (!window.openInventory || !window.refreshInventory) {
    // @ts-ignore
    window.openInventory = async (info) => {
      if (!isOpen) {
        setIsOpen(true);
      }
      await openOrRefreshInventory(info);
      dispatch(closeExternalBoard());
      return;
    };
    // @ts-ignore
    window.refreshInventory = openOrRefreshInventory;
  }

  // @ts-ignore
  if(!window.openDoubleInventory) {
    // @ts-ignore
    window.openDoubleInventory = async info => {
      await openDoubleInventory(info);
    }
  }

  if (!isOpen) {
    return null;
  }

  if(!boardSquareSize) {
    const bodyWidth = document.body.getBoundingClientRect().width;
    dispatch(setSquareSize(bodyWidth * 0.04125));
  }

  if(!document.oncontextmenu) {
    document.oncontextmenu = e => {
      e.preventDefault();
    }
  }

  const spaceDownHandler = React.useCallback((e) => {
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault();
      if (draggedItem && draggedItem.width > 1 && draggedItem.height > 1) {
        dispatch(rotateItem());
      } else if (hoveredItem && hoveredItemArea !== 3 &&
        hoveredItem.width > 1 && hoveredItem.height > 1) {
        dispatch(rotateItemOnBoard(hoveredItem, hoveredItemArea))
      }
    }
  }, [draggedItem, hoveredItem,hoveredItemArea]);

  document.onkeydown = spaceDownHandler;

  if(!window.onclick) {
    window.onclick = () => {
      console.log('window onclick');
      // @ts-ignore
      if (contextMenuRef.current.contextItem) {
        dispatch(closeContextMenu());
      }
    }
  }

  const removeCurrentHoveredItem = React.useCallback(() => {
    if (hoveredItem) {
      dispatch(removeHoveredItem());
    }
  }, [hoveredItem])

  // act as backdrop
  const tooltipMouseOverHandler = React.useCallback(e => {
    if (draggedItemRef.current && !goingToDropRef.current) {
      dispatch(setGoingToDrop(true));
      e.stopPropagation();
    }
  },[draggedItemRef.current, goingToDropRef.current])

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

export default App;
