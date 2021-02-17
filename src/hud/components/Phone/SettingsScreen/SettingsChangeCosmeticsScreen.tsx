import React, { CSSProperties } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/SettingsChangeCosmeticsScreen.module.scss';
import { OpenedScreenEnum } from '../../../../models/hud/phone/enums';
import SettingsChangeCosmeticsScreenList from './SettingsChangeCosmeticsScreenList';
import { openScreen } from '../../../../redux/actions/hud/phone';
import ScreenTitleWrapper from '../ScreenTitleWrapper';

const SettingsChangeCosmeticsScreen = React.memo(() => {
  const theme = useSelector((state) => state.hud.phone.settings.cosmetics.theme);
  const themeImage = useSelector((state) => state.hud.phone.settings.cosmetics.themeImage);

  const dispatch = useDispatch();

  const openMainScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  };
  const openSettingsScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.settings));
  };
  // to external lib
  const handlers = useSwipeable({
    onSwipedRight: () => openSettingsScreen(),
    onSwipedUp: () => openMainScreen(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={classes.SettingsChangeCosmeticsScreen} {...handlers}>
      <ScreenTitleWrapper
        onBackButtonPress={openSettingsScreen}
        theme={theme}
        titleText={'Изменить косметику телефона'}
      />
      <div className={classes.SettingsListWrapper}>
        <SettingsChangeCosmeticsScreenList theme={theme} themeImage={themeImage} />
      </div>
    </div>
  );
});

export default SettingsChangeCosmeticsScreen;
