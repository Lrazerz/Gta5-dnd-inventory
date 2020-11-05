import React, {useState, useEffect} from 'react';
// @ts-ignore
import classes from './styles/HudApp.module.scss';
import CarInfo from "./components/CarInfo";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import {BuffInterface} from "./models/Buff";
import {openCar, setFuel, setSpeed} from "./utils/windowInterceptors/CarInfo/CarInfoInterceptors";
import {
  setNetwork,
  setPlayerAvatar,
  setPlayerBuffs, setPlayerIndicators,
  setPlayerRank, setTime
} from "./utils/windowInterceptors/PlayerInfo/PlayerInfoInterceptors";
import Hotkeys from "./components/Hotkeys/Hotkeys";

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

const HudApp: React.FC<Props> = React.memo(function HudApp({data}) {
  const [playerInfo, setPlayerInfo]: [PlayerStateData, (any) => void] = useState(playerInfoDefaultState);
  const [carInfo, setCarInfo]: [CarInfoState, (any) => void] = useState(carInfoDefaultState);

  // need to save data from props then change own state with local functions and change state from props only
  // if new data is came (React.memo)

  useEffect(() => {
    setPlayerInfo(data);
  }, [data]);

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

  //region ------------------------------ Time and network interceptors ------------------------------
  //@ts-ignore
  if(!window.setTime) {
    //@ts-ignore
    window.setTime = (data) => {
      const time = setTime(data);
      console.log('time', time);
      setPlayerInfo(prevState => ({...prevState, time}))
    }
  }
  //@ts-ignore
  if(!window.setNetwork) {
    //@ts-ignore
    window.setNetwork = (data) => {
      const network = setNetwork(data);
      setPlayerInfo(prevState => ({...prevState, network}))
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

  const carInfoOrHotkeysBlock = carInfo.isCarOpen ? (
    <div className={classes.CarInfoWrapper}>
      <CarInfo isCarRunning={carInfo.carIndicators.isCarRunning} isDoorsOpened={carInfo.carIndicators.isDoorsOpen}
               speed={carInfo.carIndicators.speed} fuel={carInfo.carIndicators.fuel}/>
    </div>
  ) : (
    <div className={classes.HotkeysWrapper}>
      <Hotkeys/>
    </div>
  )

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
    </div>
  );
})

export default HudApp;