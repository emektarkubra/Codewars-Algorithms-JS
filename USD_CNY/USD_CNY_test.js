const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(usdcny(15), '101.25 Chinese Yuan');
        assert.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
    });
});