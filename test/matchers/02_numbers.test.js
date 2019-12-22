describe("Number Matchers", () => {
  it("3 should greater than 2", () => {
    expect(3).toBeGreaterThan(2)
  })
  
  it("3 should be greater than or equals to 2", () => {
    expect(3).toBeGreaterThanOrEqual(2)
    expect(3).toBeGreaterThanOrEqual(3)
  })
  
  it("3 should be less than 5", () => {
    expect(3).toBeLessThan(5)
  })
  
  it("3 should be less than or equals 5", () => {
    expect(3).toBeLessThanOrEqual(5)
    expect(3).toBeLessThanOrEqual(3)
  })
  
  // Float
  it("0.3 should be close to 0.1 + 0.2", () => {
    expect(0.1 + 0.2).not.toBe(0.3)
    expect(0.1 + 0.2).toBeCloseTo(0.3)
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5)
  })
})
