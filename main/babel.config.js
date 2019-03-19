module.exports = api => {
  const presets = [
    '@babel/preset-react'
  ];
  const plugins = [];

  api.cache(false);

  return {
    presets,
    plugins
  };
};
