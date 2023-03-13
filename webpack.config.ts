import path from 'path';
import type webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type IBuildEnv, type IBuildPaths } from './config/build/types/config';

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };
  const mode = env.mode ?? 'development';
  const port = env.port ?? 3000;
  const baseUrl = env.baseUrl ?? 'http://localhost:5000/';

  const isDev = mode === 'development';
  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    baseUrl,
  });
};
