import {
  CallsInterface,
  ChatsDemoInterface,
  ContactInterface,
  CurrentCallInterface,
  IncomingCallInterface,
  OpenedScreenEnum,
  SettingsInterface
} from "../../reducers/hud/phone";
import {
  ABORT_CALL, ADD_NEW_CONTACT,
  CURRENT_CALL_CHANGE_OPTION,
  OPEN_CALL,
  OPEN_INCOMING_CALL,
  OPEN_LAST_MESSAGES,
  OPEN_PREV_SCREEN,
  OPEN_SCREEN,
  PHONE_CLOSE,
  PHONE_OPEN,
  REMOVE_SELECTED_CHAT,
  SET_ADD_NEW_CONTACT_NUMBER,
  SET_CALLS,
  SET_CHATS_DEMO,
  SET_CONTACTS, SET_COSMETIC_SETTING,
  SET_PLAYER_AVATAR, SET_RINGTONE,
  SET_SELECTED_CHAT,
  SET_SETTING,
  SET_SETTINGS,
  SET_TIME
} from "./phoneTypes";
import {
  phone_abortCall,
  phone_openCalls,
  phone_openChats,
  phone_openContacts,
  phone_openCurrentCall,
  phone_openSettings,
  phone_openSingleChat
} from "../../../utils/windowFuncs/hud/phone/windowFuncs";
import {
  mpTrigger_phone_acceptCall, mpTrigger_phone_addNewContact,
  mpTrigger_phone_changeCurrentCallOption,
  mpTrigger_phone_changeSetting,
  mpTrigger_phone_declineCall,
  mpTrigger_phone_openCalls,
  mpTrigger_phone_openChats,
  mpTrigger_phone_openContacts,
  mpTrigger_phone_openLastMessages,
  mpTrigger_phone_openOutComingCall,
  mpTrigger_phone_openSettings,
  mpTrigger_phone_openSingleChat,
  mpTrigger_phone_removeSingleChat
} from "../../../utils/mpTriggers/hud/hudMpTriggers";
import {LastMessageInterface} from "../../../hud/components/Phone/models/interfaces/reducerInterfaces";

const phoneOpen = (lastMessages: LastMessageInterface[], settings) => {
  return {type: PHONE_OPEN, lastMessages, settings}
}

const phoneClose = () => {
  return {type: PHONE_CLOSE};
}

//region ------------------------ From hud (avatar, time) ------------------------
const setPlayerAvatarAction = (avatar: string) => {
  return {type: SET_PLAYER_AVATAR, avatar}
}
const setPhoneTime = (time: string) => {
  return {type: SET_TIME, time}
}
//endregion

//region ------------------------------ Action cretors ------------------------------
const _openScreen = (openedScreen: OpenedScreenEnum) => {
  return {type: OPEN_SCREEN, openedScreen};
}

