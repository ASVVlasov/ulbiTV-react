import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type IBuildOptions } from './types/config';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    const a = 5;
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
