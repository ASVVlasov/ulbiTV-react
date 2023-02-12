declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const ClassName: IClassNames;
    export = ClassName;
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
