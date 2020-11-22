import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/UI/PhoneBorders.module.scss';
import {OpenedScreenEnum, ThemesEnum} from "../models/interfaces/enums";

interface Props {
  themeFromServer: string;
  children: any;
}

const PhoneBorders: React.FC<Props> = React.memo(function PhoneBorders({themeFromServer, children}) {

  const [importedThemeImg, setImportedThemeImg] = useState();

  const {cosmeticsSettings, openedScreen} = useSelector(({hud: {phone}}) =>
    ({cosmeticsSettings: phone.settings.cosmetics, openedScreen: phone.openedScreen}));

  useEffect(() => {
    const loadThemeImage = async () => {
      if (themeFromServer) {
        let importedThemeImage;
        try {
          importedThemeImage = await import(`../../../../assets/hud/images/components/Phone/themes/${cosmeticsSettings.themeImage}.jpg`);
          setImportedThemeImg(importedThemeImage.default);
        } catch (e) {
          console.error('Phone theme import error', e);
        }
      }
    }
    loadThemeImage();
  }, [themeFromServer]);

  // theme изображение ток когда на mainScreen или currentCall, acceptCall
  // изменяем отсюда - потмоу что отдельные компоненты для худа и главное экрана и надо растягивать изобр на весь тел

  const displayPhoneBgImg = openedScreen === OpenedScreenEnum.mainScreen || openedScreen === OpenedScreenEnum.incomingCall
  || openedScreen === OpenedScreenEnum.currentCall;

  const contentStyles = {
    backgroundColor: cosmeticsSettings.theme === ThemesEnum.black ? '#000' : '#F8F9FF',
    backgroundImage: displayPhoneBgImg ? `url(${importedThemeImg})` : 'none',
  };

  return (
    <div className={classes.PhoneBorders}>
      <div className={classes.PhoneDisplay} style={contentStyles}>
        {children}
      </div>
      <div className={classes.Border}/>
    </div>
  );
});

export default PhoneBorders;