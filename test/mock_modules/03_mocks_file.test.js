import adapter from "./adapter"

jest.mock("./helper")

describe("Use __mocks__", () => {
  it("check result", () => {
    const result = adapter("hello there  ")
    
    expect(result).toEqual("Hello There")
  })
})
