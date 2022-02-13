export const colorify = (() => {
    const getColorsEnabled = () => {
        const colorsEnabled = (<any>colorify).enabled;
        return (typeof colorsEnabled === 'undefined' && typeof process !== 'undefined')
            ? true
            : !!colorsEnabled;
    };
    return (s: string) => getColorsEnabled() ? '\u001b[35m' + s + '\u001b[39m' : s;
})();

export const enableColors = (colors?: boolean): void => {
    (<any>colorify).enabled = colors;
};
