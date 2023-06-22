describe("Fixed Tests", () => {
  it("Test", () => {
    Test.assertSimilar(excludingVatPrice(230), 200.0);
    Test.assertSimilar(excludingVatPrice(123), 106.96);
  });
});
