module.exports = (env) => {
  const cfg = require(`./webpackConf.${Object.keys(env)[0]}.js`);
  return cfg;
};
