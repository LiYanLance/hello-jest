describe("Own Matchers", () => {
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

//https://github.com/jest-community/jest-extended
