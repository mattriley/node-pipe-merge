const test = require('node:test');
const assert = require('node:assert');
const invokeEach = require('../src/invoke-each');

test('invoke each of two functions', () => {
    const funs = [
        (a, b) => a + b,
        (a, b) => a * b
    ];
    const actual = invokeEach(funs, 1, 2);
    assert.deepEqual(actual, [3, 2]);
});

test('invoke each including non-function', () => {
    const funs = [
        (a, b) => a + b,
        2
    ];
    const actual = invokeEach(funs, 1, 2);
    assert.deepEqual(actual, [3, 2]);
});
