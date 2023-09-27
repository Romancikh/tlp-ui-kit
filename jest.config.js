const config = {
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", ".*\\.screenshot\\.test\\.ts$"],
  transform: {
    "^.+\\.(jsx|tsx)?$": "babel-jest",
  },
};

module.exports = config;
