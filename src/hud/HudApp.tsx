import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {openCar, setFuel, setSpeed} from "../utils/windowFuncs/hud/CarInfo/CarInfoInterceptors";
import {
  setNetwork,
  setPlayerAvatar,
  setPlayerBuffs, setPlayerIndicators,
  setPlayerRank, setTime
} from "../utils/windowFuncs/hud/PlayerInfo/PlayerInfoInterceptors";
import {closePhone, openPhone, phone_openIncomingCall} from "../utils/windowFuncs/hud/phone/windowFuncs";
import {setPhoneTime, setPlayerAvatarAction} from "../redux/actions/hud/phone";
import {
  windowCloseInteractions,
  windowOpenInteractions,
} from "../utils/windowFuncs/hud/Interactions/interactionWindowFuncs";
import {SingleInteractionInterface} from "./models/InteractionInterfaces";
import {mpTrigger_interactions_closeInteractions} from "../utils/mpTriggers/hud/hudMpTriggers";
import HudAppStateless from "./HudAppStateless";
import {DefaultHudDataInterface} from "../App";
import {openCorporations} from "../utils/windowFuncs/hud/Corporations/CorporationsInterceptors";
import {corporationsOpenAction, corporationsCloseAction} from "../redux/actions/hud/corporations/corporations";
import {setAlert} from "../redux/actions/alert/alert";
import {AlertTypesEnum} from "../models/alert/enums";
// import Notification from 'rc-notification';

interface Props {
  data: DefaultHudDataInterface;
}

interface CarInfoState {
  isCarOpen: boolean;

  carIndicators: {
    // key image
    isCarRunning: boolean,
    // 2 different images
    isDoorsOpen: boolean,
    // speed text, unlimited
    speed: number,
    // canister image, from 1 to 100
    fuel: number,
  };
}

const playerInfoDefaultState: DefaultHudDataInterface = {
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
  }
}

