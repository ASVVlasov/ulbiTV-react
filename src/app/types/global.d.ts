declare module '*.module.scss' {
    type IClassNames = Record<string, string>;
    const ClassName: IClassNames;
    export = ClassName;
}

declare module '*.svg' {
    import type React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
