import {
  CallsInterface,
  ChatMessageInterface,
  ChatsDemoInterface,
  ContactInterface,
  CurrentCallInterface,
  IncomingCallInterface,
  OpenedScreenEnum,
  SettingsInterface
} from "../../reducers/hud/phone";
import {
  OPEN_CALL,
  OPEN_INCOMING_CALL,
  OPEN_SCREEN,
  SET_CALLS,
  SET_CHATS_DEMO,
  SET_CONTACTS,
  SET_SELECTED_CHAT,
  SET_SETTING_MUTED,
  SET_SETTINGS
} from "./types";
import {
  phone_openCalls,
  phone_openChats,
  phone_openContacts, phone_openCurrentCall,
  phone_openIncomingCall, phone_openSettings, phone_openSingleChat
} from "../../../utils/windowFuncs/windowFuncs";
import {AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";
import {
  mpTrigger_phone_openCalls,
  mpTrigger_phone_openChats,
  mpTrigger_phone_openContacts,
  mpTrigger_phone_openOutComingCall,
  mpTrigger_phone_openSettings,
  mpTrigger_phone_openSingleChat
} from "../../../utils/mpTriggers/hud/hudMpTriggers";

//region ------------------------------ Action cretors ------------------------------
const _openScreen = (openedScreen: OpenedScreenEnum) => {
  return {type: OPEN_SCREEN, openedScreen};
}

const _openIncomingCall = (incomingCallData: IncomingCallInterface) => {
  return {type: OPEN_INCOMING_CALL, name: incomingCallData.name, imageName: incomingCallData.imageName,
    phoneNumber: incomingCallData.phoneNumber};
}

const _openCall = (callingRightNowData: CurrentCallInterface) => {
  return {
    type: OPEN_CALL,
    callData: callingRightNowData
  };
}

const _setSettings = (settingsData: SettingsInterface) => {
  return {type: SET_SETTINGS, isMuted: settingsData.isMuted, cosmetics: settingsData.cosmetics,
  ringtone: settingsData.ringtone};
}

const _setCalls = (callsData: CallsInterface[]) => {
  return {type: SET_CALLS, calls: callsData};
}

const _setContacts = (contactsData: ContactInterface[]) => {
  return {type: SET_CONTACTS, contacts: contactsData};
}

const _setChatsDemo = (chatsDemoData: ChatsDemoInterface[]) => {
  return {type: SET_CHATS_DEMO, chatsDemo: chatsDemoData};
}

const _setSelectedChat = (selectedChatData: ChatMessageInterface[]) => {
  return {type: SET_SELECTED_CHAT, selectedChat: selectedChatData};
}

//region ------------------------------ Single setting change ------------------------------
const _setSettingMuted = (newState) => {
  return {type: SET_SETTING_MUTED, newState};
}
//endregion

//region ------------------------------ Redux thunk actions ------------------------------
const openScreen = (screenNumber: OpenedScreenEnum) => {
  switch (screenNumber) {
    case OpenedScreenEnum.mainScreen: {
      // @ts-ignore
      window.phone_openIncomingCall = phone_openIncomingCall;
      break;
    }
    //region -------------------- Calls, contacts, chats --------------------
    case OpenedScreenEnum.calls: {
      mpTrigger_phone_openCalls();
      // @ts-ignore
      window.phone_openCalls = phone_openCalls;
      break;
    }
    case OpenedScreenEnum.contacts: {
      mpTrigger_phone_openContacts();
      // @ts-ignore
      window.phone_openContacts = phone_openContacts;
      break;
    }
    case OpenedScreenEnum.chats: {
      mpTrigger_phone_openChats();
      // @ts-ignore
      window.phone_openChats = phone_openChats;
      break;
    }
    //endregion
    case OpenedScreenEnum.selectedChat: {
      mpTrigger_phone_openSingleChat();
      // @ts-ignore
      window.phone_openChat = phone_openSingleChat;
      break;
    }
    case OpenedScreenEnum.currentCall: {
      mpTrigger_phone_openOutComingCall();
      // @ts-ignore
      window.phone_openCurrentCall = phone_openCurrentCall;
      break;
    }
    case OpenedScreenEnum.settings: {
      console.log('set func on window')
      mpTrigger_phone_openSettings();
      // @ts-ignore
      window.phone_openSettings = phone_openSettings;
      break;
    }
  }
  return _openScreen(screenNumber);
}

const openIncomingCall = (incomingCallData: IncomingCallInterface) => {
  return dispatch => {
    dispatch(_openIncomingCall(incomingCallData));
  }
}

const openCall = (callingRightNowData: CurrentCallInterface) => {
  return dispatch => {
    dispatch(_openCall(callingRightNowData));
  }
}

const setSettings = (settingsData: SettingsInterface) => {
  return dispatch => {
    dispatch(_setSettings(settingsData));
  }
}

const setCalls = (callsData: CallsInterface[]) => {
  return dispatch => {
    dispatch(_setCalls(callsData));
  }
}

const setContacts = (contactsData: ContactInterface[]) => {
  return dispatch => {
    dispatch(_setContacts(contactsData));
  }
}

const setChatsDemo = (chatsDemoData: ChatsDemoInterface[]) => {
  return dispatch => {
    dispatch(_setChatsDemo(chatsDemoData));
  }
}

const setSelectedChat  = (selectedChatData: ChatMessageInterface[]) => {
  return dispatch => {
    dispatch(_setSelectedChat(selectedChatData));
  }
}

//region ------------------------------ Single setting change ------------------------------
const setSettingMuted = (newState) => {
  return {type: SET_SETTING_MUTED, newState};
}
//endregion

//endregion

export {
  openScreen,

  openIncomingCall,
  openCall,

  setSettings,
  setCalls,
  setContacts,
  setChatsDemo,
  setSelectedChat,
  // single setting
  setSettingMuted
}