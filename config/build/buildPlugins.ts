import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type IBuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, baseUrl }: IBuildOptions): webpack.WebpackPluginInstance[] {
  const plugins: webpack.WebpackPluginInstance[] = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __BASE_URL__: JSON.stringify(baseUrl),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
  if (isDev) {
    plugins.push(
      new ReactRefreshPlugin({ overlay: false }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerPort: 3500,
      }),
    );
  }

  return plugins;
}
