describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(integrate(3, 2), "1x^3");
        Test.assertEquals(integrate(12, 5), "2x^6");
        Test.assertEquals(integrate(20, 1), "10x^2")
        Test.assertEquals(integrate(40, 3), "10x^4")
        Test.assertEquals(integrate(90, 2), "30x^3")
    });
});