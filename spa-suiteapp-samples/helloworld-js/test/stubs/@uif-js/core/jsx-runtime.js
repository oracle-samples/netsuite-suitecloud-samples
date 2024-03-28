function jsx(type, config, key = null) {
    const {ref = null, ...props} = config ?? {};
    return {
        type,
        key,
        ref,
        props,
    };
}
const jsxs = jsx;

export {
    jsx,
    jsxs,
};