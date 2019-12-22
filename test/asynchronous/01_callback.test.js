function fetchData(callback){
  setTimeout(() => {
    callback(46)
  }, 2000)
}

describe("callback", () => {
  
  it("expect not been called", () => {
    function callback(value) {
      expect(value).toEqual(46)
    }
    
    fetchData(callback)
    expect.assertions(0)
  })
  
  
  it("should call done", (done) => {
    function callback(value) {
      expect(value).toEqual(46)
      done()
    }

    fetchData(callback)
    expect.hasAssertions()
  })
})
