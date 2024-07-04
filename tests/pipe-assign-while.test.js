const test = require('node:test');
const assert = require('node:assert');
const pipeAssignWhile = require('../src/pipe-assign-while');

test('condition that breaks early', () => {
    const actual = pipeAssignWhile(
        ({ b }) => !b,
        { a: 1 },
        { b: 2 },
        ({ a, b }) => ({ c: a + b }),
        { a: 4 }
    );

    const expected = { a: 1, b: 2 };
    assert.deepEqual(actual, expected);
});
