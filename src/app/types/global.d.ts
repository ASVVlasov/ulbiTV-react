declare module '*.module.scss' {
    type TClassNames = Record<string, string>;
    const ClassName: TClassNames;
    export = ClassName;
}

declare module '*.svg' {
    import type React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
