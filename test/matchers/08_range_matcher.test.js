describe("Own Matchers", () => {
  expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling
      if (pass) {
        return {
          pass: true,
          message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`
        }
      } else {
        return {
          pass: false,
          message: () => `expected ${received} to be within range ${floor} - ${ceiling}`
        }
      }
    }
  })
  
  it("match Range", () => {
    expect(4).toBeWithinRange(3, 5)
    expect(4).toBeWithinRange(4, 5)
  
    const fruit = {apples: 6, bananas: 3}
    expect(fruit).toEqual({
      apples: expect.toBeWithinRange(1, 10),
      bananas: expect.not.toBeWithinRange(11, 20),
    })
  })
})
