import React, {CSSProperties, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import classes
  from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsChangeCosmeticsScreenList.module.scss';
import darkModeImg from "../../../../assets/hud/images/components/Phone/components/SettingsList/cosmetics_darkMode.svg";
import LeadText from "../Text/LeadText";
import Switch from "./Switch";
import themeImageImg
  from "../../../../assets/hud/images/components/Phone/components/SettingsList/cosmetics_themeImage.svg";
import {ThemesArray, ThemesEnum} from "../models/interfaces/enums";
import {setCosmeticSetting} from "../../../../redux/actions/hud/phone";
import phoneTheme from "../consts/phoneTheme";

interface ThemeImageInterface {
  title: string;
  image: string;
}

interface Props {
  theme: ThemesEnum;
  themeImage: string;
}

// todo set selected image on click

const SettingsChangeCosmeticsScreenList: React.FC<Props> = ({theme, themeImage}) => {

  // theme image
  const [selectedImage, setSelectedImage]: [ThemeImageInterface, any] =
    useState(
      {title: themeImage,
      image: `../../../../assets/hud/images/components/Phone/themes/${themeImage}.svg`}
      );

  // theme images
  const [allImportedImages, setAllImportedImages]: [ThemeImageInterface[], any] = useState([]);

  // drop down to choose theme image
  const [isDropDownOpened, setIsDropDownOpened]: [boolean, any] = useState(false);

  const dispatch = useDispatch();

  //region -------------------- Update images --------------------
  useEffect(() => {
    const importImage = async (imageName) => {
      try {
        const importedImage = await import(`../../../../assets/hud/images/components/Phone/themes/${imageName}.svg`);
        // @ts-ignore
        setAllImportedImages(prevArray => {
          return [...prevArray,{title: imageName, image: importedImage.default}];
        });
      } catch (e) {
        if(e.message.startsWith('Cannot find')) {
          console.log(`Theme image "${imageName}" import error.`);
        }
      }
    }

    ThemesArray.forEach(playerAvatarName => {
      importImage(playerAvatarName);
    });

    // for(const key in PlayerAvatarsEnum) {
    //   console.log('key',key, typeof key);
    // }
  }, []);

  // update selected image by name from redux
  useEffect(() => {
    const importImage = async () => {
      try {
        const importedImage = await import(`../../../../assets/hud/images/components/Phone/themes/${themeImage}.svg`);
        // @ts-ignore
        setSelectedImage({title: themeImage, image: importedImage.default});
      } catch (e) {
        if (e.message.startsWith('Cannot find')) {
          console.log(`Selected theme image "${themeImage}" import error.`);
        }
      }
    }
    importImage();
  }, [themeImage]);
  //endregion

  //region -------------------- Handlers --------------------
  const changeDarkModeHandler = () => {
    const newThemeValue = theme === ThemesEnum.white ? ThemesEnum.black : ThemesEnum.white;
    dispatch(setCosmeticSetting('theme', newThemeValue));
  }

  const openDropDownHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropDownOpened(true);
  }

  const closeDropDownHandler = () => {
    setIsDropDownOpened(false);
  }

  const setSelectedImageHandler = (e: any, image: ThemeImageInterface) => {
    e.stopPropagation();
    dispatch(setCosmeticSetting('themeImage', image.title));
    setSelectedImage(image);
    closeDropDownHandler();
  }
  //endregion

  //region -------------------- Styles --------------------
  const blurScreenStyles: CSSProperties = {
    display: isDropDownOpened ? 'block' : 'none',
    width: '100%',
    height: '100%',
    position: "absolute",
    // backgroundColor: isDropDownOpened ? 'rgba(255,255,255,0.1 )' : 'transparent',
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

  const _dropDownWhiteTheme = 'linear-gradient(180deg, rgba(255, 255, 255,0.8), rgba(214, 214, 214,0.8))';

  const _dropDownBlackTheme = 'linear-gradient(180deg, rgba(81, 31, 194,0.8), rgba(54, 17, 138,0.8))';

  const dropDownStyles: CSSProperties = {
    background: theme === ThemesEnum.white ? _dropDownWhiteTheme : _dropDownBlackTheme,
    backdropFilter: isDropDownOpened ? 'blur(0.4rem)' : 'none',
    // border: '1px solid red',
  }
  //endregion

  //region -------------------- JSX Blocks (React elements) --------------------
  const dropDownBlock = (
    <div className={classes.DropDownThemeImage} style={dropDownStyles}>
      {allImportedImages.map(image => {
        return (
          <div className={classes.ImageToSelectContainer} key={image.title}
               onClick={(e) => setSelectedImageHandler(e, image)}>
            <img src={image.image} className={classes.ImageToSelect}/>
          </div>
        )
      })}
    </div>
  )
  //endregion

  return (
    <div className={classes.SettingsChangeCosmeticsScreenList} onClick={closeDropDownHandler}>
      <div style={blurScreenStyles}/>
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
          <Switch value={theme === ThemesEnum.black} onChange={changeDarkModeHandler}/>
        </div>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.ThemeImageSetting} style={singleSettingStyles} onClick={openDropDownHandler}>
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
};

export default SettingsChangeCosmeticsScreenList;