import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const assetsLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g)$/,
        type: 'asset/resource'
    }
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const scssLoader: webpack.RuleSetRule = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => resPath.includes('.module.'),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
                        },
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    return [
        typescriptLoader,
        scssLoader,
        svgLoader,
        assetsLoader
    ]
}
