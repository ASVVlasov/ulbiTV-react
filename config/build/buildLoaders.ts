import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const assetsLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g)$/,
        type: 'asset/resource',
    };
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [typescriptLoader, buildCssLoader(isDev), svgLoader, assetsLoader];
}
