import React, {CSSProperties} from 'react';
import {useSwipeable} from "react-swipeable";
import {useSelector, useDispatch} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsChangeCosmeticsScreen.module.scss';
import {OpenedScreenEnum, ThemesEnum} from "../models/interfaces/enums";
import LeadText from "../Text/LeadText";
import SettingsChangeCosmeticsScreenList from "./SettingsChangeCosmeticsScreenList";
import {openScreen} from "../../../../redux/actions/hud/phone";

const SettingsChangeCosmeticsScreen = React.memo(() => {

  const {theme,themeImage} = useSelector(({hud: {phone}}) => phone.settings.cosmetics);
  console.log('SettingsChangeCosmeticsScreen', themeImage);

  const dispatch = useDispatch();

  //region ------------------------------ Swipe handlers ------------------------------
  const openMainScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  }
  const openSettingsScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.settings));
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedRight: () => openSettingsScreen(),
    onSwipedUp: () => openMainScreen(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  //endregion

  //region -------------------- Styles --------------------
  const screenTitleTextStyles: CSSProperties = {
    fontSize: '0.62rem',
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }
  //endregion

  return (
    <div className={classes.SettingsChangeCosmeticsScreen} {...handlers}>
      <div className={classes.ScreenTitleWrapper}>
        <LeadText styles={screenTitleTextStyles}>
          Изменить косметику телефона
        </LeadText>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.SettingsListWrapper}>
        <SettingsChangeCosmeticsScreenList theme={theme} themeImage={themeImage}/>
      </div>
    </div>
  );
});

export default SettingsChangeCosmeticsScreen;