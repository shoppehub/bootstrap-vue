import base from "../../jest.config.base";

// import path from "path"

// const pkg = require(path.resolve(__dirname, "package.json"));

import pkg from "./package.json";

export default {
  ...base,
  name: pkg.name,
  displayName: pkg.name,
};
