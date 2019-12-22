describe("Truthiness Matchers", () => {
  it("toBeNull only matches null", () => {
    expect(null).toBeNull()
  })
  
  it("toBeUndefined only matches undefined", () => {
    const func = () => void
    expect(func()).toBeUndefined()
  });
  
  it("toBeDefined is opposite to toBeUndefined", () => {
    const func = () => 0
    expect(func()).toBeDefined()
  })
  
  it("should be truthy when if statement returns true", () => {
    expect(true).toBeTruthy()
    expect(-1).toBeTruthy()
    expect("abc").toBeTruthy()
    expect({}).toBeTruthy()
    expect([]).toBeTruthy()
  });
  
  it("should be falsy when if statement returns false", () => {
    expect(false).toBeFalsy()
    expect(0).toBeFalsy()
    expect("").toBeFalsy()
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
    expect(NaN).toBeFalsy()
  });
});
