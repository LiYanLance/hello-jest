import adapter from "./adapter"
import capitalize from "./helper"

jest.mock("./helper", () => {
  return jest.fn().mockReturnValue("Hello There")
})

describe("Mock Function", () => {
  it("should been called", () => {
    const result = adapter("abc")
    
    expect(capitalize).toHaveBeenCalledTimes(1)
    expect(result).toBe("Hello There")
  })
})
