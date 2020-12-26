import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// @ts-ignore
import classes from '../styles/hud/HudApp.module.scss';
import CarInfo from "./components/CarInfo";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import {BuffInterface} from "./models/Buff";
import {openCar, setFuel, setSpeed} from "../utils/windowFuncs/hud/CarInfo/CarInfoInterceptors";
import {
  setNetwork,
  setPlayerAvatar,
  setPlayerBuffs, setPlayerIndicators,
  setPlayerRank, setTime
} from "../utils/windowFuncs/hud/PlayerInfo/PlayerInfoInterceptors";
import Hotkeys from "./components/Hotkeys/Hotkeys";
import Phone from "./components/Phone/Phone";
import {closePhone, openPhone, phone_openIncomingCall} from "../utils/windowFuncs/hud/phone/windowFuncs";
import {setPhoneTime, setPlayerAvatarAction} from "../redux/actions/hud/phone";
import {
  windowCloseInteractions,
  windowOpenInteractions,
} from "../utils/windowFuncs/hud/Interactions/interactionWindowFuncs";
import InteractionsContainer from "./components/Interactions/InteractionsContainer";
import {SingleInteractionInterface} from "./components/Interactions/models/interfaces/interactionInterfaces";
import {mpTrigger_interactions_closeInteractions} from "../utils/mpTriggers/hud/hudMpTriggers";

//region ------------------------------ Props, defaults, state ------------------------------
interface PlayerStateData {
  playerAvatarName: string,
  playerRankTitle: string,
  stateIndicators: {
    firstIndicator: number,
    secondIndicator: number,
    thirdIndicator: number
  };
  network: number,
  time: string,
  buffs: BuffInterface[],
}

interface Props {
  data: PlayerStateData;
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

const playerInfoDefaultState: PlayerStateData = {
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
//endregion

const HudApp: React.FC<Props> = React.memo(function HudApp({data}) {
  const [playerInfo, setPlayerInfo]: [PlayerStateData, (any) => void] = useState(playerInfoDefaultState);
  const [carInfo, setCarInfo]: [CarInfoState, (any) => void] = useState(carInfoDefaultState);

  const dispatch = useDispatch();

  const {isPhoneOpenedRedux, isInteractionsOpenedRedux} = useSelector(({hud: {phone, interactions}}) =>
    ({isPhoneOpenedRedux: phone.isPhoneOpened, isInteractionsOpenedRedux: interactions.isOpened}));

  const phoneWrapperRef = useRef();

  useEffect(() => {
    setPlayerInfo(data);
  }, [data]);

  //region -------------------- Set up and clean up window functions --------------------
  useEffect(() => {
    // @ts-ignore
    if(!window.phone_openIncomingCall) {
      // @ts-ignore
      window.phone_openIncomingCall = phone_openIncomingCall;
    }

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

    return () => {
      //region -------------------- Phone window functions --------------------
      // @ts-ignore
      window.openPhone = undefined;
      // @ts-ignore
      window.closePhone = undefined;
      //endregion

      //region -------------------- Interactions window functions --------------------
      // @ts-ignore
      window.openInteractions = undefined;
      // @ts-ignore
      window.closeInteractions = undefined;
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
      // @ts-ignore
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

  const carInfoOrHotkeysBlock = carInfo.isCarOpen ? (
    <div className={classes.CarInfoWrapper}>
      <CarInfo isCarRunning={carInfo.carIndicators.isCarRunning} isDoorsOpened={carInfo.carIndicators.isDoorsOpen}
               speed={carInfo.carIndicators.speed} fuel={carInfo.carIndicators.fuel}/>
    </div>
  ) : (
    <div className={classes.HotkeysWrapper}>
      <Hotkeys/>
    </div>
  );

  return (
      <div className={classes.HudApp}>
        <div className={classes.TopOfTheScreenWrapper}>
          <div/>
          <div className={classes.PlayerInfoWrapper}>
            <PlayerInfo data={playerInfo}/>
          </div>
        </div>
        <div className={classes.BottomOfTheScreenWrapper}>
          {carInfoOrHotkeysBlock}
        </div>
        <div ref={phoneWrapperRef} className={classes.PhoneWrapper}>
          {isPhoneOpenedRedux && <Phone/>}
        </div>
        {isInteractionsOpenedRedux && (
          <div className={classes.InteractionsWrapper} onClick={() => {interactionsCloseHandler()}}>
            <InteractionsContainer/>
          </div>
        )}
      </div>
  );
})

export default HudApp;

