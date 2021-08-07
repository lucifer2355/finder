module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          src: "./src",
          stores: "./stores",
          assets: "./assets",
          "app-configs": "./app-configs",
        },
      },
    ],
  ],
};