module.exports = {
     testEnvironment: "jest-environment-jsdom",
     setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
     moduleNameMapper: {
          "^@/(.*)$": "<rootDir>/$1",
     },
     transform: {
          "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transpile JS and TS files using Babel
     },
};
