const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Tests example test cases", () => {
        assert.strictEqual(sumStr("4", "5"), "9");
        assert.strictEqual(sumStr("34", "5"), "39");
    });
});