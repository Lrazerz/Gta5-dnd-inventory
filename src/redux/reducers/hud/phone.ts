import {
  ABORT_CALL, ADD_NEW_CONTACT,
  CURRENT_CALL_CHANGE_OPTION,
  OPEN_CALL,
  OPEN_INCOMING_CALL,
  OPEN_LAST_MESSAGES,
  OPEN_PREV_SCREEN,
  OPEN_SCREEN, PHONE_CLOSE, PHONE_OPEN, REMOVE_SELECTED_CHAT, SET_ADD_NEW_CONTACT_NUMBER,
  SET_CALLS,
  SET_CHATS_DEMO,
  SET_CONTACTS, SET_COSMETIC_SETTING, SET_LAST_OUTCOMING_MESSAGE, SET_PLAYER_AVATAR, SET_RINGTONE,
  SET_SELECTED_CHAT,
  SET_SETTING,
  SET_SETTINGS, SET_TIME,
} from "../../actions/hud/phoneTypes";
import {
  CallsInterface,
  ChatMessageInterface,
  ChatsDemoInterface,
  ContactInterface,
  CurrentCallInterface, DateObjectInterface,
  IncomingCallInterface,
  LastMessageInterface,
  PhoneHudDataInterface, SelectedChatInterface,
  SettingsInterface
} from "../../../hud/models/phone/reducerInterfaces";
import {OpenedScreenEnum, ThemesEnum} from "../../../hud/models/phone/enums";

interface InitialStateInterface {
  isPhoneOpened: boolean;
  // to display in chats
  playerAvatar: string;

  lastMessages: [] | LastMessageInterface[];

  openedScreen: OpenedScreenEnum;
  // to come back from curr call and inc call
  prevOpenedScreen: OpenedScreenEnum;

  hudData: PhoneHudDataInterface;

  addNewContactPhoneNumber: string;

  //region -------------------- Screens data --------------------
  incomingCall: {} | IncomingCallInterface; // incoming call where we can accept/decline
  currentCall: {} | CurrentCallInterface; // is calling right now

  settings: SettingsInterface;

  calls: [] | CallsInterface[];

  contacts: [] | ContactInterface[];

  chatsDemo: [] | ChatsDemoInterface[]; // demo === preview

  selectedChat: {} | SelectedChatInterface;
  //endregion
}

