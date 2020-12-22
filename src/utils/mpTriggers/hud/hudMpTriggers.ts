//region -------------------- Phone triggers --------------------
// mainScreen, 3 messages

const mpTrigger_phone_openLastMessages = () => {
  console.log('mp trig phone openLastMessages');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openLastMessages');
  } catch (e) {}
}

//region -------------------- Settings --------------------
const mpTrigger_phone_openSettings = () => {
  console.log('mp trig phone openSet');
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
  console.log('mp trig phone changeSetting', translateOptionToUpper(settingTitle), value);
  // todo translate to UpperCase first l
  const obj = {SettingTitle: translateOptionToUpper(settingTitle), SettingValue: value};
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_changeSetting', JSON.stringify(obj));
  } catch (e) {}
}
//endregion


const mpTrigger_phone_openCalls = () => {
  console.log('mp trig phone openCalls');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openCalls');
  } catch (e) {}
}

const mpTrigger_phone_openContacts = () => {
  console.log('mp trig phone openContacts');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openContacts');
  } catch (e) {}
}

const mpTrigger_phone_openChats = () => {
  console.log('mp trig phone openChats');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openChats');
  } catch (e) {}
}

//region -------------------- Single chat --------------------
const mpTrigger_phone_openSingleChat = (id) => {
  console.log('mp trig phone openSingleChat', id);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openChat', id);
  } catch (e) {}
}

const mpTrigger_phone_removeSingleChat = (id) => {
  console.log('mp trig phone removeSingleChat', id);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_removeChat', id);
  } catch (e) {}
}

//endregion

//region -------------------- Incoming call actions--------------------
const mpTrigger_phone_acceptCall = (phoneNumber: string) => {
  console.log('mp trig phone acceptCall');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_acceptCall', JSON.stringify(phoneNumber));
  } catch (e) {}
}

const mpTrigger_phone_declineCall = () => {
  console.log('mp trig phone declineCall');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_declineCall');
  } catch (e) {}
}
//endregion

//region -------------------- Outcoming, current call --------------------
const mpTrigger_phone_openOutComingCall = (phoneNumber: string) => {
  console.log('mp trig phone openOutComingCall', phoneNumber);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openOutComingCall', phoneNumber);
  } catch (e) {}
}
// abort current call
const mpTrigger_phone_abortCall = () => {
  console.log('mp trig phone abortCall');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_abortCall');
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

  console.log('mp trig phone changeCurrentCallOption', translateOptionToUpper(optionTitle), value);
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

//region -------------------- Interaction Triggers --------------------
// user opened interaction, server should invoke closeInteractions() on window
const mpTrigger_interactions_openInteraction = (interactionName: string) => {
  try {
    // @ts-ignore
    mp.trigger('cef_cl_openInteraction', interactionName);
  } catch (e) {}
}

// cross pressed
const mpTrigger_interactions_closeInteractions = () => {
  try {
    // @ts-ignore
    mp.trigger('cef_cl_closeInteractions');
  } catch (e) {}
}
//endregion

export {
  // phone triggers
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
  mpTrigger_phone_removeSingleChat,

  mpTrigger_phone_addNewContact,

  // interaction triggers
  mpTrigger_interactions_openInteraction,
  mpTrigger_interactions_closeInteractions,
}