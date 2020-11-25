
const mpTrigger_phone_openSettings = () => {
  console.log('mp trig phone openSet');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openSettings');
  } catch (e) {}
}

const mpTrigger_phone_openOutComingCall = () => {
  console.log('mp trig phone openOutComingCall');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openOutComingCall');
  } catch (e) {}
}

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

const mpTrigger_phone_openSingleChat = () => {
  console.log('mp trig phone openSingleChat');
  try {
    // @ts-ignore
    mp.trigger('cef_cl_phone_openChat');
  } catch (e) {}
}

export {
  mpTrigger_phone_openSettings,
  mpTrigger_phone_openOutComingCall,

  mpTrigger_phone_openCalls,
  mpTrigger_phone_openContacts,
  mpTrigger_phone_openChats,

  mpTrigger_phone_openSingleChat
}