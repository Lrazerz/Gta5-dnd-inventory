import React, {CSSProperties, ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/SettingsScreen/SettingsList.module.scss';
import muteSettingImg from '../../../../assets/hud/images/components/Phone/components/SettingsList/settings-mute.svg';
import cosmeticsSettingImg
  from '../../../../assets/hud/images/components/Phone/components/SettingsList/settings-cosmetics.svg';
import phoneSettingImg from '../../../../assets/hud/images/components/Phone/components/SettingsList/settings-phone.svg';
import LeadText from "../Text/LeadText";
import Switch from "./Switch";
import {setSettingMuted} from "../../../../redux/actions/hud/phone";
import {ThemesEnum} from "../models/interfaces/enums";

const SettingsList = React.memo(() => {

  const dispatch = useDispatch();
  const settingsRedux = useSelector(({hud: {phone}}) => phone.settings);

  const settingTitleStyles: CSSProperties = {
    fontSize: '0.43rem',
    fontWeight: 400,
  }

  const switchChangeHandler = () => {
    dispatch(setSettingMuted(!settingsRedux.isMuted));
  }

  const rightArrow = getRightArrow(settingsRedux.cosmetics.theme);

  const singleSettingStyles: CSSProperties = {
    backgroundColor: settingsRedux.cosmetics.theme === ThemesEnum.black ? '#251152' : '#fff',
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: settingsRedux.cosmetics.theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  return (
    <div className={classes.SettingsList}>
      <div className={classes.SingleSetting} style={singleSettingStyles}>
        <div className={classes.SettingImageWrapper}>
          <img className={classes.Image} src={muteSettingImg}/>
        </div>
        <div className={classes.SettingTitleWrapper}>
          <LeadText styles={settingTitleStyles}>
            Режим не беспокоить
          </LeadText>
        </div>
        <div className={classes.SwitchWrapper}>
          <Switch value={settingsRedux.isMuted} onChange={switchChangeHandler}/>
        </div>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.SingleSetting} style={singleSettingStyles}>
        <div className={classes.SettingImageWrapper}>
          <img className={classes.Image} src={cosmeticsSettingImg}/>
        </div>
        <div className={classes.SettingTitleWrapper}>
          <LeadText styles={settingTitleStyles}>
            Изменить косметику телефона
          </LeadText>
        </div>
        <div className={classes.Arrow}>
          {rightArrow}
        </div>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.SingleSetting} style={singleSettingStyles}>
        <div className={classes.SettingImageWrapper}>
          <img className={classes.Image} src={phoneSettingImg}/>
        </div>
        <div className={classes.SettingTitleWrapper}>
          <LeadText styles={settingTitleStyles}>
            Изменить рингтон
          </LeadText>
        </div>
        <div className={classes.Arrow}>
          {rightArrow}
        </div>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
    </div>
  );
});

let getRightArrow: (theme: ThemesEnum) => ReactElement;
getRightArrow = (theme) => {

  const color = theme === ThemesEnum.black ? '#DAD8E6' : '#DAD8E6';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 8.908 16.178">
      <path id="Chevron_Right" d="M62.784,8.667,55.509,15.94a.817.817,0,1,1-1.156-1.154l6.7-6.7-6.7-6.7A.817.817,0,0,1,55.51.24l7.275,7.273A.824.824,0,0,1,62.784,8.667Z" transform="translate(-54.113 -0.001)" fill={color}/>
    </svg>
  )
}

export default SettingsList;