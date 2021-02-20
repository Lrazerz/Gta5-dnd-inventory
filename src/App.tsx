import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import InventoryApp from './inventory/InventoryApp';
import store from './redux/store';
import HudApp from './hud/HudApp';
import { openHud } from './utils/windowFuncs/hud/PlayerInfo/PlayerInfoInterceptors';
import { setPhoneTime, setPlayerAvatarAction } from './redux/actions/hud/phone';
import {
  window_openOrRefreshInventory,
  window_openDoubleInventory,
} from './utils/windowFuncs/inventory/inventoryWindowFuncs';
import classes from './styles/App.module.scss';
import Alerts from './alert/Alerts';
import { window_setAlert } from './utils/windowFuncs/alert/alertWindowFuncs';
import { setAlert } from './redux/actions/alert/alert';
import { DefaultHudDataInterface } from './models/hud/hudInterfaces';

enum OpenedPartsEnum {
  none,
  inventory,
  hud,
}

const defaultHudData: DefaultHudDataInterface = {
  playerAvatarName: '',
  playerRankTitle: '',
  stateIndicators: {
    firstIndicator: 0,
    secondIndicator: 0,
    thirdIndicator: 0,
  },
  network: 0,
  time: '00:00',
  buffs: [],
};

const App = React.memo(function App() {
  const dispatch = useDispatch();

  const alertsContainerRef = useRef();

  useEffect(() => {
    if (alertsContainerRef.current) {
      // @ts-ignore
      const width: string = window.getComputedStyle(alertsContainerRef.current).width;
      const widthNumber: number = +width.match(/(\.|\d)+/)[0];
      // @ts-ignore
      alertsContainerRef.current.style.height = widthNumber * 0.8 + 'px';
    }
  }, [alertsContainerRef.current]);

  const [openedPart, setOpenedPart]: [number, (newState: number) => void] = useState(null);
  const [hudData, setHudData]: [DefaultHudDataInterface, any] = useState(defaultHudData);

  useEffect(() => {
    //region ------------------------------ Set up inventory functions on window ------------------------------
    // @ts-ignore
    if (!window.openInventory || !window.refreshInventory) {
      // @ts-ignore
      window.openInventory = async (info) => {
        if (!(openedPart === OpenedPartsEnum.inventory)) {
          setOpenedPart(OpenedPartsEnum.inventory);
        }
        window_openOrRefreshInventory(info);
        return;
      };
      // @ts-ignore
      window.refreshInventory = window_openOrRefreshInventory;
    }

    // @ts-ignore
    if (!window.openDoubleInventory) {
      // @ts-ignore
      window.openDoubleInventory = async (info, externalInfo, extBoardHeight) => {
        if (!(openedPart === OpenedPartsEnum.inventory)) {
          setOpenedPart(OpenedPartsEnum.inventory);
        }
        window_openDoubleInventory(info, externalInfo, extBoardHeight);
      };
    }
    //endregion

    // @ts-ignore
    if (!window.closeInventory) {
    }
    //endregion

    //region ------------------------------ Set up hud functions on window ------------------------------
    // @ts-ignore
    if (!window.openHud || !window.refreshHud) {
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
      };
    }
    //endregion

    //region ------------------------------ Alert functions ------------------------------
    // @ts-ignore
    if (!window.setAlert) {
      // @ts-ignore
      window.setAlert = (jsonData: string) => {
        const parsedData = window_setAlert(jsonData);
        dispatch(setAlert(parsedData.message, parsedData.type, parsedData.duration));
      };
    }
    //endregion

    return () => {
      // @ts-ignore
      window.openInventory = undefined;
      // @ts-ignore
      window.openDoubleInventory = undefined;
      // @ts-ignore
      window.openHud = undefined;
      // @ts-ignore
      window.refreshHud = undefined;
    };
  }, []);

  let contentBlock;

  switch (openedPart) {
    case OpenedPartsEnum.inventory: {
      contentBlock = <InventoryApp />;
      break;
    }
    case OpenedPartsEnum.hud: {
      contentBlock = <HudApp data={hudData} />;
      break;
    }
    default: {
      contentBlock = null;
      break;
    }
  }

  return (
    <div className={classes.App}>
      {contentBlock}
      <div ref={alertsContainerRef} className={classes.AlertsWrapper}>
        <Alerts />
      </div>
    </div>
  );
});

export default App;
