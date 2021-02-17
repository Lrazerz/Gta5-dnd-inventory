import React, { CSSProperties } from 'react';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsChangeRingtoneScreen.module.scss';
import { RingtonesArray, ThemesEnum } from '../../../../models/hud/phone/enums';
import LeadText from '../Text/LeadText';
import ringtoneImg from '../../../../assets/hud/images/components/Phone/components/SettingsList/ringtone.svg';
import phoneTheme from '../consts/phoneTheme';
import ScreenTitleWrapper from '../ScreenTitleWrapper';

interface Props {
  theme: ThemesEnum;
  isDropDownOpened: boolean;
  selectedRingtone: string;

  onSetSelectedRingtone: (e: any, ringtone: string) => void;
  onCloseDropDown: () => void;
  onOpenDropDown: (e: any) => void;
  onOpenSettingsScreen: () => void;
  // swipe handlers (external library)
  handlers: any;
}

const SettingsChangeRingtoneScreenStateless: React.FC<Props> = React.memo(
  function SettingsChangeRingtoneScreenStateless({
    theme,
    isDropDownOpened,
    selectedRingtone,
    onSetSelectedRingtone,
    onCloseDropDown,
    onOpenSettingsScreen,
    onOpenDropDown,
    handlers,
  }) {
    //region -------------------- Styles --------------------
    const listScreenBlurStyles: CSSProperties = {
      filter: isDropDownOpened ? 'blur(0.1rem)' : 'none',
    };

    const horizontalLineStyles: CSSProperties = {
      backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
    };

    const ringtoneHorizontalLineStyles: CSSProperties = {
      backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
      height: '1%',
    };

    const settingTitleStyles: CSSProperties = {
      fontSize: '0.56rem',
      fontWeight: 400,
    };

    const selectedRingtoneTextStyles: CSSProperties = {
      color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.darkPurple,
      width: '100%',
      fontSize: '0.57rem',
      lineHeight: '0.7rem',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    };

    const chooseRingtoneSettingStyles: CSSProperties = {
      backgroundColor: theme === ThemesEnum.black ? '#251152' : '#fff',
    };

    const _dropDownWhiteTheme = 'linear-gradient(180deg, rgba(235, 235, 235,0.7), rgba(214, 214, 214,0.6))';

    const _dropDownBlackTheme = 'linear-gradient(180deg, rgba(81, 31, 194,0.8), rgba(54, 17, 138,0.8))';

    const dropDownStyles: CSSProperties = {
      background: theme === ThemesEnum.black ? _dropDownBlackTheme : _dropDownWhiteTheme,
      // backdropFilter: 'blur(0.4rem)'
    };

    const singleRingtoneTextStyles: CSSProperties = {
      fontSize: '0.55rem',
      lineHeight: '0.7rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    };

    const dropDownBlock = (
      <div className={classes.DropDownRingtones} style={dropDownStyles}>
        {RingtonesArray.map((ringtone) => {
          return (
            <div className={classes.RingtoneContainer} key={ringtone}>
              <div className={classes.RingtoneTextWrapper} onClick={(e) => onSetSelectedRingtone(e, ringtone)}>
                <LeadText styles={singleRingtoneTextStyles}>{ringtone}</LeadText>
              </div>
              <div className={classes.HorizontalLine} style={ringtoneHorizontalLineStyles} />
            </div>
          );
        })}
      </div>
    );

    return (
      <div className={classes.SettingsChangeRingtoneScreen} {...handlers}>
        <ScreenTitleWrapper
          theme={theme}
          titleText={'Изменить рингтон телефона'}
          onBackButtonPress={onOpenSettingsScreen}
        />
        <div className={classes.SettingsListWrapper}>
          {/*<div style={blurScreenStyles}/>*/}

          <div className={classes.SettingsList} onClick={onCloseDropDown} style={listScreenBlurStyles}>
            <div style={chooseRingtoneSettingStyles} className={classes.ChooseRingtoneSetting} onClick={onOpenDropDown}>
              <div className={classes.SettingImageWrapper}>
                <img className={classes.Image} src={ringtoneImg} />
              </div>
              <div className={classes.SettingTitleWrapper}>
                <LeadText styles={settingTitleStyles}>Выбрать рингтон</LeadText>
              </div>
              <div className={classes.SelectedRingtoneWrapper}>
                <LeadText styles={selectedRingtoneTextStyles}>{selectedRingtone}</LeadText>
              </div>
            </div>
            <div className={classes.HorizontalLine} style={horizontalLineStyles} />
          </div>
          {isDropDownOpened && dropDownBlock}
        </div>
      </div>
    );
  },
);

export default SettingsChangeRingtoneScreenStateless;
