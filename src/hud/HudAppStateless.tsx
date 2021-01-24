import React, {useState, useEffect, useRef, CSSProperties} from 'react';
import {useSelector} from 'react-redux';
// @ts-ignore
import classes from '../styles/hud/HudApp.module.scss';
import CarInfo from "./components/CarInfo";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Hotkeys from "./components/Hotkeys/Hotkeys";
import Phone from "./components/Phone/Phone";
import InteractionsContainer from "./components/Interactions/InteractionsContainer";
import Corporations from "./components/Corporations/Corporations";

//region ------------------------------ Props, defaults, state ------------------------------
interface Props {
  playerState: any;
  carInfo: any;
  onInteractionsClose: () => void;
}

const HudAppStateless: React.FC<Props> = React.memo(function HudApp({playerState, carInfo, onInteractionsClose}) {

  const [playerInfoWrapperHeight, setPlayerInfoWrapperHeight]: [number, any] = useState(0);
  const [carInfoWrapperHeight, setCarInfoWrapperHeight]: [number, any] = useState(0);
  const [hotkeyWrapperHeight, setHotkeyWrapperHeight]: [number, any] = useState(0);

  const phoneWrapperRef = useRef();

  const isPhoneOpenedRedux = useSelector(state => state.hud.phone.isPhoneOpened);
  const isInteractionsOpenedRedux = useSelector(state => state.hud.interactions.isOpened);
  const isCorporationsOpenedRedux = useSelector(state => state.hud.corporations.corporations.isOpened);

  //region -------------------- Set up and clean up dimensions --------------------
  useEffect(() => {
    if (phoneWrapperRef.current) {
      // @ts-ignore
      const width = window.getComputedStyle(phoneWrapperRef.current).width;
      // @ts-ignore
      phoneWrapperRef.current.style.height = width;
    }
  }, [phoneWrapperRef.current]);

  //need to handle PlayerInfoWrapper and CarInfoWrapper the same way
  if (playerInfoWrapperHeight === 0) {
    setPlayerInfoWrapperHeight(window.innerWidth * 0.1719 * 0.7527);
  }
  if (carInfoWrapperHeight === 0) {
    setCarInfoWrapperHeight(window.innerWidth * 0.1745 * 0.5398);
  }
  if (hotkeyWrapperHeight === 0) {
    setHotkeyWrapperHeight(window.innerWidth * 0.263 * 0.2178);
  }
  //endregion

  //region -------------------- Styles --------------------
  const playerInfoWrapperStyles: CSSProperties = {
    height: playerInfoWrapperHeight + 'px',
  }

  const carInfoWrapperStyles: CSSProperties = {
    height: carInfoWrapperHeight + 'px',
  }

  const hotkeysWrapperStyles: CSSProperties = {
    height: hotkeyWrapperHeight + 'px',
  }
  //endregion

  const carInfoOrHotkeysBlock = carInfo.isCarOpen ? (
    <div style={carInfoWrapperStyles} className={classes.CarInfoWrapper}>
      <CarInfo isCarRunning={carInfo.carIndicators.isCarRunning} isDoorsOpened={carInfo.carIndicators.isDoorsOpen}
               speed={carInfo.carIndicators.speed} fuel={carInfo.carIndicators.fuel}/>
    </div>
  ) : (
    <div style={hotkeysWrapperStyles} className={classes.HotkeysWrapper}>
      <Hotkeys/>
    </div>
  );

  return (
    <div className={classes.HudApp}>
      <div className={classes.TopOfTheScreenWrapper}>
        <div/>
        <div style={playerInfoWrapperStyles} className={classes.PlayerInfoWrapper}>
          <PlayerInfo data={playerState}/>
        </div>
      </div>
      <div className={classes.BottomOfTheScreenWrapper}>
        {carInfoOrHotkeysBlock}
      </div>
      <div ref={phoneWrapperRef} className={classes.PhoneWrapper}>
        {isPhoneOpenedRedux && <Phone/>}
      </div>
      {isInteractionsOpenedRedux && (
        <div className={classes.InteractionsWrapper} onClick={onInteractionsClose}>
          <InteractionsContainer/>
        </div>
      )}
      {isCorporationsOpenedRedux && (
        <div className={classes.InteractionsWrapper}>
          <Corporations/>
        </div>
      )}
    </div>
  );
})

export default HudAppStateless;