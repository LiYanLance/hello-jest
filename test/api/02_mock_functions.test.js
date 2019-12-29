import * as Helper from "./helper"

describe("mock functions", () => {
  
  describe("mock property", () => {
  
    // 记录 call 这个 function 时的参数列表
    it("calls", () => {
      const mockFn = jest.fn()
      
      mockFn(1, 2)
      mockFn(true)
    
      expect(mockFn.mock.calls).toEqual([
        [1,2], [true]
      ])
    })
    
    // 记录 call 这个 function 之后的 result
    it("results", () => {
      const mockFn = jest.fn()
        .mockReturnValueOnce(1)
        .mockImplementationOnce(() => { return new Date() })

      mockFn()
      expect(mockFn.mock.results).toEqual([
        {type: "return", value: 1}
      ])
      
      mockFn()
      expect(mockFn.mock.results).toEqual([
        {type: "return", value: 1},
        {type: "return", value: expect.any(Date)}
      ])
      // type: return / throw
    })
    
    // 记录使用 new 关键字初始化 function 后的 对象
    it("instances", () => {
      const mockFn = jest.fn()
  
      const a = new mockFn()
      const b = new mockFn()
  
      expect(mockFn.mock.instances[0]).toBe(a)
      expect(mockFn.mock.instances[1]).toBe(b)
    })
  })
  
  describe("sugars", () => {
    it("mockImplementation", () => {
      const mockFn = jest.fn().mockImplementation(() => 123)
      
      expect(mockFn()).toBe(123)
    })
  
    it("mockReturnValue", () => {
      const mockFn = jest.fn().mockReturnValue(123)
  
      expect(mockFn()).toBe(123)
    })
  
    it("mockResolvedValue", () => {
      const mockFn = jest.fn().mockResolvedValue({ data: 123})
      expect.hasAssertions()

      return expect(mockFn()).resolves.toEqual({ data: 123})
    })
  
    it("mockRejectedValue", () => {
      const mockFn = jest.fn().mockRejectedValue(new Error("some error"))
      expect.hasAssertions()
    
      return expect(mockFn()).rejects.toEqual(new Error("some error"))
    })
  })
  
  describe("mock clear", () => {

    // clear mock.calls 和 mock.instances
    it("mockClear", () => {
      const mockFn = jest.fn().mockReturnValue("dummy value").mockImplementation(() => "dummy value")
      new mockFn(1)
      mockFn("3")
      
      expect(mockFn.mock.calls).toHaveLength(2)
      expect(mockFn.mock.instances).toHaveLength(2)
      
      mockFn.mockClear()
      
      expect(mockFn.mock.calls).toHaveLength(0)
      expect(mockFn.mock.instances).toHaveLength(0)
      
      expect(mockFn()).toEqual("dummy value")
      expect(mockFn()).toEqual("dummy value")
  
      expect(mockFn()).toEqual("dummy value")
      expect(mockFn()).toEqual("dummy value")
    })
  
    // mockClear + reset return value and implementation
    it("mockReset", () => {
      const mockFn = jest.fn().mockReturnValueOnce("dummy value").mockImplementation(() => "dummy value")
      new mockFn(1)
      mockFn("3")
  
      expect(mockFn.mock.calls).toHaveLength(2)
      expect(mockFn.mock.instances).toHaveLength(2)
  
      mockFn.mockReset()
  
      expect(mockFn.mock.calls).toHaveLength(0)
      expect(mockFn.mock.instances).toHaveLength(0)
  
      expect(mockFn()).toEqual(undefined)
      expect(mockFn()).toEqual(undefined)
    })
  
    // mockReset + 还原最初(非 mock)实现
    // 只在用 spyOn 创建 mock functions 时有用
    // 应用场合: 当需要在一个 test 中 mock function, 其他 test 中使用原有实现
    it("mockRestore", () => {
      jest.spyOn(Helper, "someFn")
      Helper.someFn("123")
    
      expect(Helper.someFn).toHaveBeenCalledTimes(1)
      expect(Helper.someFn).toHaveBeenCalledWith("123")
  
      expect(jest.isMockFunction(Helper.someFn)).toBeTruthy()
  
      Helper.someFn.mockRestore()
      expect(jest.isMockFunction(Helper.someFn)).toBeFalsy()
    })
  })
})
