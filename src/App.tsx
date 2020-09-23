import React, {useState} from 'react';
import AppBoard from "./containers/AppBoard/AppBoard";
// @ts-ignore
import classes from './styles/App.module.scss';
import EquippedClosingInventoryContainer
  from "./containers/equippedClosingInventory/EquippedClosingInventoryContainer";
import EquippedWeaponsInventoryContainer from "./containers/equippedWeaponsInventory/EquippedWeaponsInventoryContainer";
import SecondaryText from "./components/layout/SecondaryText";
// @ts-ignore
import leftSparksSvg from "./assets/images/UI/left-sparks.svg";
// @ts-ignore
import rightSparksSvg from "./assets/images/UI/right-sparks.svg";
import {openOrRefreshInventory} from "./redux/actions/board";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // @ts-ignore
  if(!window.openInventory || !window.refreshInventory) {
    // @ts-ignore
    window.openInventory = async (info) => { setIsOpen(true); await openOrRefreshInventory(info); };
    // @ts-ignore
    window.refreshInventory = openOrRefreshInventory;
  }

  if(!isOpen) {
    return null;
  }

  return (
    <div className={classes.AppContainer}>
      <div className={classes.TopTooltip}>
        <SecondaryText styles={{fontWeight: 600, color: '#fcfdff', width: 'auto'}}>
          Нажмите ESC для выхода
        </SecondaryText>
      </div>
      <div className={classes.App}>
       <EquippedClosingInventoryContainer/>
        <div className={classes.BoardContainer}>
          <AppBoard/>
        </div>
        <EquippedWeaponsInventoryContainer />
      </div>
      <object type="image/svg+xml" data={leftSparksSvg} className={classes.LeftSparksSvgContainer} />
      <object type="image/svg+xml" data={rightSparksSvg} className={classes.RightSparksSvgContainer} />
    </div>
  );
}


export default App;
