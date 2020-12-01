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

  addNewContact
}

enum ThemesEnum {
  white,
  black
}


const PlayerAvatarsArray = [
  "avatar1",
  "avatar2",
  "avatar3"
]

export {
  OpenedScreenEnum,
  ThemesEnum,
  PlayerAvatarsArray
}