import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoader } from "./buildLoader";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function BuildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev, port } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
