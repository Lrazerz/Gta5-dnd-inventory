import {
  CurrentCallInterface,
  CallsInterface, ChatMessageInterface, ChatsDemoInterface,
  ContactInterface,
  OpenedScreenEnum,
  SettingsInterface, IncomingCallInterface
} from "../reducers/phone";
import {
  OPEN_CALL, OPEN_INCOMING_CALL,
  OPEN_SCREEN,
  SET_CALLS,
  SET_CHATS_DEMO,
  SET_CONTACTS,
  SET_SELECTED_CHAT, SET_SETTING_MUTED,
  SET_SETTINGS
} from "./types";

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
    name: callingRightNowData.name,
    imageName: callingRightNowData.imageName,
    phoneNumber: callingRightNowData.phoneNumber,
    isConference: callingRightNowData.isConference,
    isMuted: callingRightNowData.isMuted,
    isNoted: callingRightNowData.isNoted,
    speaker: callingRightNowData.speaker,
    keyboard: callingRightNowData.keyboard,
    isRecording: callingRightNowData.isRecording,
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
  return dispatch => {
    dispatch(_openScreen(screenNumber));
  }
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