const _openLastMessages = (lastMessages: LastMessageInterface[]) => {
  return {type: OPEN_LAST_MESSAGES, lastMessages};
}
// distinct action with save prevScr
const _openCall = (callingRightNowData: CurrentCallInterface, saveLastScreen = false) => {
  return {
    type: OPEN_CALL,
    callData: callingRightNowData,
    saveLastScreen
  };
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

//region ------------------------------ Settings changes ------------------------------
const _setSettings = (settingsData: SettingsInterface) => {
  return {type: SET_SETTINGS, isMuted: settingsData.isMuted, cosmetics: settingsData.cosmetics,
    ringtone: settingsData.ringtone};
}

const _setSetting = (settingTitle: string, settingValue: any) => {
  return {type: SET_SETTING, settingTitle, settingValue};
}

const _setCosmeticSetting = (settingTitle: string, settingValue: any) => {
  return {type: SET_COSMETIC_SETTING, settingTitle, settingValue};
}

const _setRingtone = (ringtone: string) => {
  return {type: SET_RINGTONE, ringtone};
}

const setSettings = (settingsData: SettingsInterface) => {
  return _setSettings(settingsData);
}

const setSetting = (settingTitle: string, settingValue: any) => {
  return dispatch => {
    mpTrigger_phone_changeSetting(settingTitle, settingValue);
    dispatch(_setSetting(settingTitle, settingValue));
  }
}

const setCosmeticSetting = (settingTitle: string, settingValue: any) => {
  return dispatch => {
    mpTrigger_phone_changeSetting(settingTitle, settingValue);
    dispatch(_setCosmeticSetting(settingTitle, settingValue));
  }
}

const setRingtone = (ringtone) => {
  return dispatch => {
    mpTrigger_phone_changeSetting('ringtone', ringtone);
    dispatch(_setRingtone(ringtone));
  }
}
//endregion
//endregion

//region ------------------------------ Redux thunk actions ------------------------------

//region -------------------- Current call actions--------------------
const _currentCallChangeOption = (optionTitle, optionValue) => {
  return {type: CURRENT_CALL_CHANGE_OPTION, optionTitle, optionValue};
}
const currentCallChangeOption = (optionTitle, optionValue) => {
  return dispatch => {
    mpTrigger_phone_changeCurrentCallOption(optionTitle, optionValue);
    dispatch(_currentCallChangeOption(optionTitle, optionValue));
  }
}
//endregion

// set up funcs on window
const openScreen = (screenNumber: OpenedScreenEnum, selectedChatId = '0') => {
  return dispatch => {

    // @ts-ignore
    window.phone_openCalls = undefined;
    // @ts-ignore
    window.phone_openContacts = undefined;
    // @ts-ignore
    window.phone_openChats = undefined;
    // @ts-ignore
    window.phone_openChat = undefined;
    // @ts-ignore
    window.phone_openCurrentCall = undefined;
    // @ts-ignore
    window.phone_openSettings = undefined;

    switch (screenNumber) {
      case OpenedScreenEnum.mainScreen: {
        mpTrigger_phone_openLastMessages();
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
        mpTrigger_phone_openSingleChat(selectedChatId);
        // @ts-ignore
        window.phone_openChat = phone_openSingleChat;
        break;
      }
      case OpenedScreenEnum.settings: {
        mpTrigger_phone_openSettings();
        // @ts-ignore
        window.phone_openSettings = phone_openSettings;
        break;
      }
    }
    dispatch(_openScreen(screenNumber));
  }
}

const _openPrevScreen = () => {
  return {type: OPEN_PREV_SCREEN};
}

const openPrevScreen = () => {
  return (dispatch, getState) => {
    const prevOpenedScreen = getState().hud.phone.prevOpenedScreen;

    switch(prevOpenedScreen) {
      case OpenedScreenEnum.mainScreen: {
        mpTrigger_phone_openLastMessages();
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
        // @ts-ignore
        window.phone_openChat = phone_openSingleChat;
        break;
      }
      case OpenedScreenEnum.settings: {
        mpTrigger_phone_openSettings();
        // @ts-ignore
        window.phone_openSettings = phone_openSettings;
        break;
      }
    }
    dispatch(_openPrevScreen());
  };
}

//region -------------------- Add new contact screen --------------------
const setAddNewContactPhoneNumber = (phoneNumber) => {
  return {type: SET_ADD_NEW_CONTACT_NUMBER, phoneNumber};
}

const _addNewContact = (newContact: ContactInterface) => {
  return {type: ADD_NEW_CONTACT, newContact}
}

const addNewContactAction = (newContact) => {
  return dispatch => {
    mpTrigger_phone_addNewContact(newContact);

    dispatch(_addNewContact(newContact));
  }
}
//endregion

//region -------------------- Incoming call --------------------
const _openIncomingCall = (incomingCallData: IncomingCallInterface) => {
  return {type: OPEN_INCOMING_CALL, name: incomingCallData.name, imageName: incomingCallData.imageName,
    phoneNumber: incomingCallData.phoneNumber};
}

const _abortCall = () => {
  return {type: ABORT_CALL};
}

const openIncomingCall = (incomingCallData: IncomingCallInterface) => {
  return dispatch => {
    // @ts-ignore
    window.phone_abortCall = phone_abortCall;
    dispatch(_openIncomingCall(incomingCallData));
  }
}

const abortCall = () => {
  return dispatch => {
    // @ts-ignore
    window.phone_abortIncomingCall = undefined;
    dispatch(_abortCall());
    dispatch(openPrevScreen());
  }
}

const acceptCall = (name, imageName, phoneNumber) => {
  return dispatch => {
    // open curr call scr,
    mpTrigger_phone_acceptCall(phoneNumber);
    // @ts-ignore
    window.phone_abortIncomingCall = undefined;
    // @ts-ignore
    window.phone_openCurrentCall = phone_openCurrentCall;
    // @ts-ignore
    window.phone_abortCall = phone_abortCall;
    dispatch(_openCall({
      name,
      imageName,
      phoneNumber,
      isMuted: false,
      speaker: false,
      isRecording: false
    }));
  }
}

const declineCall = (phoneNumber) => {
  return dispatch => {
    // @ts-ignore
    window.phone_abortIncomingCall = undefined;
    // open curr call scr,
    mpTrigger_phone_declineCall();
    dispatch(openPrevScreen());
  }
}
//endregion

// update data about call
const openCall = (callingRightNowData: CurrentCallInterface, saveLastScreen = false) => {
  return _openCall(callingRightNowData, saveLastScreen);
}

const openOutComingCall = (phoneNumber) => {
  return dispatch => {
    mpTrigger_phone_openOutComingCall(phoneNumber);
    // @ts-ignore
    window.phone_openCurrentCall = phone_openCurrentCall;
    // @ts-ignore
    window.phone_abortCall = phone_abortCall;
    const callingData: CurrentCallInterface = {
      name: "",
      imageName: "",
      phoneNumber: phoneNumber,
      isMuted: false,
      speaker: false,
      isRecording: false
    };

    dispatch(openCall(callingData, true));
  }
}

const openLastMessages = (lastMessages: LastMessageInterface[]) => {
  return _openLastMessages(lastMessages);
}

const setCalls = (callsData: CallsInterface[]) => {
  return _setCalls(callsData)
}

const setContacts = (contactsData: ContactInterface[]) => {
  return _setContacts(contactsData)
}

const setChatsDemo = (chatsDemoData: ChatsDemoInterface[]) => {
  return _setChatsDemo(chatsDemoData)
}

//region -------------------- Set selected chat --------------------
const _setSelectedChat = (selectedChatData) => {
  return {type: SET_SELECTED_CHAT, chatData: selectedChatData};
}

const _removeSelectedChat = () => {
  return {type: REMOVE_SELECTED_CHAT};
}

// params - name, avatarName, messages
const setSelectedChat  = (selectedChatData) => {
  return _setSelectedChat(selectedChatData);
}

const removeSelectedChat  = (id) => {
  return dispatch => {
    mpTrigger_phone_removeSingleChat(id);
    dispatch(openPrevScreen());
    dispatch(_removeSelectedChat())
  }
}
//endregion
//endregion

export {
  phoneOpen,
  phoneClose,

  // pass data to the add new contact screen
  setAddNewContactPhoneNumber,
  // add new contact
  addNewContactAction,

  // from hud
  setPlayerAvatarAction,
  setPhoneTime,

  openScreen,
  openPrevScreen,

  // incoming call
  openIncomingCall, // open call (invoke from server)
  abortCall, // abort call (invoke from server)
  acceptCall, // invoke by pressing key
  declineCall, // invoke by pressing key
  // current call
  openCall, // upd data about call
  openOutComingCall,
  currentCallChangeOption,

  openLastMessages,

  // single setting
  setSettings,
  setSetting,
  setCosmeticSetting,
  setRingtone,

  setCalls,
  setContacts,
  setChatsDemo,

  // single chat
  setSelectedChat,
  removeSelectedChat

}