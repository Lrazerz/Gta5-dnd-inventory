import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSelector, useDispatch } from 'react-redux';
import { OpenedScreenEnum } from '../../../../models/hud/phone/enums';
import { openScreen, setRingtone } from '../../../../redux/actions/hud/phone';
import SettingsChangeRingtoneScreenStateless from './SettingsChangeRingtoneScreenStateless';

const SettingsChangeRingtoneScreen = React.memo(function SettingsChangeRingtoneScreen() {
  const [selectedRingtone, setSelectedRingtone]: [string, any] = useState();
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const ringtoneFromRedux = useSelector((state) => state.hud.phone.settings.ringtone);
  const theme = useSelector(({ hud: { phone } }) => phone.settings.cosmetics.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedRingtone(ringtoneFromRedux);
  }, [ringtoneFromRedux]);

  const openSettingsScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.settings));
  };
  const openMainScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  };
  // to external lib
  const handlers = useSwipeable({
    onSwipedRight: () => openSettingsScreen(),
    onSwipedUp: () => openMainScreen(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const openDropDownHandler = (e) => {
    e.stopPropagation();
    setIsDropDownOpened(true);
  };

  const closeDropDownHandler = () => {
    setIsDropDownOpened(false);
  };

  const setSelectedRingtoneHandler = (e, ringtone: string) => {
    e.stopPropagation();
    setIsDropDownOpened(false);
    dispatch(setRingtone(ringtone));
    setSelectedRingtone(ringtone);
  };

  return (
    <SettingsChangeRingtoneScreenStateless
      theme={theme}
      isDropDownOpened={isDropDownOpened}
      selectedRingtone={selectedRingtone}
      onSetSelectedRingtone={setSelectedRingtoneHandler}
      onCloseDropDown={closeDropDownHandler}
      onOpenDropDown={openDropDownHandler}
      onOpenSettingsScreen={openSettingsScreen}
      handlers={handlers}
    />
  );
});

export default SettingsChangeRingtoneScreen;
