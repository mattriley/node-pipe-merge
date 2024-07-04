const merge = require('lodash.merge');
const invokeOrReturn = require('./invoke-or-return');

module.exports = (...funs) => {

    return Object.values(funs).flat().reduce((acc, fun) => {
        return merge(acc, invokeOrReturn(fun, acc));
    }, {});

};
