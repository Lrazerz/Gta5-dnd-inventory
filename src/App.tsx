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
import {openOrRefreshInventory} from "./redux/actions/board";
import ContextMenu from "./components/UI/ContextMenu";
import {closeContextMenu, getContextActionsForCell} from "./redux/actions/contextMenu";
import BackDrop from "./components/layout/BackDrop";
import {setGoingToDrop} from "./redux/actions/draggedItem";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // todo check App rerender
  const {contextMenu, draggedItem: {goingToDrop, item: draggedItem}} = useSelector(state => state);
  const goingToDropRef = useRef();
  const draggedItemRef = useRef();
  goingToDropRef.current = goingToDrop;
  draggedItemRef.current = draggedItem;

  const contextActions = contextMenu.contextItem ? getContextActionsForCell(contextMenu.contextItem) : null;

  // @ts-ignore
  if(!window.openInventory || !window.refreshInventory) {
    // @ts-ignore
    window.openInventory = async (info) => {
      if(!isOpen) {
        setIsOpen(true);
      }
      await openOrRefreshInventory(info);
      return;
    };
    // @ts-ignore
    window.refreshInventory = openOrRefreshInventory;
  }

  if(!isOpen) {
    return null;
  }

  document.oncontextmenu = e => {
    e.preventDefault();
  }

  // window.ondragstart = e => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   return false;
  // }

  // todo onmousedown too and etc
  window.onclick = e => {
    if(contextMenu) {
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
    // backgroundColor: goingToDrop ? 'red' : 'transparent',
  }

  return (
    <>
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
          <EquippedWeaponsInventoryContainer />
        </div>
        <object type="image/svg+xml" data={leftSparksSvg} className={classes.LeftSparksSvgContainer} />
        <object type="image/svg+xml" data={rightSparksSvg} className={classes.RightSparksSvgContainer} />
        {/*@ts-ignore*/}
        {contextMenu.contextItem && (<ContextMenu contextActions={contextActions}
        leftOffset={contextMenu.leftOffset} topOffset={contextMenu.topOffset}/>)}
      </div>
    </>
  );
}


export default App;
