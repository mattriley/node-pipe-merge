const isPlainFunction = require('./is-plain-function');

module.exports = (val, ...args) => {

    return val && isPlainFunction(val) ? val(...args) : val;

};
