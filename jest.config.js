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
  testPathIgnorePatterns: ["/node_modules/", ".*\\.screenshot\\.test\\.ts$"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};

module.exports = config;
