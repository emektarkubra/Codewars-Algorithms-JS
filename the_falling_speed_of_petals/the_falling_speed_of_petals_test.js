const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(sakuraFall(5), 80)
        assert.strictEqual(sakuraFall(10), 40)
        assert.strictEqual(sakuraFall(-1), 0)
    });
});