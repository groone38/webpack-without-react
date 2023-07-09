import webpack from "webpack";

export function buildLoader(): webpack.RuleSetRule[] {
  const typscriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [typscriptLoader];
}
