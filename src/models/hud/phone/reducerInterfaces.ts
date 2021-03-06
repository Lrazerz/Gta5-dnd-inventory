import { ThemesEnum } from './enums';

// id is almost always are phone number

interface DateObjectInterface {
  minutes: string;
  hours: string;
  day: string;
  month: string;
  year: string;
}

// last messages (mainScreen)
interface LastMessageInterface {
  id: string;
  name: string;
  imageName: string;
  date: DateObjectInterface;
  message: string;
}

interface PhoneHudDataInterface {
  time: string;
  network: number;
  wifi: number;
  battery: number;
}

interface IncomingCallInterface {
  name: string;
  imageName: string;
  phoneNumber: string;
}

interface CurrentCallInterface {
  // call right now
  name: string; // caller name
  imageName: string;
  phoneNumber: string; // phone number
  // isConference: boolean; // conference call
  isMuted: boolean;
  // isNoted: boolean;
  speaker: boolean; // is speaker enabled (players around can hear your interlocutor)
  // keyboard: boolean;
  isRecording: boolean;
}

//region -------------------- Settings interfaces --------------------

interface CosmeticsSettingsInterface {
  // light or dark
  theme: ThemesEnum;
  // theme image
  themeImage: string;
}

interface SettingsInterface {
  isMuted: boolean; // don't disturb mode
  cosmetics: CosmeticsSettingsInterface;
  ringtone: string;
}

//endregion

// recent calls list
interface CallsInterface {
  id: string;
  name: string;
  imageName: string;
  status: string; // входящий / исходящий / пропущенный
  date: DateObjectInterface;
  phoneNumber: string;
}

interface ContactInterface {
  id: string;
  name: string;
  imageName: string;
}

interface ChatsDemoInterface {
  id: string;
  name: string;
  imageName: string;
  unreadMessages: number;
  lastMessage: string;
  lastMessageDate: DateObjectInterface;
}

interface SelectedChatInterface {
  id: string;
  name: string;
  avatarName: string;
  messages: ChatMessageInterface[];
}

// imageNames?
interface ChatMessageInterface {
  id: string;
  direction: 'in' | 'out'; // in or out
  date: DateObjectInterface;
  message: string;
}

export {
  DateObjectInterface,
  // mainScreen only
  LastMessageInterface,
  PhoneHudDataInterface,
  // settings interfaces
  ThemesEnum,
  CosmeticsSettingsInterface,
  SettingsInterface,
  // screens
  IncomingCallInterface,
  CurrentCallInterface,
  CallsInterface,
  ContactInterface,
  ChatsDemoInterface,
  SelectedChatInterface,
  ChatMessageInterface,
};
