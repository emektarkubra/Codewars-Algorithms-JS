const { assert } = require('chai');

describe('Sample tests', () => {

  it("sumOfDifferences([1, 2, 10]", function() {
    assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
  });

  it("sumOfDifferences([-3, -2, -1])", function() {
    assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);
  });
});