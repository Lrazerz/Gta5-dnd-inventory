enum OpenedScreenEnum {
  mainScreen,
  settings,

  incomingCall, // incoming call where we can accept / decline
  currentCall, // accepted or outcoming call

  selectedChat,
  phoneTyping,
  calls,
  contacts,
  chats,
}

enum ThemesEnum {
  white,
  black
}

export {
  OpenedScreenEnum,
  ThemesEnum
}