import React, {CSSProperties, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/UI/PhoneBorders.module.scss';
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

  const displayBlur = openedScreen === OpenedScreenEnum.incomingCall
  || openedScreen === OpenedScreenEnum.currentCall;

  const contentStyles: CSSProperties = {
    backgroundColor: cosmeticsSettings.theme === ThemesEnum.black ? '#000' : '#F8F9FF',
    backgroundImage: displayPhoneBgImg ? `url(${importedThemeImg})` : 'none',
  };

  const blurredElStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    backdropFilter: displayBlur ?  'blur(0.4rem)' : 'none',
  }

  return (
    <div className={classes.PhoneBorders}>
      <div className={classes.PhoneDisplay} style={contentStyles}>
        <div style={blurredElStyles}>
          {children}
        </div>
      </div>
      <div className={classes.Border}/>
    </div>
  );
});

export default PhoneBorders;