import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import InventoryApp from "./inventory/InventoryApp";
import {openDoubleInventory, openOrRefreshInventory} from "./redux/actions/inventory/board";
import store from './redux/store';
import HudApp from "./hud/HudApp";
import {openHud} from "./hud/utils/windowInterceptors/PlayerInfo/PlayerInfoInterceptors";

enum OpenedPartsEnum {
  inventory,
  hud,
}

const dummyHudData = {
  playerAvatarName: "avatar",
  playerRankTitle: "level1",
  stateIndicators: {
    firstIndicator: 28,
    secondIndicator: 10,
    thirdIndicator: 100
  },
  network: 90,
  time: '13:44',
  buffs: [
    {title: 'buff1', timeLeft: 32},
    {title: 'buff2', timeLeft: 31},
    {title: 'buff2', timeLeft: 133},
    {title: 'buff1', timeLeft: 12},
    {title: 'buff1', timeLeft: 21}
  ],
}

const defaultHudData = {
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

  const [openedPart, setOpenedPart]: [number, (newState: number) => void] = useState(null);
  const [hudData, setHudData] = useState(defaultHudData);

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
  }, [])

  //region ------------------------------ Set up inventory functions on window ------------------------------
  // @ts-ignore
  if (!window.openInventory || !window.refreshInventory) {
    // @ts-ignore
    window.openInventory = async (info) => {
      if ( !(openedPart === OpenedPartsEnum.inventory) ) {
        setOpenedPart(OpenedPartsEnum.inventory);
      }
      await openOrRefreshInventory(info);
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
      await openDoubleInventory(info, externalInfo, extBoardHeight);
    }
  }
  //endregion

  //region ------------------------------ Set up hud functions on window ------------------------------
  // @ts-ignore
  if(!window.openHud || !window.refreshHud) {
    // @ts-ignore
    window.openHud = window.refreshHud = async (data) => {
      const hudData = await openHud(data);
      setOpenedPart(OpenedPartsEnum.hud);
      // @ts-ignore
      setHudData(hudData);
    }
  }

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