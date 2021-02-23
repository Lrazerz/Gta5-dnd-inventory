import React, { ReactElement, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PhoneBorders from './UI/PhoneBorders';
import classes from '../../../styles/hud/components/Phone/Phone.module.scss';
import PhoneHud from './UI/PhoneHud';
import { OpenedScreenEnum } from '../../../models/hud/phone/enums';
import MainScreen from './MainScreen/MainScreen';
import SelectedChatScreen from './SelectedChatScreen/SelectedChatScreen';
import SettingsScreen from './SettingsScreen/SettingsScreen';
import IncomingCallScreen from './currentCalls/IncomingCallScreen';
import CurrentCallScreen from './currentCalls/CurrentCallScreen';
import CallContactsChatWrapper from './CallContactsChatWrapper/CallContactsChatWrapper';
import { phone_openIncomingCall, phone_openLastMessages } from '../../../utils/windowFuncs/hud/phone/phoneInterceptors';
import AddNewContactScreen from './AddNewContactScreen/AddNewContactScreen';
import SettingsChangeCosmeticsScreen from './SettingsScreen/SettingsChangeCosmeticsScreen';
import SettingsChangeRingtoneScreen from './SettingsScreen/SettingsChangeRingtoneScreen';

const Phone = React.memo(() => {
  const openedScreen = useSelector((state) => state.hud.phone.openedScreen);
  const themeImage = useSelector((state) => state.hud.phone.settings.cosmetics.themeImage);

  if (!window.phone_openIncomingCall) {
    window.phone_openIncomingCall = phone_openIncomingCall;
  }
  if (!window.phone_openLastMessages) {
    window.phone_openLastMessages = phone_openLastMessages;
  }
  useEffect(() => {
    return () => {
      window.phone_openIncomingCall = undefined;
      window.phone_openLastMessages = undefined;
    };
  }, []);

  let phoneContent: ReactElement;

  switch (openedScreen) {
    case OpenedScreenEnum.mainScreen: {
      phoneContent = <MainScreen />;
      break;
    }
    case OpenedScreenEnum.settings: {
      phoneContent = <SettingsScreen />;
      break;
    }
    case OpenedScreenEnum.settings_changeCosmetics: {
      phoneContent = <SettingsChangeCosmeticsScreen />;
      break;
    }
    case OpenedScreenEnum.settings_changeRingtone: {
      phoneContent = <SettingsChangeRingtoneScreen />;
      break;
    }
    case OpenedScreenEnum.incomingCall: {
      phoneContent = <IncomingCallScreen />;
      break;
    }
    case OpenedScreenEnum.currentCall: {
      phoneContent = <CurrentCallScreen />;
      break;
    }
    case OpenedScreenEnum.selectedChat: {
      phoneContent = <SelectedChatScreen />;
      break;
    }
    case OpenedScreenEnum.addNewContact: {
      phoneContent = <AddNewContactScreen />;
      break;
    }
    case OpenedScreenEnum.phoneTyping:
    case OpenedScreenEnum.calls:
    case OpenedScreenEnum.contacts:
    case OpenedScreenEnum.chats: {
      phoneContent = <CallContactsChatWrapper openedScreen={openedScreen} />;
      break;
    }
    default: {
      phoneContent = <MainScreen />;
      break;
    }
  }

  return (
    <div className={classes.Phone}>
      <PhoneBorders themeFromServer={themeImage}>
        <PhoneHud>
          <Suspense fallback={<div>Загрузка</div>}>{phoneContent}</Suspense>
        </PhoneHud>
      </PhoneBorders>
    </div>
  );
});

export default Phone;
