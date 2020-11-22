import {
  OPEN_CALL,
  OPEN_INCOMING_CALL,
  OPEN_SCREEN,
  SET_CALLS,
  SET_CHATS_DEMO,
  SET_CONTACTS,
  SET_SELECTED_CHAT,
  SET_SETTING_MUTED,
  SET_SETTINGS,
} from "../../actions/hud/types";
import {
  CallsInterface, ChatMessageInterface, ChatsDemoInterface, ContactInterface,
  CurrentCallInterface,
  PhoneHudDataInterface,
  IncomingCallInterface,
  SettingsInterface
} from "../../../hud/components/Phone/models/interfaces/reducerInterfaces";
import {OpenedScreenEnum, ThemesEnum} from "../../../hud/components/Phone/models/interfaces/enums";

interface InitialStateInterface {
  // to display in chats
  playerAvatar: string,

  openedScreen: OpenedScreenEnum;

  hudData: PhoneHudDataInterface;

  //region -------------------- Screens data --------------------
  incomingCall: {} | IncomingCallInterface; // incoming call where we can accept/decline
  currentCall: {} | CurrentCallInterface; // is calling right now

  settings: SettingsInterface;

  calls: CallsInterface[];

  contacts: ContactInterface[];

  chatsDemo: ChatsDemoInterface[]; // demo === preview

  selectedChat: {
    name: string,
    avatarName: string,
    messages: ChatMessageInterface[];
  }
  //endregion
}

const initialState: InitialStateInterface = {
  playerAvatar: 'avatar1',
  openedScreen: OpenedScreenEnum.selectedChat,

  hudData: {
    time: '12:05',
    network: 100,
    wifi: 100,
    battery: 50
  },

  //region -------------------- Screens data --------------------
  incomingCall: {
    imageName: 'avatar1',
    name: 'John Cooper',
    phoneNumber: '+70239239210'
  },

  currentCall: {
    name: 'John Cooper',
    imageName: 'avatar1',
    phoneNumber: '+70239239210',
    isConference: false,
    isNoted: false,
    isMuted: true,
    speaker: false,
    keyboard: false,
    isRecording: true,
  },

  settings: {
    isMuted: false,
    cosmetics:
      {
        theme: ThemesEnum.white,
        themeImage: 'theme1',
      },
    ringtone: {},
  },

  calls: [
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar5',
      status: 'Входящий',
      //00.00.0000@00:00
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '2',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Пропущенный',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '3',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '4',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '5',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '6',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '7',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '8',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '9',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '10',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '11',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '12',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '13',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '14',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    },
    {
      id: '15',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      status: 'Входящий',
      date:{minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
      phoneNumber: '+88005553535',
    }
  ],

  contacts: [
    {
      id: '1',
      name: 'Jimmy Jones',
      imageName: 'avatar5',
    },
    {
      id: '2',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '3',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '4',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '5',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '6',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '7',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '8',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '9',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '10',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '11',
      name: 'Jimmy Jones',
      imageName: 'avatar2',
    },
    {
      id: '12',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '13',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
    {
      id: '14',
      name: 'Jimmy Jones',
      imageName: 'avatar1',
    },
  ],

  chatsDemo: [
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar5',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '2',
      name: 'Lora',
      imageName: 'avatar3',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Eddie',
      imageName: 'avatar4',
      unreadMessages: 0,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 999,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
    {
      id: '1',
      name: 'Jimmy Jonson',
      imageName: 'avatar1',
      unreadMessages: 6,
      lastMessage: ' Таким образом укрепление и развитие структуры играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.\n' +
        '\n' +
        'Товарищи! укрепление и развитие структуры требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. ',
      lastMessageDate: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
    },
  ],
  selectedChat: {
    name: 'Дядя Бобби Д.',
    avatarName: 'avatar1',
    messages: [
      {
        id: '1',
        direction: 'in',
        date: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
        message: 'Таким образом укрепление\nи развитие\nструктуры играет важную роль\nв формировании\nсистем массового участия.\nЗначимость этих проблем\nнастолько очевидна,\nчто консультация\nс широким активом\nвлечет за собой процесс',
      },
      {
        id: '2',
        direction: 'out',
        date: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
        message: 'Таким образом укрепление\nи развитие\nструктуры играет важную роль\nв формировании\nсистем массового участия.\nЗначимость этих проблем\nнастолько очевидна,\nчто консультация\nс широким активом\nвлечет за собой процесс',
      },
      {
        id: '3',
        direction: 'in',
        date: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
        message: 'Таким образом укрепление\nи развитие\nструктуры играет важную роль\nв формировании\nсистем массового участия.\nЗначимость этих проблем\nнастолько очевидна,\nчто консультация\nс широким активом\nвлечет за собой процесс',
      },
      {
        id: '4',
        direction: 'out',
        date: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
        message: 'Таким образом укрепление\nи развитие\nструктуры играет важную роль\nв формировании\nсистем массового участия.\nЗначимость этих проблем\nнастолько очевидна,\nчто консультация\nс широким активом\nвлечет за собой процесс',
      },
      {
        id: '5',
        direction: 'in',
        date: {minutes: '52', hours: '17', day: '21', month: '01', year: '2020'},
        message: 'Таким образом укрепление\nи развитие\nструктуры играет важную роль\nв формировании\nсистем массового участия.\nЗначимость этих проблем\nнастолько очевидна,\nчто консультация\nс широким активом\nвлечет за собой процесс',
      },
    ]
  },
  //endregion
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SCREEN: {
      return {
        ...state,
        openedScreen: action.openedScreen,
      }
    }
    case OPEN_INCOMING_CALL: {
      return {
        ...state,
        incomingCall: {
          name: action.name,
          imageName: action.imageName,
          phoneNumber: action.phoneNumber
        }
      }
    }
    case OPEN_CALL: {
      return {
        ...state,
        currentCall: {
          name: action.name,
          imageName: action.imageName,
          phoneNumber: action.phoneNumber,
          isConference: action.isConference,
          isMuted: action.isMuted,
          isNoted: action.isNoted,
          speaker: action.speaker,
          keyboard: action.keyboard,
          isRecording: action.isRecording,
        }
      }
    }
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
        selectedChat: action.selectedChat,
      }
    }
    case SET_SETTING_MUTED: {
      return {
        ...state,
        settings: {
          ...state.settings,
          isMuted: action.newState,
        }
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