describe("promise", () => {
  
  describe("return", () => {
    it("return resolved value", () => {
      expect.hasAssertions()
      
      return Promise.resolve("aaa").then((value) => {
        expect(value).toEqual("aaa")
      })
    })
    
    it("with resolves", () => {
      expect.hasAssertions()
      
      return expect(Promise.resolve("aaa")).resolves.toEqual("aaa")
    })
    
    
    it("return reject value", () => {
      expect.hasAssertions()
      
      return expect(Promise.reject(new Error('msg'))).rejects.toThrow('msg')
    })
  })
})

describe("async await", () => {
  it("await", async () => {
    expect.hasAssertions()
    
    await Promise.resolve("aaa").then((value) => {
      expect(value).toEqual("aaa")
    })
  })
  
  it("await", async () => {
    expect.hasAssertions()
    
    await expect(Promise.resolve("aaa")).resolves.toEqual("aaa")
  })
})
