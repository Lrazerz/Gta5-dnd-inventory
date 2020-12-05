import React, {useEffect, CSSProperties} from 'react';
import {useSwipeable} from "react-swipeable";
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsScreen.module.scss';
import LeadText from "../Text/LeadText";
import SettingsList from "./SettingsList";
import {OpenedScreenEnum, ThemesEnum} from "../models/interfaces/enums";
import {openScreen} from "../../../../redux/actions/hud/phone";

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
  const swipeHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedRight: () => swipeHandler(),
    onSwipedUp: () => swipeHandler(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  //endregion

  const screenTitleTextStyles: CSSProperties = {
    fontSize: '0.62rem',
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