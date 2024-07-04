const test = require('node:test');
const assert = require('node:assert');
const invokeOrReturn = require('../src/invoke-or-return');

test('invoke', () => {
    const actual = invokeOrReturn((a, b) => a + b, 1, 2);
    assert.deepEqual(actual, 3);
});

test('return', () => {
    const actual = invokeOrReturn(3, 1, 2);
    assert.deepEqual(actual, 3);
});