const HudApp: React.FC<Props> = React.memo(function HudApp({data}) {

  const dispatch = useDispatch();
  //
  // setTimeout(() => {
  //   Notification.newInstance({}, notification => {
  //     notification.notice({
  //       content: 'content',
  //       style: {
  //         position: 'absolute',
  //         top: 0,
  //         left: 0
  //       }
  //     });
  //   });
  // }, 1000)

  const [playerInfo, setPlayerInfo]: [DefaultHudDataInterface, (any) => void] = useState(playerInfoDefaultState);
  const [carInfo, setCarInfo]: [CarInfoState, (any) => void] = useState(carInfoDefaultState);

  const phoneWrapperRef = useRef();

  useEffect(() => {
    setPlayerInfo(data);
  }, [data]);

  //region -------------------- Set up and clean up window functions --------------------
  useEffect(() => {
    // // todo remove
    // const timeout = setTimeout(() => {
    //   dispatch(setAlert('New ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh justo',
    //     AlertTypesEnum.error, 3000));
    // }, 2000)
    // const timeout2 = setTimeout(() => {
    //   dispatch(setAlert('New non nisl id, fringilla vehicula dolor. Vestibulum nulla purus, fermentum egetullamcorper non nisl id, fringilla vehicula dolor. Vestibulum nulla purus, fermentum eget',
    //     AlertTypesEnum.success, 1000))
    // }, 3000)
    // dispatch(setAlert('New ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh justo',
    //   AlertTypesEnum.warning, 3000));
    // // @ts-ignore
    // if(!window.phone_openIncomingCall) {
    //   // @ts-ignore
    //   window.phone_openIncomingCall = phone_openIncomingCall;
    // }

    //region ------------------------------ PlayerInfo window interceptors ------------------------------
    //@ts-ignore
    if(!window.setPlayerRank) {
      //@ts-ignore
      window.setPlayerRank = (data) => {
        const playerRankTitle = setPlayerRank(data);
        setPlayerInfo(prevState => ({...prevState, playerRankTitle}));
      }
    }

    //@ts-ignore
    if(!window.setPlayerAvatar) {
      //@ts-ignore
      window.setPlayerAvatar = (data) => {
        const playerAvatarName = setPlayerAvatar(data);
        dispatch(setPlayerAvatarAction(playerAvatarName));
        setPlayerInfo(prevState => ({...prevState, playerAvatarName}));
      }
    }

    //@ts-ignore
    if(!window.setPlayerBuffs) {
      //@ts-ignore
      window.setPlayerBuffs = (data) => {
        const buffs = setPlayerBuffs(data);
        setPlayerInfo(prevState => ({...prevState, buffs}));
      }
    }

    //@ts-ignore
    if(!window.setPlayerIndicators) {
      //@ts-ignore
      window.setPlayerIndicators = (data) => {
        const indicators = setPlayerIndicators(data);
        setPlayerInfo(prevState => ({...prevState, stateIndicators: indicators}));
      }
    }
    //endregion

    //region ------------------------------ Time and network interceptors ------------------------------
    //@ts-ignore
    if(!window.setTime) {
      //@ts-ignore
      window.setTime = (data) => {
        const time = setTime(data);
        dispatch(setPhoneTime(time));
        setPlayerInfo(prevState => ({...prevState, time}))
      }
    }
    //@ts-ignore
    if(!window.setNetwork) {
      //@ts-ignore
      window.setNetwork = (data) => {
        const network = setNetwork(data);
        setPlayerInfo(prevState => ({...prevState, network}));
      }
    }
    //endregion

    //region ------------------------------ Car info interceptors ------------------------------
    //@ts-ignore
    if(!window.openCar) {
      //@ts-ignore
      window.openCar = (data) => {
        const carIndicators = openCar(data);
        setCarInfo({isCarOpen: true, carIndicators});
      }
    }

    //@ts-ignore
    if(!window.closeCar) {
      //@ts-ignore
      window.closeCar = () => {
        setCarInfo(carInfoDefaultState);
      }
    }

    //@ts-ignore
    if(!window.setSpeed) {
      //@ts-ignore
      window.setSpeed = (data) => {
        const speed = setSpeed(data);
        setCarInfo(prevState => ({...prevState, carIndicators: {...prevState.carIndicators, speed}}));
      }
    }

    //@ts-ignore
    if(!window.setFuel) {
      //@ts-ignore
      window.setFuel = (data) => {
        const fuel = setFuel(data);
        setCarInfo(prevState => ({...prevState, carIndicators: {...prevState.carIndicators, fuel}}));
      }
    }
    //endregion

    //region -------------------- Phone interceptors --------------------
    // @ts-ignore
    if(!window.openPhone) {
      // @ts-ignore
      window.openPhone = openPhone;
    }
    // @ts-ignore
    if(!window.closePhone) {
      // @ts-ignore
      window.closePhone = closePhone;
    }
    //endregion

    //region -------------------- Interactions interceptors --------------------
    // @ts-ignore
    if(!window.openInteractions) {
      // @ts-ignore
      window.openInteractions = (jsonData) => {
        const parsedData = JSON.parse(jsonData).$values;
        const lowerCaseValues: SingleInteractionInterface[] = parsedData.map(value => {
          return {
            name: value.Name,
            enabled: value.Enabled,
          }
        });
        windowOpenInteractions(lowerCaseValues);
      }
    }
    // @ts-ignore
    if(!window.closeInteractions) {
      // @ts-ignore
      window.closeInteractions = windowCloseInteractions;
    }
    //endregion

    //region -------------------- Corporations interceptors --------------------
    // @ts-ignore
    if(!window.openCorporations) {
      // @ts-ignore
      window.openCorporations = (mainScreenData) => {
        const data = openCorporations(mainScreenData);
        dispatch(corporationsOpenAction());
      }
    }

    // @ts-ignore
    if(!window.closeCorporations) {
      // @ts-ignore
      window.closeCorporations = () => {
        dispatch(corporationsCloseAction());
      }
    }
    //endregion

    return () => {
      // clearTimeout(timeout)
      // clearTimeout(timeout2)
      //region -------------------- Phone window functions --------------------
      // @ts-ignore
      window.openPhone = undefined;
      // @ts-ignore
      window.closePhone = undefined;
      //endregion

      // @ts-ignore
      window.phone_openIncomingCall = undefined;
      // @ts-ignore
      window.setPlayerRank = undefined;
      // @ts-ignore
      window.setPlayerAvatar = undefined;
      // @ts-ignore
      window.setPlayerBuffs = undefined;
      // @ts-ignore
      window.setPlayerIndicators = undefined;
      // @ts-ignore
      window.setTime = undefined;
      // @ts-ignore
      window.setNetwork = undefined;
      // @ts-ignore
      window.openCar = undefined;
      // @ts-ignore
      window.closeCar = undefined;
      // @ts-ignore
      window.setSpeed = undefined;
      // @ts-ignore
      window.setFuel = undefined;

      //region -------------------- Interactions window functions --------------------
      // @ts-ignore
      window.openInteractions = undefined;
      // @ts-ignore
      window.closeInteractions = undefined;
      //endregion

      //region -------------------- Corporations window functions --------------------
      // @ts-ignore
      window.openCorporations = undefined;
      // @ts-ignore
      window.closeCorporations = undefined;
      //endregion
    }
  }, []);
  //endregion

  //region -------------------- Set up and clean up dimensions --------------------
  useEffect(() => {
    if(phoneWrapperRef.current) {
      // @ts-ignore
      const width = window.getComputedStyle(phoneWrapperRef.current).width;
      // @ts-ignore
      phoneWrapperRef.current.style.height = width;
    }
  }, [phoneWrapperRef.current]);
  //endregion

  const interactionsCloseHandler = () => {
    try {
      mpTrigger_interactions_closeInteractions();
    } catch (e) {}
  }

  return <HudAppStateless playerState={playerInfo} carInfo={carInfo} onInteractionsClose={interactionsCloseHandler} />

})

export default HudApp;

