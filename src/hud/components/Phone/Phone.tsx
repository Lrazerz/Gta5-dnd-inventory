import React, {ReactElement, Suspense, lazy} from 'react';
import {useSelector} from 'react-redux';
import PhoneBorders from "./UI/PhoneBorders";
import classes from '../../../styles/hud/components/Phone/Phone.module.scss';
import PhoneHud from "./UI/PhoneHud";
import {OpenedScreenEnum} from "../../../redux/reducers/hud/phone";
import MainScreen from "./MainScreen/MainScreen";
import SelectedChatScreen from "./SelectedChatScreen/SelectedChatScreen";

import SettingsScreen from "./SettingsScreen/SettingsScreen";
import IncomingCallScreen from "./currentCalls/IncomingCallScreen";
import CurrentCallScreen from "./currentCalls/CurrentCallScreen";
// screen too
import CallContactsChatWrapper from "./CallContactsChatWrapper/CallContactsChatWrapper";


const Phone = React.memo(() => {

  // <PhoneBorders themeFromServer={"theme1"}>

  const openedScreen: OpenedScreenEnum = useSelector(({hud: {phone}}) => {
    return phone.openedScreen;
  });

  let phoneContent: ReactElement;

  // todo add active call, add contact
  switch (openedScreen) {
    case OpenedScreenEnum.mainScreen: {
      phoneContent = <MainScreen/>;
      break;
    }
    case OpenedScreenEnum.settings: {
      phoneContent = <SettingsScreen/>;
      break;
    }
    case OpenedScreenEnum.incomingCall: {
      phoneContent = <IncomingCallScreen/>;
      break;
    }
    case OpenedScreenEnum.currentCall: {
      phoneContent = <CurrentCallScreen/>
      break;
    }
    case OpenedScreenEnum.selectedChat: {
      phoneContent = <SelectedChatScreen/>
      break;
    }
    default: {
      phoneContent = <CallContactsChatWrapper openedScreen={openedScreen}/>
      break;
    }
  }

  return (
      <div className={classes.Phone}>
        <PhoneBorders themeFromServer={"theme1"}>
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