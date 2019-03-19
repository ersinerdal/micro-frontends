module.exports = api => {
  const presets = [];
  const plugins = [];

  api.cache(false);

  return {
    presets,
    plugins
  };
};
