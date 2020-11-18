import {OpenedScreenEnum} from "../../../redux/reducers/phone";

let translateToRussianOpenedScreen: (openedScreenEng: OpenedScreenEnum) => string;
translateToRussianOpenedScreen = (openedScreenEng: OpenedScreenEnum) => {
  switch(openedScreenEng) {
    case OpenedScreenEnum.phoneTyping: {
      return 'Набор'
    }
    case OpenedScreenEnum.calls: {
      return 'Последние'
    }
    case OpenedScreenEnum.contacts: {
      return 'Контакты'
    }
    case OpenedScreenEnum.chats: {
      return 'Чаты'
    }
    default: {
      return 'undefined'
    }
  }
}

export {translateToRussianOpenedScreen}