import React, {CSSProperties} from 'react';
import classes
  from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsChangeCosmeticsScreenList.module.scss';
import darkModeImg from "../../../../assets/hud/images/components/Phone/components/SettingsList/cosmetics_darkMode.svg";
import LeadText from "../Text/LeadText";
import Switch from "./Switch";
import themeImageImg
  from "../../../../assets/hud/images/components/Phone/components/SettingsList/cosmetics_themeImage.svg";
import {ThemesEnum} from "../../../models/phone/enums";

interface ThemeImageInterface {
  title: string;
  image: string;
}

interface Props {
  theme: ThemesEnum;

  onOpenDropDown: (e: any) => void;
  onCloseDropDown: () => void;
  onSetSelectedImage: (e: any, image: ThemeImageInterface) => void;
  onChangeDarkMode: () => void;

  allImportedImages: ThemeImageInterface[];
  selectedImage: ThemeImageInterface;
  isDropDownOpened: boolean;
}

const SettingsChangeCosmeticsScreenListStateless: React.FC<Props> = (
  function SettingsChangeCosmeticsScreenListStateless ({theme, onOpenDropDown,
                                                         onCloseDropDown, onSetSelectedImage, onChangeDarkMode,
                                                         allImportedImages, selectedImage,
                                                         isDropDownOpened}) {

  const blurScreenStyles: CSSProperties = {
    display: isDropDownOpened ? 'block' : 'none',
    width: '100%',
    height: '100%',
    position: "absolute",
    backdropFilter: isDropDownOpened ? 'blur(0.4rem)' : 'none',
  }

  const singleSettingStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#251152' : '#fff',
  }

  const settingTitleStyles: CSSProperties = {
    fontSize: '0.56rem',
    fontWeight: 400,
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  const _dropDownWhiteTheme = 'linear-gradient(180deg, rgba(235, 235, 235,0.7), rgba(214, 214, 214,0.6))';

  const _dropDownBlackTheme = 'linear-gradient(180deg, rgba(81, 31, 194,0.8), rgba(54, 17, 138,0.8))';

  const dropDownStyles: CSSProperties = {
    background: theme === ThemesEnum.black ? _dropDownBlackTheme : _dropDownWhiteTheme,
    // backdropFilter: isDropDownOpened ? 'blur(0.4rem)' : 'none',
  }

  const dropDownBlock = (
    <div className={classes.DropDownThemeImage} style={dropDownStyles}>
      {allImportedImages.map(image => {
        return (
          <div className={classes.ImageToSelectContainer} key={image.title}
               onClick={(e) => onSetSelectedImage(e, image)}>
            <img src={image.image} className={classes.ImageToSelect}/>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={classes.SettingsChangeCosmeticsScreenList} onClick={onCloseDropDown}>
      <div className={classes.SingleSetting} style={singleSettingStyles}>
        <div className={classes.SettingImageWrapper}>
          <img className={classes.Image} src={darkModeImg}/>
        </div>
        <div className={classes.SettingTitleWrapper}>
          <LeadText styles={settingTitleStyles}>
            Темный режим
          </LeadText>
        </div>
        <div className={classes.SwitchWrapper}>
          <Switch value={theme === ThemesEnum.black} onChange={onChangeDarkMode}/>
        </div>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div style={singleSettingStyles} className={classes.ThemeImageSetting} onClick={onOpenDropDown}>
        <div style={blurScreenStyles}/>
        <div className={classes.SettingImageWrapper}>
          <img className={classes.Image} src={themeImageImg}/>
        </div>
        <div className={classes.SettingTitleWrapper}>
          <LeadText styles={settingTitleStyles}>
            Заставка телефона
          </LeadText>
        </div>
        <div className={classes.Arrow}>
          <img src={selectedImage.image}/>
        </div>
        {isDropDownOpened && dropDownBlock}
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
    </div>
  );
});

export default SettingsChangeCosmeticsScreenListStateless;