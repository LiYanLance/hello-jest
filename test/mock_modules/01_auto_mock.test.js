import adapter from "./adapter"
import capitalize from "./helper"

jest.mock("./helper")

describe("Mock Function", () => {
  it("should been called", () => {
    adapter("abc")
    
    expect(capitalize).toHaveBeenCalledTimes(1)
  })
})
