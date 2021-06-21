module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          containers: './src/containers',
          navigators: './src/navigators',
          assets: './src/assets',
          utils: './src/utils',
          routes: './src/routes',
          translations: './src/translations',
          store: './src/store',
          types: './src/types',
          api: './src/api',
          core: './src/core',
        },
      },
    ],
  ],
};