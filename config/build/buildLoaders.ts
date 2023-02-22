import type webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { type IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const assetsLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|ttf)$/,
        type: 'asset/resource',
    };
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [typescriptLoader, buildCssLoader(isDev), svgLoader, assetsLoader];
}
