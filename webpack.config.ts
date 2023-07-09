import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoader } from "./config/build/buildLoader";
import { buildResolvers } from "./config/build/buildResolvers";
import { BuildWebpackConfig } from "./config/build/BuildWebpackConfig";
import { BuildEnv, BuildParths } from "./config/build/types/config";

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

export default (env: BuildEnv) => {
  const paths: BuildParths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
