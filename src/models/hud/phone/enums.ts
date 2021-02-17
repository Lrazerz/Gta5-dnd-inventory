enum OpenedScreenEnum {
  mainScreen,
  settings,
  settings_changeCosmetics,
  settings_changeRingtone,

  incomingCall, // incoming call where we can accept / decline
  currentCall, // accepted or outcoming call

  selectedChat,
  phoneTyping,
  calls,
  contacts,
  chats,

  addNewContact,
}

enum ThemesEnum {
  white,
  black,
}

const PlayerAvatarsArray = [
  'avatar1',
  'avatar2',
  'avatar3',
  'avatar4',
  'avatar5',
  'avatar6',
  'avatar7',
  'avatar8',
  'avatar9',
];

const ThemesArray = ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7', 'theme8', 'theme9'];

const RingtonesArray = [
  'ringtone1sssssssssssssssssssssssssssssssss',
  'ringtone2',
  'ringtone3',
  'ringtone4',
  'ringtone5',
  'ringtone6',
  'ringtone7',
  'ringtone8',
  'ringtone9',
];

export { OpenedScreenEnum, ThemesEnum, PlayerAvatarsArray, ThemesArray, RingtonesArray };
