const invokeOrReturn = require('./invoke-or-return');

module.exports = (funs, ...args) => {

    return funs.map(fun => invokeOrReturn(fun, ...args));

};
