import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openCar, setFuel, setSpeed } from '../utils/windowFuncs/hud/CarInfo/CarInfoInterceptors';
import {
  setNetwork,
  setPlayerAvatar,
  setPlayerBuffs,
  setPlayerIndicators,
  setPlayerRank,
  setTime,
} from '../utils/windowFuncs/hud/PlayerInfo/PlayerInfoInterceptors';
import { closePhone, openPhone } from '../utils/windowFuncs/hud/phone/phoneInterceptors';
import { setPhoneTime, setPlayerAvatarAction } from '../redux/actions/hud/phone';
import {
  windowCloseInteractions,
  windowOpenInteractions,
} from '../utils/windowFuncs/hud/Interactions/interactionsInterceptors';
import { SingleInteractionInterface } from '../models/hud/InteractionInterfaces';
import { mpTrigger_interactions_closeInteractions } from '../utils/mpTriggers/hud/interactions/interactionsTriggers';
import HudAppStateless from './HudAppStateless';
import { openCorporations } from '../utils/windowFuncs/hud/Corporations/CorporationsInterceptors';
import { corporationsOpenAction, corporationsCloseAction } from '../redux/actions/hud/corporations/corporations';
import { DefaultHudDataInterface } from '../models/hud/hudInterfaces';

interface Props {
  data: DefaultHudDataInterface;
}

export interface CarInfoState {
  isCarOpen: boolean;

  carIndicators: {
    // key image
    isCarRunning: boolean;
    // 2 different images
    isDoorsOpen: boolean;
    // speed text, unlimited
    speed: number;
    // canister image, from 1 to 100
    fuel: number;
  };
}

const playerInfoDefaultState: DefaultHudDataInterface = {
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

const carInfoDefaultState = {
  isCarOpen: false,
  carIndicators: {
    // key image
    isCarRunning: false,
    // 2 different images
    isDoorsOpen: false,
    // speed text, unlimited
    speed: 0,
    // canister image, from 1 to 100
    fuel: 0,
  },
};

const HudApp: React.FC<Props> = React.memo(function HudApp({ data }) {
  const dispatch = useDispatch();

  const [playerInfo, setPlayerInfo]: [DefaultHudDataInterface, (any) => void] = useState(playerInfoDefaultState);
  const [carInfo, setCarInfo]: [CarInfoState, (any) => void] = useState(carInfoDefaultState);

  const phoneWrapperRef: React.Ref<HTMLDivElement> = useRef();

  useEffect(() => {
    setPlayerInfo(data);
  }, [data]);

  useEffect(() => {
    //  PlayerInfo window interceptors

    if (!window.setPlayerRank) {
      window.setPlayerRank = (data) => {
        const playerRankTitle = setPlayerRank(data);
        setPlayerInfo((prevState) => ({ ...prevState, playerRankTitle }));
      };
    }

    if (!window.setPlayerAvatar) {
      window.setPlayerAvatar = (data) => {
        const playerAvatarName = setPlayerAvatar(data);
        dispatch(setPlayerAvatarAction(playerAvatarName));
        setPlayerInfo((prevState) => ({ ...prevState, playerAvatarName }));
      };
    }

    if (!window.setPlayerBuffs) {
      window.setPlayerBuffs = (data) => {
        const buffs = setPlayerBuffs(data);
        setPlayerInfo((prevState) => ({ ...prevState, buffs }));
      };
    }

    if (!window.setPlayerIndicators) {
      window.setPlayerIndicators = (data) => {
        const indicators = setPlayerIndicators(data);
        setPlayerInfo((prevState) => ({
          ...prevState,
          stateIndicators: indicators,
        }));
      };
    }

    // Time and network interceptors
    if (!window.setTime) {
      window.setTime = (data) => {
        const time = setTime(data);
        dispatch(setPhoneTime(time));
        setPlayerInfo((prevState) => ({ ...prevState, time }));
      };
    }
    if (!window.setNetwork) {
      window.setNetwork = (data) => {
        const network = setNetwork(data);
        setPlayerInfo((prevState) => ({ ...prevState, network }));
      };
    }

    // Car info interceptors
    if (!window.openCar) {
      window.openCar = (data) => {
        const carIndicators = openCar(data);
        setCarInfo({ isCarOpen: true, carIndicators });
      };
    }

    if (!window.closeCar) {
      window.closeCar = () => {
        setCarInfo(carInfoDefaultState);
      };
    }

    if (!window.setSpeed) {
      window.setSpeed = (data) => {
        const speed = setSpeed(data);
        setCarInfo((prevState) => ({
          ...prevState,
          carIndicators: { ...prevState.carIndicators, speed },
        }));
      };
    }

    if (!window.setFuel) {
      window.setFuel = (data) => {
        const fuel = setFuel(data);
        setCarInfo((prevState) => ({
          ...prevState,
          carIndicators: { ...prevState.carIndicators, fuel },
        }));
      };
    }

    // Phone interceptors
    if (!window.openPhone) {
      window.openPhone = openPhone;
    }
    if (!window.closePhone) {
      window.closePhone = closePhone;
    }

    if (!window.openInteractions) {
      window.openInteractions = (jsonData) => {
        console.log('jsonData', jsonData);
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData', parsedData);
        const lowerCaseValues: SingleInteractionInterface[] = parsedData.map((value) => {
          return {
            name: value.Name,
            enabled: value.Enabled,
          };
        });
        console.log('lowerCaseValues', lowerCaseValues);
        windowOpenInteractions(lowerCaseValues);
      };
    }

    if (!window.closeInteractions) {
      window.closeInteractions = windowCloseInteractions;
    }

    if (!window.openCorporations) {
      window.openCorporations = (mainScreenData) => {
        const data = openCorporations(mainScreenData);
        dispatch(corporationsOpenAction());
      };
    }

    if (!window.closeCorporations) {
      window.closeCorporations = () => {
        dispatch(corporationsCloseAction());
      };
    }

    return () => {
      window.openPhone = undefined;
      window.closePhone = undefined;

      window.setPlayerRank = undefined;
      window.setPlayerAvatar = undefined;
      window.setPlayerBuffs = undefined;
      window.setPlayerIndicators = undefined;
      window.setTime = undefined;
      window.setNetwork = undefined;
      window.openCar = undefined;
      window.closeCar = undefined;
      window.setSpeed = undefined;
      window.setFuel = undefined;

      window.openInteractions = undefined;
      window.closeInteractions = undefined;

      window.openCorporations = undefined;
      window.closeCorporations = undefined;
    };
  }, []);
  //endregion

  // Set up and clean up dimensions
  useEffect(() => {
    if (phoneWrapperRef.current) {
      const width = window.getComputedStyle(phoneWrapperRef.current).width;
      phoneWrapperRef.current.style.height = width;
    }
  }, [phoneWrapperRef.current]);

  const interactionsCloseHandler = () => {
    try {
      mpTrigger_interactions_closeInteractions();
    } catch (e) {}
  };

  return <HudAppStateless playerState={playerInfo} carInfo={carInfo} onInteractionsClose={interactionsCloseHandler} />;
});

export default HudApp;
