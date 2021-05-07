import base from "./jest.config.base";

export default {
  ...base,
  projects: ["<rootDir>/packages/*/jest.config.js"],
  coverageDirectory: "<rootDir>/coverage/",
};
