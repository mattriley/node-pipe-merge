const test = require('node:test');
const assert = require('node:assert');
const pipeMerge = require('../src/pipe-merge');

test('combination of values and functions', () => {
    const actual = pipeMerge(
        { a: 1 },
        { b: 2 },
        ({ a, b }) => ({ c: a + b }),
        { a: 4 }
    );

    const expected = { a: 4, b: 2, c: 3 };
    assert.deepEqual(actual, expected);
});

test('arrays are flattened', () => {
    const actual = pipeMerge(
        [{ a: 1 }, { b: 2 }],
        [({ a, b }) => ({ c: a + b }), { a: 4 }]
    );

    const expected = { a: 4, b: 2, c: 3 };
    assert.deepEqual(actual, expected);
});
