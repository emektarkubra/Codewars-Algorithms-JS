const Test = require('@codewars/test-compat');

describe("Example Tests", function () {

    it("test dots", function () {
        Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
    });

});