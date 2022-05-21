const { configure, presets } = require("@eslint-kit/configure");

module.exports = configure({
  presets: [
    presets.typescript({
      // (optional) Project's root
      root: "./",

      // (optional) A path to tsconfig file
      tsconfig: "tsconfig.json",
    }),
    presets.node(),
    presets.prettier(),
  ],
});
