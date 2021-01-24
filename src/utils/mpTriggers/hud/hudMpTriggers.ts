import {
  CorporationsPermissionsTabsEnum,
  CorporationsTabsDict,
  CorporationsTabsEnum, CorporationsPermissionsTabsDict
} from "../../../hud/models/corporations/enums";

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
  console.log('close interactions trigger')
  try {
    // @ts-ignore
    mp.trigger('cef_cl_closeInteractions');
  } catch (e) {}
}
//endregion

//region -------------------- Corporations triggers --------------------

const mpTrigger_corporations_openTab = (tabTitle: string) => {
  console.log('mpTrigger_corporations_openTab', tabTitle);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_corporations_openTab', tabTitle);
  } catch (e) {}
}

// tab permissions
const mpTrigger_corporations_permissions_selectRole = (roleTitle: string) => {
  console.log('mpTrigger_corporations_permissions_selectRole', CorporationsTabsDict.permissions, roleTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      RoleTitle: roleTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_selectRole', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_removeRole = (roleTitle: string) => {
  console.log('remove cef_cl_corporations_permissions_removeRole', CorporationsTabsDict.permissions, roleTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      RoleTitle: roleTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_removeRole', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_changePermission =
  (openedRoleTitle: string, setTitle: string, permissionTitle: string, value: boolean) => {
  console.log('mpTrigger_corporations_permissions_changePermission',
    CorporationsTabsDict.permissions, openedRoleTitle, setTitle, permissionTitle, value)
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedRole: openedRoleTitle,
      SetTitle: setTitle,
      PermissionTitle: permissionTitle,
      Value: value
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_changePermission', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_openTab = (openedRoleTitle: string, tabTitle: string) => {
  console.log('cef_cl_corporations_permissions_openTab', 'openedRole', openedRoleTitle, 'openedTab', tabTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedRole: openedRoleTitle,
      OpenedPermissionsTab: tabTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_openTab', data);
  } catch (e) {}
}

//region auto sub tab ("Техника")
const mpTrigger_corporations_permissions_auto_selectModel = (openedRoleTitle: string, modelTitle: string) => {
  console.log(`cef_cl_corporations_permissions_auto_selectModel. Role: ${openedRoleTitle}. 
  openedTab: ${CorporationsTabsDict.permissions}. openedPermissionsTab: ${CorporationsPermissionsTabsDict.auto}. 
  model: ${modelTitle}`);
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      Model: modelTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_auto_selectModel', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_auto_changeOption = (openedRoleTitle: string, selectedModel: string, optionTitle: string,
                                                              optionValue: string | boolean) => {
  console.log('cef_cl_corporations_permissions_auto_changeOption', openedRoleTitle, CorporationsTabsDict.permissions,
    CorporationsPermissionsTabsDict.auto, selectedModel, optionTitle, optionValue)
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      OpenedModel: selectedModel,
      OptionTitle: optionTitle,
      OptionValue: optionValue
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_auto_changeOption', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_auto_changePermission = (openedRoleTitle, selectedModel: string, permissionTitle: string,
                                                                  value: string | boolean) => {
  console.log('cef_cl_corporations_permissions_auto_changePermission', openedRoleTitle, CorporationsTabsDict.permissions,
    CorporationsPermissionsTabsDict.auto, selectedModel, permissionTitle, value);
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      OpenedModel: selectedModel,
      Permission: permissionTitle,
      Value: value
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_auto_changePermission', data);
  } catch (e) {}
}
//endregion
//region corporations permissionsTab propertyTab

// office tab
// const mpTrigger_permissions_property_office_changeOption = (optionTitle, optionValue) => {
//   console.log('cef_cl_corporations_permissions_auto_changeOption', );
//   try {
//     const data = JSON.stringify({
//       OpenedTab: CorporationsTabsDict.permissions,
//       OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
//       OpenedModel: selectedModel,
//       OptionTitle: optionTitle,
//       OptionValue: optionValue
//     })
//     // @ts-ignore
//     mp.trigger('cef_cl_corporations_permissions_auto_changeOption', data);
//   } catch (e) {}
// }

//endregion
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
  mpTrigger_phone_sendMessage,
  mpTrigger_phone_removeSingleChat,

  mpTrigger_phone_addNewContact,

  // interaction triggers
  mpTrigger_interactions_openInteraction,
  mpTrigger_interactions_closeInteractions,

  // corporations triggers
  mpTrigger_corporations_openTab,
  mpTrigger_corporations_permissions_selectRole,
  mpTrigger_corporations_permissions_removeRole,
  mpTrigger_corporations_permissions_changePermission,
  mpTrigger_corporations_permissions_openTab,

  mpTrigger_corporations_permissions_auto_selectModel,
  mpTrigger_corporations_permissions_auto_changeOption,
  mpTrigger_corporations_permissions_auto_changePermission
}