const initialState = {
  isPhoneOpened: false,
  // to display in chats
  playerAvatar: "default-avatar",

  lastMessages: [],

  openedScreen: OpenedScreenEnum.phoneTyping,
  // to come back from curr call and inc call
  prevOpenedScreen: OpenedScreenEnum.mainScreen,

  hudData: {
    time: '00:00',
    network: 100,
    wifi: 100,
    battery: 60,
  },

  addNewContactPhoneNumber: "",

  //region -------------------- Screens data --------------------
  incomingCall: {}, // incoming call where we can accept/decline
  currentCall: {}, // is calling right now

  settings: {
    isMuted: false,
    cosmetics: {
      theme: "",
      themeImage: "",
    },
    ringtone: "",
  },

  calls: [],

  contacts: [],

  chatsDemo: [], // demo === preview

  selectedChat: {},
  //endregion
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_OPEN: {
      return {
        ...state,
        isPhoneOpened: true,
        lastMessages: action.lastMessages,
        settings: action.settings
      }
    }
    case PHONE_CLOSE: {
      return {
        ...state,
        isPhoneOpened: false
      }
    }
    // from hud
    case SET_PLAYER_AVATAR: {
      return {
        ...state,
        playerAvatar: action.avatar
      }
    }
    case SET_TIME: {
      return {
        ...state,
        hudData: {
          ...state.hudData,
          time: action.time
        }
      }
    }
    case OPEN_SCREEN: {
      return {
        ...state,
        openedScreen: action.openedScreen,
        prevOpenedScreen: state.openedScreen,
      }
    }
    case OPEN_PREV_SCREEN: {
      return {
        ...state,
        incomingCall: {},
        currentCall: {},
        openedScreen: state.prevOpenedScreen,
        prevOpenedScreen: OpenedScreenEnum.mainScreen,
      }
    }
    // to pass to the add new contact screen
    case SET_ADD_NEW_CONTACT_NUMBER: {
      return {
        ...state,
        addNewContactPhoneNumber: action.phoneNumber
      }
    }
    case ADD_NEW_CONTACT: {
      // @ts-ignore
      const {imageName,...newContact} = {...action.newContact}
      return {
        ...state,
        contacts: [newContact,...state.contacts]
      }
    }
    case OPEN_LAST_MESSAGES: {
      return {
        ...state,
        lastMessages: action.lastMessages,
      }
    }
    //region -------------------- Incoming call --------------------
    case OPEN_INCOMING_CALL: {
      return {
        ...state,
        openedScreen: OpenedScreenEnum.incomingCall,
        prevOpenedScreen: state.openedScreen,
        incomingCall: {
          name: action.name,
          imageName: action.imageName,
          phoneNumber: action.phoneNumber
        }
      }
    }
    case ABORT_CALL: {
      return {
        ...state,
        incomingCall: {},
        currentCall: {},
      }
    }
    //endregion
    // current call
    case CURRENT_CALL_CHANGE_OPTION: {
      return {
        ...state,
        currentCall: {
          ...state.currentCall,
          [action.optionTitle]: action.optionValue
        },
      }
    }
    case OPEN_CALL: {
      return {
        ...state,
        incomingCall: {},
        openedScreen: OpenedScreenEnum.currentCall,
        // coz can be redirected from incoming call
        prevOpenedScreen: action.saveLastScreen ? state.openedScreen : state.prevOpenedScreen,
        currentCall: action.callData
      }
    }
    //region -------------------- Settings --------------------
    case SET_SETTINGS: {
      return {
        ...state,
        settings: {
          isMuted: action.isMuted,
          cosmetics: action.cosmetics,
          ringtone: action.ringtone,
        }
      }
    }
    // single setting
    case SET_SETTING: {
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.settingTitle]: action.settingValue,
        }
      }
    }
    case SET_COSMETIC_SETTING: {
      return {
        ...state,
        settings: {
          ...state.settings,
          cosmetics: {
            ...state.settings.cosmetics,
            [action.settingTitle]: action.settingValue,
          }
        }
      }
    }
    case SET_RINGTONE: {
      return {
        ...state,
        setitngs: {
          ...state.settings,
          ringtone: action.ringtone
        }
      }
    }

    //endregion
    case SET_CALLS: {
      return {
        ...state,
        calls: action.calls
      }
    }
    case SET_CONTACTS: {
      return {
        ...state,
        contacts: action.contacts
      }
    }
    case SET_CHATS_DEMO: {
      return {
        ...state,
        chatsDemo: action.chatsDemo,
      }
    }
    case SET_SELECTED_CHAT: {
      return {
        ...state,
        selectedChat: {
          ...state.selectedChat,
          ...action.chatData
        }
      }
    }
    case SET_LAST_OUTCOMING_MESSAGE: {
      let newChatsDemo: ChatsDemoInterface[] = [
        ...state.chatsDemo
      ]
      // idx only inside array, not id field
      const selectedChatIdx = newChatsDemo.findIndex(chatDemo => chatDemo.id === action.chatId);
      // @ts-ignore
      const selectedChat: SelectedChatInterface = {...state.selectedChat};

      const currentDate = new Date();
      const dateObj: DateObjectInterface = {
        minutes: currentDate.getMinutes().toString().padStart(2,'0'),
        hours: currentDate.getHours().toString().padStart(2,'0'),
        day: currentDate.getDate().toString().padStart(2,'0'),
        month: (currentDate.getMonth() + 1).toString().padStart(2,'0'),
        year: currentDate.getFullYear().toString()
      }

      const newSelectedChat: SelectedChatInterface = {
        ...selectedChat,
        messages: [
          ...selectedChat.messages,
          {
            id: (+selectedChat.messages[selectedChat.messages.length - 1].id + 1).toString(),
            direction: 'out',
            date: dateObj,
            message: action.message
          }
        ]
      }

      newChatsDemo = [
        ...newChatsDemo.slice(0, selectedChatIdx),
        {id: action.chatId, name: selectedChat.name, imageName: selectedChat.avatarName,
        unreadMessages: 0, lastMessage: action.message, lastMessageDate: dateObj},
        ...newChatsDemo.slice(selectedChatIdx + 1)
      ]

      return {
        ...state,
        // todo
        selectedChat: newSelectedChat,
        chatsDemo: newChatsDemo
      }
    }
    case REMOVE_SELECTED_CHAT: {
      return {
        ...state,
        selectedChat: {}
      }
    }
    default: {
      return state;
    }
  }
}
export {
  OpenedScreenEnum,

  IncomingCallInterface,
  CurrentCallInterface,

  SettingsInterface,
  CallsInterface,
  ContactInterface,
  ChatsDemoInterface,
  ChatMessageInterface,
}
