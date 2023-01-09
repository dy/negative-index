import assert from 'assert';
import idx from './index.js';

assert.equal(idx(null, 10), 0);
assert.equal(idx(undefined, 10), 0);
assert.equal(idx(-15, 10), 0);
assert.equal(idx(-10, 10), 0);
assert.equal(idx(-9, 10), 1);
assert.equal(idx(-5, 10), 5);
assert.equal(idx(-1, 10), 9);
assert.equal(idx(-0, 10), 10);
assert.equal(idx(0, 10), 0);
assert.equal(idx(5, 10), 5);
assert.equal(idx(9, 10), 9);
assert.equal(idx(10, 10), 10);
assert.equal(idx(15, 10), 10);
