export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(t|j)sx?$": [
      "babel-jest",
      {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                node: true,
              },
            },
          ],
          "@babel/preset-typescript",
        ],
        plugins: [
          "@vue/babel-plugin-jsx",
          "@babel/plugin-proposal-class-properties",
        ],
      },
    ],
  },
  testRegex: "(/tests/.*.(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["(tests/.*.mock).(jsx?|tsx?)$"],
  verbose: true,
};
