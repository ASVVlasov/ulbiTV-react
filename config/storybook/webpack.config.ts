import path from 'path';
import type webpack from 'webpack';
import { type Configuration, DefinePlugin, type RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }): webpack.Configuration => {
  config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'));
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));
  // @ts-expect-error disable test check
  config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    // @ts-expect-error disable test check
    if (/svg/.test(rule.test)) {
      return { ...rule, exclude: /\.svg/i };
    }

    return rule;
  });
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(false),
    }),
  );
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
};
