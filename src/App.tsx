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

  const alertsContainerRef: React.Ref<HTMLDivElement> = useRef();

  useEffect(() => {
    if (alertsContainerRef.current) {
      const width: string = window.getComputedStyle(alertsContainerRef.current).width;
      const widthNumber: number = +width.match(/(\.|\d)+/)[0];
      alertsContainerRef.current.style.height = widthNumber * 0.8 + 'px';
    }
  }, [alertsContainerRef.current]);

  const [openedPart, setOpenedPart]: [number, (newState: number) => void] = useState(OpenedPartsEnum.none);
  const [hudData, setHudData]: [DefaultHudDataInterface, any] = useState(defaultHudData);

  const openedPartRef: { current: OpenedPartsEnum } = useRef();
  openedPartRef.current = openedPart;

  const closeInventoryHandler = () => {
    if (openedPartRef.current === OpenedPartsEnum.inventory) {
      setOpenedPart(OpenedPartsEnum.none);
    }
  };

  const closeHudHandler = () => {
    if (openedPartRef.current === OpenedPartsEnum.hud) {
      setOpenedPart(OpenedPartsEnum.none);
    }
  };

  useEffect(() => {
    // Set up inventory functions on window
    if (!window.openInventory || !window.refreshInventory) {
      window.openInventory = async (info) => {
        if (!(openedPart === OpenedPartsEnum.inventory)) {
          setOpenedPart(OpenedPartsEnum.inventory);
        }
        window_openOrRefreshInventory(info);
        return;
      };
      window.refreshInventory = window_openOrRefreshInventory;
    }

    if (!window.openDoubleInventory) {
      window.openDoubleInventory = async (info, externalInfo, extBoardHeight) => {
        if (!(openedPart === OpenedPartsEnum.inventory)) {
          setOpenedPart(OpenedPartsEnum.inventory);
        }
        window_openDoubleInventory(info, externalInfo, extBoardHeight);
      };
    }

    if (!window.closeInventory) {
      window.closeInventory = closeInventoryHandler;
    }

    // Set up hud functions on window
    if (!window.openHud || !window.refreshHud) {
      window.openHud = window.refreshHud = async (data) => {
        const hudData = openHud(data);
        setOpenedPart(OpenedPartsEnum.hud);
        store.dispatch(setPlayerAvatarAction(hudData.playerAvatarName));
        store.dispatch(setPhoneTime(hudData.time));
        setHudData(hudData);
      };
    }

    if (!window.closeHud) {
      window.closeHud = closeHudHandler;
    }

    // Alert functions
    if (!window.setAlert) {
      window.setAlert = (jsonData: string) => {
        const parsedData = window_setAlert(jsonData);
        dispatch(setAlert(parsedData.message, parsedData.type, parsedData.duration));
      };
    }

    return () => {
      window.openInventory = undefined;
      window.refreshInventory = undefined;
      window.openDoubleInventory = undefined;
      window.closeInventory = undefined;

      window.openHud = undefined;
      window.refreshHud = undefined;
      window.closeHud = undefined;

      window.setAlert = undefined;
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
