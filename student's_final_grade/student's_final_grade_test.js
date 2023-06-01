const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(finalGrade(100, 12), 100);
        assert.strictEqual(finalGrade(85, 5), 90);
    });
});