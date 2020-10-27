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
import {openOrRefreshInventory, setSquareSize} from "./redux/actions/board";
import ContextMenu from "./components/UI/ContextMenu";
import RangeComponent from "./components/UI/RangeComponent";
import {closeContextMenu} from "./redux/actions/contextMenu";
import {rotateItem, rotateItemOnBoard, setGoingToDrop} from "./redux/actions/draggedItem";
import {openExternalBoard} from "./redux/actions/externalBoard";
import {removeHoveredItem} from "./redux/actions/hoveredItem";

const App = React.memo(function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // todo check App rerender
  const {
    board: {boardSquareSize},
    contextMenu,
    draggedItem: {goingToDrop, item: draggedItem},
    hoveredItem: {item: hoveredItem, hoveredArea: hoveredItemArea}
  } = useSelector(state => state);

  const goingToDropRef = useRef();
  const draggedItemRef = useRef();
  goingToDropRef.current = goingToDrop;
  draggedItemRef.current = draggedItem;

  // @ts-ignore
  if (!window.openInventory || !window.refreshInventory) {
    // @ts-ignore
    window.openInventory = async (info) => {
      if (!isOpen) {
        setIsOpen(true);
      }
      await openOrRefreshInventory(info);
      return;
    };
    // @ts-ignore
    window.refreshInventory = openOrRefreshInventory;
  }

  // @ts-ignore
  if(!window.openExternalInventory) {
    // @ts-ignore
    window.openExternalInventory = async info => {
      await openExternalBoard(info);
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

  const spaceDownHandler = (e) => {
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault();
      if (draggedItem && draggedItem.width > 1 && draggedItem.height > 1) {
        dispatch(rotateItem());
      } else if (hoveredItem && hoveredItemArea !== 3 &&
        hoveredItem.width > 1 && hoveredItem.height > 1) {
        dispatch(rotateItemOnBoard(hoveredItem, hoveredItemArea));
      }
    }
  }

  document.onkeydown = spaceDownHandler;

  if(!window.onclick) {
    window.onclick = () => {
      console.log('document onclick');
      if (contextMenu.contextItem) {
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
        {contextMenu.contextItem && !contextMenu.splitMenuOpen && (<ContextMenu contextItem={contextMenu.contextItem}
                                                                                leftOffset={contextMenu.leftOffset}
                                                                                topOffset={contextMenu.topOffset}
                                                                                hoveredArea={contextMenu.hoveredArea}
                                                                                />)}
        <RangeComponent leftOffset={contextMenu.leftOffset}
                        topOffset={contextMenu.topOffsetTopContext}
                        contextItem={contextMenu.contextItem}
                        hoveredArea={contextMenu.hoveredArea}
                        splitMenuOpen={contextMenu.splitMenuOpen}/>
      </div>
    </>
  );
});

export default App;
