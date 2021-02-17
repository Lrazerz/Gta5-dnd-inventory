const mpTrigger_corporations_openTab = (tabTitle: string) => {
  console.log('mpTrigger_corporations_openTab', tabTitle);
  try {
    // @ts-ignore
    mp.trigger('cef_cl_corporations_openTab', tabTitle);
  } catch (e) {}
};

export { mpTrigger_corporations_openTab };
