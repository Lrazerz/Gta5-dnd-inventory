import React from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import AppBoard from "./containers/AppBoard/AppBoard";
import Alert from "./components/layout/Alert/Alert";
// @ts-ignore
import classes from './styles/App.module.scss';
import EquippedClosingInventoryContainer
  from "./containers/equippedClosingInventory/EquippedClosingInventoryContainer";
import EquippedWeaponsInventoryContainer from "./containers/equippedWeaponsInventory/EquippedWeaponsInventoryContainer";
import SecondaryText from "./components/layout/SecondaryText";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.TopTooltip}>
        <SecondaryText styles={{fontWeight: 600, color: '#fcfdff', width: 'auto'}}>
          Нажмите ESC для выхода
        </SecondaryText>
      </div>
      <div className={classes.App}>
        <Alert/>
        <EquippedClosingInventoryContainer/>
        <div className={classes.BoardContainer}>
          <AppBoard/>
        </div>
        <EquippedWeaponsInventoryContainer />
      </div>
    </DndProvider>
  );
}


export default App;
