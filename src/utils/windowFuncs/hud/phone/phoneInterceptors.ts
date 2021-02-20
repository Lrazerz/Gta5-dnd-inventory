import shortId from 'shortid';
import store from '../../../../redux/store';
const dispatch = store.dispatch;
import {
  CallsInterface,
  ChatMessageInterface,
  ChatsDemoInterface,
  ContactInterface,
  CurrentCallInterface,
  DateObjectInterface,
  IncomingCallInterface,
  LastMessageInterface,
  SettingsInterface,
  ThemesEnum,
} from '../../../../models/hud/phone/reducerInterfaces';
import {
  abortCall,
  openCall,
  openIncomingCall,
  openLastMessages,
  phoneClose,
  phoneOpen,
  setCalls,
  setChatsDemo,
  setContacts,
  setSelectedChat,
  setSettings,
} from '../../../../redux/actions/hud/phone';
import { transformDateFromString } from '../../../common/date';

// lastmessages as params
const openPhone = (jsonData) => {
  console.log('window.openPhone');
  const parsedData = JSON.parse(jsonData);
  const transformedLastMessages: LastMessageInterface[] = parsedData.LastMessages.map((lastMessage) => ({
    id: shortId.generate(),
    name: lastMessage.Name,
    imageName: lastMessage.ImageName,
    date: transformDateFromString(lastMessage.Date),
    message: lastMessage.Message,
  }));

  const transformedSettings: SettingsInterface = {
    isMuted: parsedData.Settings.IsMuted,
    cosmetics: {
      theme: parsedData.Settings.Cosmetics.Theme.toLowerCase() === 'light' ? ThemesEnum.white : ThemesEnum.black,
      themeImage: parsedData.Settings.Cosmetics.ThemeImage,
    },
    ringtone: parsedData.Settings.Ringtone,
  };

  // @ts-ignore
  dispatch(phoneOpen(transformedLastMessages, transformedSettings));
};

const closePhone = () => {
  console.log('window.closePhone');
  // @ts-ignore
  dispatch(phoneClose());
};

const phone_openLastMessages = (jsonData) => {
  console.log('window.phone_openLastMessages');
  const parsedData = JSON.parse(jsonData);
  const transformedLastMessages: LastMessageInterface[] = parsedData.map((lastMessage) => ({
    id: shortId.generate(),
    name: lastMessage.Name,
    imageName: lastMessage.ImageName,
    date: transformDateFromString(lastMessage.Date),
    message: lastMessage.Message,
  }));
  // @ts-ignore
  dispatch(openLastMessages(transformedLastMessages));
};

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
  };
  // @ts-ignore
  dispatch(setSettings(transformedSettingsData));
};

//region -------------------- Incoming call funcs --------------------
const phone_openIncomingCall = (jsonData) => {
  console.log('phone_openIncomingCall');
  const parsedData = JSON.parse(jsonData);

  const transformedIncCallData: IncomingCallInterface = {
    name: parsedData.Name,
    imageName: parsedData.ImageName,
    phoneNumber: parsedData.PhoneNumber,
  };
  //@ts-ignore
  dispatch(openIncomingCall(transformedIncCallData));
};

// abort incoming, outcoming, current calls
const phone_abortCall = () => {
  console.log('phone_abortCall');
  //@ts-ignore
  dispatch(abortCall());
};
//endregion

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
  };
  // @ts-ignore
  dispatch(openCall(transformedCurrCallData));
};

//region -------------------- Calls, contacts, chats --------------------
const phone_openCalls = (jsonData) => {
  console.log('window.phone_openCalls');
  const parsedData = JSON.parse(jsonData);

  const transformedCallsData: CallsInterface[] = parsedData.map((call) => {
    return {
      id: shortId.generate(),
      name: call.Name,
      imageName: call.ImageName,
      status: call.Status,
      date: transformDateFromString(call.Date),
      phoneNumber: call.PhoneNumber,
    };
  });
  // @ts-ignore
  dispatch(setCalls(transformedCallsData));
};

const phone_openContacts = (jsonData) => {
  console.log('window.phone_openCalls');
  const parsedData = JSON.parse(jsonData);

  const transformedContactsData: ContactInterface[] = parsedData.map((incomingContact) => {
    return {
      id: incomingContact.PhoneNumber,
      name: incomingContact.Name,
      imageName: incomingContact.ImageName,
    };
  });
  // @ts-ignore
  dispatch(setContacts(transformedContactsData));
};

const phone_openChats = (jsonData) => {
  console.log('window.phone_openContacts');
  const parsedData = JSON.parse(jsonData);

  const transformedChatsData: ChatsDemoInterface[] = parsedData.map((call) => {
    return {
      id: call.PhoneNumber,
      name: call.Name,
      imageName: call.ImageName,
      // count
      unreadMessages: call.UnreadMessages || 0,
      lastMessage: call.LastMessage || '',
      lastMessageDate: call.LastMessageDate ? transformDateFromString(call.LastMessageDate) : null,
    };
  });

  // @ts-ignore
  dispatch(setChatsDemo(transformedChatsData));
};
//endregion

const phone_openSingleChat = (jsonData) => {
  console.log('window.phone_openSingleChat');
  const parsedData = JSON.parse(jsonData);

  const { Name: name, AvatarName: avatarName, Messages: messages } = parsedData;

  const transformedMessages: ChatMessageInterface[] = messages.map((incomingMessage) => {
    return {
      id: shortId.generate(),
      direction: incomingMessage.Direction,
      date: transformDateFromString(incomingMessage.Date),
      message: incomingMessage.Message,
    };
  });

  // @ts-ignore
  dispatch(setSelectedChat({ name, avatarName, messages: transformedMessages }));
};

export {
  openPhone,
  closePhone,
  phone_openIncomingCall,
  phone_abortCall,
  phone_openCurrentCall,
  phone_openLastMessages,
  phone_openSettings,
  phone_openCalls,
  phone_openContacts,
  phone_openChats,
  phone_openSingleChat,
};
