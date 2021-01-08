import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import InventoryApp from "./inventory/InventoryApp";
import store from './redux/store';
import HudApp from "./hud/HudApp";
import {openHud} from "./utils/windowFuncs/hud/PlayerInfo/PlayerInfoInterceptors";
import {setPhoneTime, setPlayerAvatarAction} from "./redux/actions/hud/phone";
import {openDoubleInventory, openOrRefreshInventory} from "./utils/windowFuncs/inventory/inventoryWindowFuncs";

enum OpenedPartsEnum {
  inventory,
  hud,
}

export interface DefaultHudDataInterface {
  playerAvatarName: string;
  playerRankTitle: string;
  stateIndicators: {
    firstIndicator: number;
    secondIndicator: number;
    thirdIndicator: number;
  },
  network: number;
  time: string,
  buffs: [],
}

const defaultHudData: DefaultHudDataInterface = {
  playerAvatarName: "",
  playerRankTitle: "",
  stateIndicators: {
    firstIndicator: 0,
    secondIndicator: 0,
    thirdIndicator: 0
  },
  network: 0,
  time: '00:00',
  buffs: [],
}

const App = React.memo(function App() {

  const [openedPart, setOpenedPart]: [number, (newState: number) => void] = useState();
  const [hudData, setHudData]: [DefaultHudDataInterface, any] = useState(defaultHudData);

  useEffect(() => {
    return () => {
      // @ts-ignore
      window.openInventory = undefined;
      // @ts-ignore
      window.openDoubleInventory = undefined;
      // @ts-ignore
      window.openHud = undefined;
      // @ts-ignore
      window.refreshHud = undefined;
    }
  }, []);

  //region ------------------------------ Set up inventory functions on window ------------------------------
  // @ts-ignore
  if (!window.openInventory || !window.refreshInventory) {
    // @ts-ignore
    window.openInventory = async (info) => {
      if ( !(openedPart === OpenedPartsEnum.inventory) ) {
        setOpenedPart(OpenedPartsEnum.inventory);
      }
      openOrRefreshInventory(info);
      return;
    };
    // @ts-ignore
    window.refreshInventory = openOrRefreshInventory;
  }

  // @ts-ignore
  if(!window.openDoubleInventory) {
    // @ts-ignore
    window.openDoubleInventory = async (info, externalInfo, extBoardHeight) => {
      if ( !(openedPart === OpenedPartsEnum.inventory) ) {
        setOpenedPart(OpenedPartsEnum.inventory);
      }
      openDoubleInventory(info, externalInfo, extBoardHeight);
    }
  }
  //endregion

  //region ------------------------------ Set up hud functions on window ------------------------------
  // @ts-ignore
  if(!window.openHud || !window.refreshHud) {
    // @ts-ignore
    window.openHud = window.refreshHud = async (data) => {
      const hudData = openHud(data);
      setOpenedPart(OpenedPartsEnum.hud);
      // @ts-ignore
      store.dispatch(setPlayerAvatarAction(hudData.playerAvatarName));
      // @ts-ignore
      store.dispatch(setPhoneTime(hudData.time));
      // @ts-ignore
      setHudData(hudData);
    }
  }
  //endregion

  let contentBlock;

  switch(openedPart) {
    case OpenedPartsEnum.inventory: {
      contentBlock = <InventoryApp/>;
      break;
    }
    case OpenedPartsEnum.hud: {
      contentBlock = <HudApp data={hudData}/>
      break;
    }
    default: {
      contentBlock =  null;
      break;
    }
  }

  return (
    <Provider store={store}>
      {contentBlock}
    </Provider>
  );
});

export default App;