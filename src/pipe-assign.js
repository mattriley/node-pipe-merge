const invokeOrReturn = require('./invoke-or-return');

module.exports = (...funs) => {

    return funs.flat().reduce((acc, fun) => {
        return { ...acc, ...invokeOrReturn(fun, acc) };
    }, {});

};
