import React, {CSSProperties} from 'react';
import {useSwipeable} from "react-swipeable";
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/SettingsScreen/SettingsScreen.module.scss';
import LeadText from "../Text/LeadText";
import SettingsList from "./SettingsList";
import {OpenedScreenEnum, ThemesEnum} from "../models/interfaces/enums";
import {openScreen} from "../../../redux/actions/phone";

const SettingsScreen = React.memo(() => {

  const dispatch = useDispatch();

  const theme = useSelector(({phone}) => phone.settings.cosmetics.theme);

  //region ------------------------------ Swipe handlers ------------------------------
  const swipeHandler = (toLeft: boolean) => {
    console.log(toLeft ? 'left' : 'right');

    if(toLeft) {

    }
    else {
      dispatch(openScreen(OpenedScreenEnum.mainScreen));
    }
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedLeft: () => swipeHandler(true),
    onSwipedRight: () => swipeHandler(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
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
      <div className={classes.HorizontalLine} style={horizontalLineStyles}></div>
      <div className={classes.SettingsListWrapper}>
        <SettingsList/>
      </div>
    </div>
  );
});

export default SettingsScreen;