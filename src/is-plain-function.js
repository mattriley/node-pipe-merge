/* eslint-disable no-prototype-builtins */

module.exports = fun => {

    return typeof fun === 'function' && !fun.hasOwnProperty('prototype');

};
