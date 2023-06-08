const assert = require("chai").assert;
describe("Sample tests", () => {
    it("should work for known resolutions", () => {
        assert.deepEqual(aspectRatio(640, 480), [854, 480], "x = 640, y = 480");
        assert.deepEqual(aspectRatio(960, 720), [1280, 720], "x = 960, y = 720");
        assert.deepEqual(aspectRatio(1440, 1080), [1920, 1080], "x = 1440, y = 1080");
        assert.deepEqual(aspectRatio(1920, 1440), [2560, 1440], "x = 1920, y = 1440");
    });
});