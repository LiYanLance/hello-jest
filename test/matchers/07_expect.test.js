describe("Expect", () => {
  // use with async functions
  it("hasAssertion", () => {
    expect(1).toBe(1)
    expect.hasAssertions()
  })
  
  it("assertions", () => {
    expect(1).toBe(1)
    expect(1).toBe(1)
    expect.assertions(2)
  })
  
  // matches anything but null or undefined
  it("should match anything", () => {
    expect(3).toEqual(expect.anything())
  });
  
  // matches anything that was created with the given constructor
  it("any type", () => {
    expect(3).toEqual(expect.any(Number))
  })
});
