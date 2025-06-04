const isPlainFunction = require('./is-plain-function');

module.exports = () => (...funcs) => initial => {

    return funcs.reduce(async (p, f) => {
        const acc = await p;
        return (isPlainFunction(f) ? f(acc) : f) ?? acc; // return undefined to return last acc.
    }, initial);

};
