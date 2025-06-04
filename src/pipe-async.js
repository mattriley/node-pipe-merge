const isPlainFunction = require('./is-plain-function');

module.exports = (...funs) => initial => {

    return funs.reduce(async (p, f) => {
        const acc = await p;
        return (isPlainFunction(f) ? f(acc) : f) ?? acc; // return undefined to return last acc.
    }, initial);

};
