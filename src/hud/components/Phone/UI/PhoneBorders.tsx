import React, {CSSProperties, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/UI/PhoneBorders.module.scss';
import {OpenedScreenEnum, ThemesEnum} from "../../../models/phone/enums";

interface Props {
  themeFromServer: string;
  children: any;
}

const PhoneBorders: React.FC<Props> = React.memo(function PhoneBorders({themeFromServer, children}) {

  const [importedThemeImg, setImportedThemeImg] = useState();

  const cosmeticsSettings = useSelector(state => state.hud.phone.settings.cosmetics);
  const openedScreen = useSelector(state => state.hud.phone.openedScreen);

  useEffect(() => {
    const loadThemeImage = async () => {
      if (themeFromServer) {
        let importedThemeImage;
        try {
          importedThemeImage = await import(`../../../../assets/hud/images/components/Phone/themes/${cosmeticsSettings.themeImage}.svg`);
          setImportedThemeImg(importedThemeImage.default);
        } catch (e) {
          console.log('Phone theme import error', e);
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

  const substrateStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: cosmeticsSettings.theme === ThemesEnum.white ? '#000' : '#F8F9FF',
  }

  const contentStyles: CSSProperties = {
    backgroundColor: cosmeticsSettings.theme === ThemesEnum.black ? '#000' : '#F8F9FF',
    backgroundImage: displayPhoneBgImg ? `url(${importedThemeImg})` : 'none',
    filter: displayBlur ?  'blur(0.3rem)' : 'none',
    boxShadow: displayBlur ? '' : '',
  };

  return (
    <div className={classes.PhoneBorders}>
      <div className={classes.PhoneDisplay}>
        <div style={substrateStyles}>
        <div className={classes.PhoneTheme} style={contentStyles}/>
          <div className={classes.Content}>
            {children}
          </div>
        </div>
      </div>
      <div className={classes.Border}/>
    </div>
  )
});

export default PhoneBorders;