import React, {CSSProperties, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import classes
  from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsChangeCosmeticsScreenList.module.scss';
import darkModeImg from "../../../../assets/hud/images/components/Phone/components/SettingsList/cosmetics_darkMode.svg";
import LeadText from "../Text/LeadText";
import Switch from "./Switch";
import themeImageImg
  from "../../../../assets/hud/images/components/Phone/components/SettingsList/cosmetics_themeImage.svg";
import {ThemesArray, ThemesEnum} from "../../../models/phone/enums";
import {setCosmeticSetting} from "../../../../redux/actions/hud/phone";
import SettingsChangeCosmeticsScreenListStateless from "./SettingsChangeCosmeticsScreenListStateless";

export interface ThemeImageInterface {
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
    const newThemeValue = theme === ThemesEnum.black ? ThemesEnum.white : ThemesEnum.black;
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
  
  return <SettingsChangeCosmeticsScreenListStateless theme={theme} onOpenDropDown={openDropDownHandler}
                                                     onCloseDropDown={closeDropDownHandler}
                                                     onSetSelectedImage={setSelectedImageHandler}
                                                     onChangeDarkMode={changeDarkModeHandler}
                                                     allImportedImages={allImportedImages}
                                                     selectedImage={selectedImage} isDropDownOpened={isDropDownOpened}/>
};

export default SettingsChangeCosmeticsScreenList;