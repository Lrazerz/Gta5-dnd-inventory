import React, {useEffect, CSSProperties} from 'react';
import {useSwipeable} from "react-swipeable";
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsScreen.module.scss';
import LeadText from "../Text/LeadText";
import SettingsList from "./SettingsList";
import {OpenedScreenEnum, ThemesEnum} from "../models/interfaces/enums";
import {openScreen, setSettings} from "../../../../redux/actions/hud/phone";
import {phone_openSettings} from "../../../../utils/windowFuncs/windowFuncs";
import {mpTrigger_phone_openSettings} from "../../../../utils/mpTriggers/hud/hudMpTriggers";

const SettingsScreen = React.memo(() => {

  const dispatch = useDispatch();

  const theme = useSelector(({hud: {phone}}) => phone.settings.cosmetics.theme);

  useEffect(() => {
    return () => {
      console.log('nullable');
      // @ts-ignore
      window.phone_openSettings = null;
    }
  }, []);

  //region ------------------------------ Swipe handlers ------------------------------
  const swipeHandler = (toLeft: boolean) => {
    console.log(toLeft ? 'left' : 'right');
    if(toLeft) {}
    else {
      dispatch(openScreen(OpenedScreenEnum.mainScreen));
    }
  }

  const swipeUpHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedLeft: () => swipeHandler(true),
    onSwipedRight: () => swipeHandler(false),
    onSwipedUp: () => swipeUpHandler(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  //endregion

  const screenTitleTextStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  return (
    <div className={classes.SettingsScreen} {...handlers}>
      <div className={classes.ScreenTitleWrapper}>
        <LeadText styles={screenTitleTextStyles}>
          Настройки
        </LeadText>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.SettingsListWrapper}>
        <SettingsList/>
      </div>
    </div>
  );
});

export default SettingsScreen;