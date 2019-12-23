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
  
  const fetchData = () => Promise.resolve("aaa")
  
  it("await then", async () => {
    expect.hasAssertions()
    
    const value = await fetchData()
    expect(value).toEqual("aaa")
  })
  
  it("await resolves", async () => {
    expect.hasAssertions()
    
    await expect(fetchData()).resolves.toEqual("aaa")
  })
})
