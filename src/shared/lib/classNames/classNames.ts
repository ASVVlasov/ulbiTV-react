type TMods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: TMods = {},
    additional: Array<string | undefined> = []
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].filter(Boolean).join(' ');
}
