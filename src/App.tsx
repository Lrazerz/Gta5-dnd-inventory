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
import BackDrop from "./components/layout/BackDrop";
import {rotateItem, rotateItemOnBoard, setGoingToDrop} from "./redux/actions/draggedItem";

const App = React.memo(function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // todo check App rerender
  const {
    board: {boardSquareSize},
    contextMenu,
    draggedItem: {goingToDrop, item: draggedItem},
    hoveredItem: {item: hoveredItem}
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

  if(!boardSquareSize) {
    const bodyWidth = document.body.getBoundingClientRect().width;
    dispatch(setSquareSize(bodyWidth));
  }

  if (!isOpen) {
    return null;
  }

  document.oncontextmenu = e => {
    e.preventDefault();
  }

  document.onkeydown = e => {
    if (e.code.toLowerCase() === 'space') {
      if (draggedItem && draggedItem.width > 1 && draggedItem.height > 1) {
        dispatch(rotateItem());
      } else if (hoveredItem && typeof hoveredItem.mainCell === 'object' && hoveredItem.width > 1 && hoveredItem.height > 1) {
        dispatch(rotateItemOnBoard(hoveredItem));
      }
    }
  }

  window.onclick = () => {
    if (contextMenu) {
      dispatch(closeContextMenu());
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
          <EquippedClosingInventoryContainer/>
          <div className={classes.BoardContainer}>
            <div style={{height: '20%'}}>
              <BackDrop/>
            </div>
            <AppBoard/>
            <div style={{flexGrow: 1}}>
              <BackDrop/>
            </div>
          </div>
          <EquippedWeaponsInventoryContainer/>
        </div>
        <object type="image/svg+xml" data={leftSparksSvg} className={classes.LeftSparksSvgContainer}/>
        <object type="image/svg+xml" data={rightSparksSvg} className={classes.RightSparksSvgContainer}/>
        {contextMenu.contextItem && !contextMenu.splitMenuOpen && (<ContextMenu contextItem={contextMenu.contextItem}
                                                                                leftOffset={contextMenu.leftOffset}
                                                                                topOffset={contextMenu.topOffset}/>)}
        <RangeComponent leftOffset={contextMenu.leftOffset}
                        topOffset={contextMenu.topOffsetTopContext}
                        contextItem={contextMenu.contextItem}
                        splitMenuOpen={contextMenu.splitMenuOpen}/>
      </div>
    </>
  );
});

export default App;
