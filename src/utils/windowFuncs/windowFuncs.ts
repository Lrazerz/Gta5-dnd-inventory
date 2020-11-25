import store from '../../redux/store';
const dispatch = store.dispatch;
import {
  CallsInterface,
  ChatMessageInterface,
  ChatsDemoInterface,
  ContactInterface, CurrentCallInterface,
  DateObjectInterface,
  IncomingCallInterface,
  SettingsInterface,
  ThemesEnum
} from "../../hud/components/Phone/models/interfaces/reducerInterfaces";
import {
  openCall,
  openIncomingCall,
  setCalls,
  setChatsDemo,
  setContacts,
  setSelectedChat,
  setSettings
} from "../../redux/actions/hud/phone";

let _transformDataFromString: (string) => DateObjectInterface;
_transformDataFromString = (dateString) => {
  const dateArr = dateString.match(/\d+/g);
  return {
    minutes: dateArr[4],
    hours: dateArr[3],
    day: dateArr[0],
    month: dateArr[1],
    year: dateArr[2],
  }
}

const phone_openSettings = (jsonData) => {
  console.log('window.phone_openSettings');
  const parsedData = JSON.parse(jsonData);

  const transformedSettingsData: SettingsInterface = {
    isMuted: parsedData.IsMuted,
    cosmetics: {
      theme: parsedData.Cosmetics.Theme.toLowerCase() === 'light' ? ThemesEnum.white : ThemesEnum.black,
      themeImage: parsedData.Cosmetics.ThemeImage,
    },
    ringtone: parsedData.Ringtone,
  }
  // @ts-ignore
  dispatch(setSettings(transformedSettingsData));
}

// auto open inc screen
const phone_openIncomingCall = (jsonData) => {
  console.log('phone_openIncomingCall');
  const parsedData = JSON.parse(jsonData);

  const transformedIncCallData: IncomingCallInterface = {
    name: parsedData.Name,
    imageName: parsedData.ImageName,
    phoneNumber: parsedData.PhoneNumber,
  }

  //@ts-ignore
  dispatch(openIncomingCall(transformedIncCallData));
}

// open curr call, outcoming call
// auto open curr call screen
const phone_openCurrentCall = (jsonData) => {
  console.log('phone_openCurrentCall');
  const parsedData = JSON.parse(jsonData);

  const transformedCurrCallData: CurrentCallInterface = {
    name: parsedData.Name,
    imageName: parsedData.ImageName,
    phoneNumber: parsedData.PhoneNumber,

    isMuted: parsedData.IsMuted,
    speaker: parsedData.Speaker,
    isRecording: parsedData.IsRecording,
  }
  // @ts-ignore
  dispatch(openCall(transformedCurrCallData));
}

//region -------------------- Calls, contacts, chats --------------------
const phone_openCalls = (jsonData) => {
  console.log('window.phone_openCalls');
  const parsedData = JSON.parse(jsonData).$values;

  const transformedCallsData: CallsInterface[] = parsedData.map(call => {
    return {
      id: call.Id,
      name: call.Name,
      imageName: call.ImageName,
      status: call.Status,
      date: _transformDataFromString(call.Date),
      phoneNumber: call.PhoneNumber,
    }
  });
  // @ts-ignore
  dispatch(setCalls(transformedCallsData));
}

const phone_openContacts = (jsonData) => {
  console.log('window.phone_openCalls');
  const parsedData = JSON.parse(jsonData).$values;

  const transformedContactsData: ContactInterface[] = parsedData.map(incomingContact => {
    return {
      id: incomingContact.Id,
      name: incomingContact.Name,
      imageName: incomingContact.ImageName,
    }
  });
  // @ts-ignore
  dispatch(setContacts(transformedContactsData));
}

const phone_openChats = (jsonData) => {
  console.log('window.phone_openContacts');
  const parsedData = JSON.parse(jsonData).$values;

  const transformedChatsData: ChatsDemoInterface[] = parsedData.map(call => {
    return {
      id: call.Id,
      name: call.Name,
      imageName: call.ImageName,
      // count
      unreadMessages: call.UnreadMessages,
      lastMessage: call.LastMessage,
      lastMessageDate: _transformDataFromString(call.LastMessageDate),
    }
  });

  // @ts-ignore
  dispatch(setChatsDemo(transformedChatsData));
}
//endregion

const phone_openSingleChat = (jsonData) => {
  console.log('window.phone_openSingleChat');
  const parsedData = JSON.parse(jsonData);

  const transformedChatData: ChatMessageInterface[] = parsedData.map(incomingMessage => {
    return {
      id: incomingMessage.Id,
      direction: incomingMessage.Direction,
      date: _transformDataFromString(incomingMessage.Date),
      message: incomingMessage.Message,
    };
  });

  // @ts-ignore
  dispatch(setSelectedChat(transformedChatData));
}

export {
  phone_openIncomingCall,
  phone_openCurrentCall,

  phone_openSettings,

  phone_openCalls,
  phone_openContacts,
  phone_openChats,
  phone_openSingleChat,

}

