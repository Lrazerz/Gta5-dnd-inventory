//region -------------------- Phone triggers --------------------
// mainScreen, 3 messages
// id is almost always are phone number
const mpTrigger_phone_openLastMessages = () => {
  console.log('cef_cl_phone_openLastMessages');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openLastMessages');
  } catch (e) {}
}

//region -------------------- Settings --------------------
const mpTrigger_phone_openSettings = () => {
  console.log('cef_cl_phone_openSettings');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openSettings');
  } catch (e) {}
}

const mpTrigger_phone_changeSetting = (settingTitle: string, value: boolean | string) => {
  const translateOptionToUpper = (settingTitle) => {
    switch(settingTitle) {
      case 'isMuted': {
        return 'IsMuted';
      }
      case 'theme': {
        return 'Theme';
      }
      case 'themeImage': {
        return 'ThemeImage';
      }
      case 'ringtone': {
        return 'Ringtone';
      }
    }
  }
  console.log('cef_cl_phone_changeSetting', translateOptionToUpper(settingTitle), value);
  // todo translate to UpperCase first l
  const obj = {SettingTitle: translateOptionToUpper(settingTitle), SettingValue: value};
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_changeSetting', JSON.stringify(obj));
  } catch (e) {}
}
//endregion


const mpTrigger_phone_openCalls = () => {
  console.log('cef_cl_phone_openCalls');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openCalls');
  } catch (e) {}
}

const mpTrigger_phone_openContacts = () => {
  console.log('cef_cl_phone_openContacts');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openContacts');
  } catch (e) {}
}

const mpTrigger_phone_openChats = () => {
  console.log('cef_cl_phone_openChats');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openChats');
  } catch (e) {}
}

//region -------------------- Single chat --------------------
const mpTrigger_phone_openSingleChat = (id: string) => {
  console.log('cef_cl_phone_openChat', id);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openChat', id);
  } catch (e) {}
}

const mpTrigger_phone_sendMessage = (chatId: string, message: string) => {
  console.log('cef_cl_phone_sendMessage', JSON.stringify({PhoneNumber: chatId, Message: message}));
  try {
    const dataJSON = JSON.stringify({PhoneNumber: chatId, Message: message});
    // @ts-ignore
    mp.trigger('cef_cl_phone_sendMessage', dataJSON);
  } catch (e) {}
}

const mpTrigger_phone_removeSingleChat = (id) => {
  console.log('cef_cl_phone_removeChat', id);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_removeChat', id);
  } catch (e) {}
}

//endregion

//region -------------------- Incoming call actions--------------------
const mpTrigger_phone_acceptCall = (phoneNumber: string) => {
  console.log('cef_cl_phone_acceptCall', '+' + phoneNumber);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_acceptCall', '+' + phoneNumber);
  } catch (e) {}
}

const mpTrigger_phone_declineCall = (phoneNumber: string) => {
  console.log('cef_cl_phone_declineCall', '+' + phoneNumber);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_declineCall', '+' + phoneNumber);
  } catch (e) {}
}
//endregion

//region -------------------- Outcoming, current call --------------------
const mpTrigger_phone_openOutComingCall = (phoneNumber: string) => {
  console.log('cef_cl_phone_openOutComingCall', phoneNumber);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openOutComingCall', phoneNumber);
  } catch (e) {}
}
// abort current call
const mpTrigger_phone_abortCall = (phoneNumber: string) => {
  console.log('cef_cl_phone_abortCall', phoneNumber);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_abortCall', phoneNumber);
  } catch (e) {}
}

const mpTrigger_phone_changeCurrentCallOption = (optionTitle: string, value: boolean) => {
  const translateOptionToUpper = (optionTitle) => {
    switch(optionTitle) {
      case 'isMuted': {
        return 'IsMuted';
      }
      case 'speaker': {
        return 'Speaker';
      }
      case 'isRecording': {
        return 'IsRecording';
      }
    }
  }

  console.log('cef_cl_phone_changeCurrentCallOption', translateOptionToUpper(optionTitle), value);
  // todo translate to UpperCase first l
  const obj = {OptionTitle: translateOptionToUpper(optionTitle), OptionValue: value};
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_changeCurrentCallOption', JSON.stringify(obj));
  } catch (e) {}
}
//endregion

//region -------------------- Add new contact --------------------
const mpTrigger_phone_addNewContact = (newContact) => {
  const obj = {Name: newContact.name,
    ImageName: newContact.imageName, PhoneNumber: newContact.phoneNumber};

  console.log('cef_cl_phone_addNewContact', obj);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_addNewContact', JSON.stringify(obj));
  } catch (e) {}
}
//endregion

//endregion

export {
  mpTrigger_phone_openLastMessages,
  mpTrigger_phone_openSettings,
  mpTrigger_phone_changeSetting,

  mpTrigger_phone_openOutComingCall,
  mpTrigger_phone_abortCall,
  mpTrigger_phone_changeCurrentCallOption,

  mpTrigger_phone_acceptCall,
  mpTrigger_phone_declineCall,

  mpTrigger_phone_openCalls,
  mpTrigger_phone_openContacts,
  mpTrigger_phone_openChats,

  mpTrigger_phone_openSingleChat,
  mpTrigger_phone_sendMessage,
  mpTrigger_phone_removeSingleChat,

  mpTrigger_phone_addNewContact
}