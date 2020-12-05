import React, {CSSProperties, useState, useEffect} from 'react';
import {useSwipeable} from "react-swipeable";
import {useSelector, useDispatch} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsChangeRingtoneScreen.module.scss';
import {OpenedScreenEnum, RingtonesArray, ThemesEnum} from "../models/interfaces/enums";
import LeadText from "../Text/LeadText";
import {openScreen, setRingtone} from "../../../../redux/actions/hud/phone";
import ringtoneImg from "../../../../assets/hud/images/components/Phone/components/SettingsList/ringtone.svg";
import phoneTheme from "../consts/phoneTheme";

// blur?
const SettingsChangeRingtoneScreen = React.memo(() => {

  const ringtoneFromRedux = useSelector(({hud: {phone}}) => phone.settings.ringtone);
  const [selectedRingtone, setSelectedRingtone]: [string, any] = useState();
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  useEffect(() => {
    setSelectedRingtone(ringtoneFromRedux);
  }, [ringtoneFromRedux]);

  const {theme} = useSelector(({hud: {phone}}) => phone.settings.cosmetics);

  const dispatch = useDispatch();

  //region ------------------------------ Swipe handlers ------------------------------
  const openSettingsScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.settings));
  }
  const openMainScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedRight: () => openSettingsScreen(),
    onSwipedUp: () => openMainScreen(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  //endregion

  //region -------------------- Click Handlers --------------------
  const openDropDownHandler = (e) => {
    e.stopPropagation();
    setIsDropDownOpened(true);
  }

  const closeDropDownHandler = () => {
    setIsDropDownOpened(false);
  }

  const setSelectedRingtoneHandler = (e, ringtone: string) => {
    e.stopPropagation();
    setIsDropDownOpened(false);
    dispatch(setRingtone(ringtone));
    setSelectedRingtone(ringtone);
  }
  //endregion

  //region -------------------- Styles --------------------
  const blurScreenStyles: CSSProperties = {
    display: isDropDownOpened ? 'block' : 'none',
    width: '100%',
    height: '100%',
    position: "absolute",
    // backgroundColor: isDropDownOpened ? 'rgba(255,255,255,1 )' : 'transparent',
    backdropFilter: isDropDownOpened ? 'blur(0.3rem)' : 'none',
  }

  const screenTitleTextStyles: CSSProperties = {
    fontSize: '0.62rem',
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  const ringtoneHorizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
    height: '1%',
  }

  const settingTitleStyles: CSSProperties = {
    fontSize: '0.56rem',
    fontWeight: 400,
  }

  const selectedRingtoneTextStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.darkPurple,
    width: '100%',
    fontSize: '0.57rem',
    lineHeight: '0.7rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

  const _dropDownWhiteTheme = 'linear-gradient(180deg, rgba(255, 255, 255,0.8), rgba(214, 214, 214,0.8))';

  const _dropDownBlackTheme = 'linear-gradient(180deg, rgba(81, 31, 194,0.8), rgba(54, 17, 138,0.8))';

  const dropDownStyles: CSSProperties = {
    background: theme === ThemesEnum.white ? _dropDownWhiteTheme : _dropDownBlackTheme,
    // backdropFilter: isDropDownOpened ? 'blur(0.4rem)' : 'none',
    // border: '1px solid red',
  }

  const singleRingtoneStyles: CSSProperties = {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    boxSizing: 'border-box',
  }

  const singleRingtoneTextStyles: CSSProperties = {
    fontSize: '0.55rem',
    lineHeight: '0.7rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
  //endregion

  //region -------------------- JSX Blocks --------------------
  const dropDownBlock = (
    <div className={classes.DropDownRingtones} style={dropDownStyles}>
      {RingtonesArray.map(ringtone => {
        return (
          <div className={classes.RingtoneContainer} key={ringtone}>
            <div onClick={(e) => setSelectedRingtoneHandler(e, ringtone)}
            style={singleRingtoneStyles}>
              <LeadText styles={singleRingtoneTextStyles}>
                {ringtone}
              </LeadText>
            </div>
            <div className={classes.HorizontalLine} style={ringtoneHorizontalLineStyles}/>
          </div>
        );
      })}
    </div>
  );
  //endregion

  return (
    <div className={classes.SettingsChangeRingtoneScreen} {...handlers} onClick={closeDropDownHandler}>
      <div className={classes.ScreenTitleWrapper}>
        <LeadText styles={screenTitleTextStyles}>
          Изменить рингтон телефона
        </LeadText>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.SettingsListWrapper}>
        <div style={blurScreenStyles}/>
        <div className={classes.ChooseRingtoneSetting} onClick={openDropDownHandler}>
          <div className={classes.SettingImageWrapper}>
            <img className={classes.Image} src={ringtoneImg}/>
          </div>
          <div className={classes.SettingTitleWrapper}>
            <LeadText styles={settingTitleStyles}>
              Выбрать рингтон
            </LeadText>
          </div>
          <div className={classes.SelectedRingtoneWrapper}>
            <LeadText styles={selectedRingtoneTextStyles}>{selectedRingtone}</LeadText>
          </div>
          {isDropDownOpened && dropDownBlock}
        </div>
        <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      </div>
    </div>
  );
});

export default SettingsChangeRingtoneScreen;