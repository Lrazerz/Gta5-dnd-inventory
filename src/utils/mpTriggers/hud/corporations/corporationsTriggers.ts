const mpTrigger_corporations_openTab = (tabTitle: string) => {
  console.log('mpTrigger_corporations_openTab', tabTitle);
  try {
    mp.trigger('cef_cl_corporations_openTab', tabTitle);
  } catch (e) {}
};

export { mpTrigger_corporations_openTab };
