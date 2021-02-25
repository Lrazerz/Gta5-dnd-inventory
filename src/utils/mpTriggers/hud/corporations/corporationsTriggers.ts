const mpTrigger_corporations_openTab = (tabTitle: string) => {
  console.log('mpTrigger_corporations_openTab', tabTitle);
  try {
    mp.trigger('cef_cl_corporations_openTab', tabTitle);
  } catch (e) {}
};

const mpTrigger_corporations_close = () => {
  console.log('cef_cl_corporations_close');
  try {
    mp.trigger('cef_cl_corporations_close');
  } catch (e) {}
};

export { mpTrigger_corporations_openTab, mpTrigger_corporations_close };
