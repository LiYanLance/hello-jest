describe("String Matchers", () => {
  it("abc should match ab", () => {
    expect("abc").toMatch("ab")
    expect("abc").toMatch(/ab/)
  })
});
