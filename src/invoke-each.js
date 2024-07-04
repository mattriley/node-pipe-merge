const invokeOrReturn = require('./invoke-or-return');

module.exports = (funs, ...args) => {

    return Object.values(funs).map(fun => invokeOrReturn(fun, ...args));

};
