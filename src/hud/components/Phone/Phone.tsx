import React, {ReactElement, Suspense, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PhoneBorders from "./UI/PhoneBorders";
import classes from '../../../styles/hud/components/Phone/Phone.module.scss';
import PhoneHud from "./UI/PhoneHud";
import {OpenedScreenEnum} from "../../models/phone/enums";
import MainScreen from "./MainScreen/MainScreen";
import SelectedChatScreen from "./SelectedChatScreen/SelectedChatScreen";
import SettingsScreen from "./SettingsScreen/SettingsScreen";
import IncomingCallScreen from "./currentCalls/IncomingCallScreen";
import CurrentCallScreen from "./currentCalls/CurrentCallScreen";
import CallContactsChatWrapper from "./CallContactsChatWrapper/CallContactsChatWrapper";
import {
  phone_openIncomingCall,
  phone_openLastMessages
} from "../../../utils/windowFuncs/hud/phone/windowFuncs";
import AddNewContactScreen from "./AddNewContactScreen/AddNewContactScreen";
import SettingsChangeCosmeticsScreen from "./SettingsScreen/SettingsChangeCosmeticsScreen";
import SettingsChangeRingtoneScreen from "./SettingsScreen/SettingsChangeRingtoneScreen";


const Phone = React.memo(() => {

  const {openedScreen, themeImage} = useSelector(({hud: {phone}}) => {
    return {openedScreen: phone.openedScreen, themeImage: phone.settings.cosmetics.themeImage};
  });

  //region -------------------- Window funcs --------------------
  // @ts-ignore
  if(!window.phone_openIncomingCall) {
    // @ts-ignore
    window.phone_openIncomingCall = phone_openIncomingCall;
  }
  // @ts-ignore
  if(!window.phone_openLastMessages) {
    // @ts-ignore
    window.phone_openLastMessages = phone_openLastMessages;
  }
  useEffect(() => {
    return () => {
      // @ts-ignore
      window.phone_openIncomingCall = undefined;
      // @ts-ignore
      window.phone_openLastMessages = undefined;
    }
  }, []);
  //endregion

  let phoneContent: ReactElement;

  // todo add active call, add contact
  switch (openedScreen) {
    case OpenedScreenEnum.mainScreen: {
      phoneContent = <MainScreen/>;
      break;
    }
    //region -------------------- Settings screens --------------------
    case OpenedScreenEnum.settings: {
      phoneContent = <SettingsScreen/>;
      break;
    }
    case OpenedScreenEnum.settings_changeCosmetics: {
      phoneContent = <SettingsChangeCosmeticsScreen/>;
      break;
    }
    case OpenedScreenEnum.settings_changeRingtone: {
      phoneContent = <SettingsChangeRingtoneScreen/>;
      break;
    }
    //endregion
    case OpenedScreenEnum.incomingCall: {
      phoneContent = <IncomingCallScreen/>;
      break;
    }
    case OpenedScreenEnum.currentCall: {
      phoneContent = <CurrentCallScreen/>;
      break;
    }
    case OpenedScreenEnum.selectedChat: {
      phoneContent = <SelectedChatScreen/>;
      break;
    }
    case OpenedScreenEnum.addNewContact: {
      phoneContent = <AddNewContactScreen/>;
      break;
    }
    case OpenedScreenEnum.phoneTyping:
    case OpenedScreenEnum.calls:
    case OpenedScreenEnum.contacts:
    case OpenedScreenEnum.chats: {
      phoneContent = <CallContactsChatWrapper openedScreen={openedScreen}/>;
      break;
    }
    default: {
      phoneContent = <MainScreen/>;
      break;
    }
  }

  return (
      <div className={classes.Phone}>
        <PhoneBorders themeFromServer={themeImage}>
          <PhoneHud>
            <Suspense fallback={<div>Загрузка</div>}>
              {phoneContent}
            </Suspense>
          </PhoneHud>
        </PhoneBorders>
      </div>
  );
})

export default Phone;