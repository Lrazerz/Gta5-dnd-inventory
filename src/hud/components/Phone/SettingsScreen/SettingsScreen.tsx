import React, { useEffect, CSSProperties } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsScreen.module.scss';
import LeadText from '../Text/LeadText';
import SettingsList from './SettingsList';
import { OpenedScreenEnum, ThemesEnum } from '../../../../models/hud/phone/enums';
import { openScreen } from '../../../../redux/actions/hud/phone';
import ScreenTitleWrapper from '../ScreenTitleWrapper';

const SettingsScreen = React.memo(() => {
  const dispatch = useDispatch();

  const theme = useSelector(({ hud: { phone } }) => phone.settings.cosmetics.theme);

  useEffect(() => {
    return () => {
      window.phone_openSettings = null;
    };
  }, []);

  const swipeHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  };
  // to external lib
  const handlers = useSwipeable({
    onSwipedRight: () => swipeHandler(),
    onSwipedUp: () => swipeHandler(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={classes.SettingsScreen} {...handlers}>
      <ScreenTitleWrapper theme={theme} titleText={'Настройки'} onBackButtonPress={swipeHandler} />
      <div className={classes.SettingsListWrapper}>
        <SettingsList />
      </div>
    </div>
  );
});

export default SettingsScreen;
