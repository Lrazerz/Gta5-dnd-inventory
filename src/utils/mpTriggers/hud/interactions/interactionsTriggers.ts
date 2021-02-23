// user opened interaction, server should invoke closeInteractions() on window
const mpTrigger_interactions_openInteraction = (interactionName: string) => {
  try {
    console.log('cef_cl_openInteraction', interactionName);
    mp.trigger('cef_cl_openInteraction', interactionName);
  } catch (e) {}
};

// cross pressed
const mpTrigger_interactions_closeInteractions = () => {
  console.log('close interactions trigger');
  try {
    mp.trigger('cef_cl_closeInteractions');
  } catch (e) {}
};

export { mpTrigger_interactions_openInteraction, mpTrigger_interactions_closeInteractions };
