import adapter from "./adapter"

describe("doMock to avoid hosting", () => {
  it("", () => {
    jest.doMock("./helper", () => {
      return function () {
        return "Hello There"
      }
    })
    const result = adapter("hello there  ")
    
    expect(result).toBe("Hello There")
  })
  
  it("", () => {
    jest.doMock("./helper", () => {
      return jest.fn().mockImplementation(() => "How Do You Do")
    })
    const result = adapter(" how do you do")
    
    expect(result).toBe("How Do You Do")
  })
  
})
