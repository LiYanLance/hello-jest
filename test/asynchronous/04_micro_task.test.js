describe("run all ticks", () => {
  
  jest.useFakeTimers()
  
  function fetchData(){
    return Promise.resolve("data")
  }
  
  it("exhaust pending micro task queue", () => {
    fetchData().then((data) => {
      expect(data).toBe("data")
    })
    
    expect.assertions(0)
    
    jest.runAllTicks()
    expect.assertions(1)
  })
})
