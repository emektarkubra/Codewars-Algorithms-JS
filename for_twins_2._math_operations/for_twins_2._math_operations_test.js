const assert = require('chai').assert;

describe("Basic Tests", () => {
    it("should work for basic tests", () => {
        assert.strictEqual(iceBrickVolume(1, 10, 2), 16, "");
        assert.strictEqual(iceBrickVolume(5, 30, 7), 1150, "radius = 5, bottleLength = 30, rimLength = 7");
    });
});