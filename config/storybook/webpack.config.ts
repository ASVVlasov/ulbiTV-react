import { type RuleSetRule, type Configuration } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
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
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    return config;
};
