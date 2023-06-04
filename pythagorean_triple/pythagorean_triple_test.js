const chai = require("chai");
const assert = chai.assert;

describe("Simple test cases", function () {
    it("Pass these", function () {
        assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
        assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);
    });
});