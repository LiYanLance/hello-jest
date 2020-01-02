describe("Mock fn API", () => {
  
  describe("implementation", () => {
  
    it("without", () => {
      const func = jest.fn()
      func()
    
      expect(func).toHaveBeenCalledTimes(1)
    })
    
    it("optional", () => {
      const func = jest.fn(() => true)
      func()
      
      expect(func).toReturn()
    })
    
    it("mockImplementation", () => {
      const func = jest.fn().mockImplementation(() => true)
      func()
  
      expect(func).toReturnWith(expect.any(Boolean))
    })
  
    it("once", () => {
      const func = jest.fn()
        .mockImplementationOnce(() => true)
        .mockImplementationOnce(() => false)
      
      expect(func()).toBeTruthy()
      expect(func()).toBeFalsy()
      // default
      expect(func()).toBeUndefined()
    })
  
    it("once with default", () => {
      const func = jest.fn()
      .mockImplementation(() => 123)
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false)
    
      expect(func()).toBeTruthy()
      expect(func()).toBeFalsy()
      // default
      expect(func()).toBe(123)
    })
  })
  
  describe("spyOn", () => {
  
    const video = {
      play() {
        return true
      }
    }
    
    it("spyOn object", () => {
      const spy = jest.spyOn(video, 'play')
      const isPlaying = video.play()
  
      expect(spy).toHaveBeenCalled()
      expect(isPlaying).toBe(true)
  
      spy.mockRestore()
    })

    it("spyOn with mock implementation", () => {
      const spy = jest.spyOn(video, "play").mockReturnValue(false)
      const isPlaying = video.play()

      expect(isPlaying).toBe(false)
    })
  })
})
