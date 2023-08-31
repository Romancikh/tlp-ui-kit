const config = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(jsx|tsx)?$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
};

module.exports = config;
