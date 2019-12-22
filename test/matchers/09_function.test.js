describe("Function Matchers", () => {
  
  // It has to be a mock function

  describe("mock property", () => {
    /*
      fn().mock
    
      calls[]
      instances[]
      invocationCallOrder[]
      results[]
     */
  
    it("should have call times", () => {
      const func = jest.fn()
      
      expect(func.mock.calls.length).toBe(0)
      func()
      expect(func.mock.calls.length).toBe(1)
    })
  
    it("should have call args", () => {
      const func = jest.fn()

      func("first arg")
      expect(func.mock.calls[0][0]).toBe("first arg")
    })
  })
  
  describe("Sugars", () => {
    
    it("call", () => {
      const func = jest.fn()
      func()
      
      expect(func).toHaveBeenCalled()
      expect(func).toHaveBeenCalledTimes(1)
      
      expect(func).toBeCalled()
      expect(func).toBeCalledTimes(1)
    })
    
    it("args", () => {
      const func = jest.fn()
      
      func(1)
      expect(func).toHaveBeenCalledWith(1)
      expect(func).toHaveBeenNthCalledWith(1, 1)
      expect(func).toHaveBeenLastCalledWith(1)
  
      expect(func).toBeCalledWith(1)
    })
  
    it("return", () => {
      const func = jest.fn().mockImplementation((value) => value)
  
      func("id")
      expect(func).toReturn() // No throw Errors
      expect(func).toReturnTimes(1)
      expect(func).toReturnWith("id")
      
      expect(func).toHaveReturned()
      expect(func).toHaveReturnedTimes(1)
      expect(func).toHaveReturnedWith("id")
    })
  })
})
