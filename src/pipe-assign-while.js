const invokeOrReturn = require('./invoke-or-return');

module.exports = (predicate, ...funs) => {

    return Object.values(funs).flat().reduce((acc, fun) => {
        return predicate(acc) ? { ...acc, ...invokeOrReturn(fun, acc) } : acc;
    }, {});

};
