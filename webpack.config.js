import fs from "fs";

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const config = {
    entry: "./src/index.js",
    devtool: "hidden-source-map",
    externals: nodeModules,
    output: {

    }
};

export default config;
