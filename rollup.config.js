const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");

module.exports = {
  input: "src/js/index.js",
  output: {
    file: "public/js/bundle.min.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [resolve(), commonjs(), terser()],
};
