describe("fake timer", () => {

  function timerGame(callback) {
    console.log('游戏开始');
    setTimeout(() => {
      console.log("游戏结束");
      callback && callback();
    }, 1000);
  }
  
  beforeEach(() => {
    jest.useFakeTimers()
  })
  
  it("should call setTimeout", () => {
    timerGame()
    
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
  })
  
  it("runAllTimers - should call callback after 1 second", () => {
    const callback = jest.fn()
    timerGame(callback)
  
    // 这个时间点 callback 应该还没被调用
    expect(callback).not.toBeCalled()
  
    // 把 timer 调到执行完毕状态
    jest.runAllTimers()
  
    // 现在 callback 应该被调用了
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
  })
})

describe("recursive timer", () => {
  
  function infiniteTimerGame(callback) {
    console.log('游戏开始');
    setTimeout(() => {
      callback()
      console.log('游戏结束, 10秒之后重新开始');
      // 执行 callback 1 秒之后再 set 一个 10 秒的 timer
      setTimeout(() => {
        console.log("新的游戏")
        infiniteTimerGame(callback)
      }, 10000)
      
    }, 1000)
  }
  
  beforeEach(() => {
    jest.useFakeTimers()
    jest.clearAllTimers()
    jest.clearAllMocks()
  })
  
  it("schedules a 10-second timer after 1 second", () => {
    const callback = jest.fn()
    
    infiniteTimerGame(callback)
    
    // 这会 外层设置 1 秒的 setTimeout 应该已经被 call 了
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
    
    // 只把已经触发(pending)的 timer 调整到执行状态, 新创建的不管
    jest.runOnlyPendingTimers()
    
    // 这个时候, 外层的 1 秒 timer 应该执行完毕了, 传入 callback 已经被调用了
    // 内层的 10 秒 timer 刚被 pending
    expect(callback).toBeCalled()
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000)
  })
  
  it("calls the callback after 1 second via advanceTimersByTime", () => {
    const callback = jest.fn()
  
    infiniteTimerGame(callback)
    
    // 游戏开始
    
    // timer 刚启动, callback 应该还没被调用
    expect(callback).not.toBeCalled()
    
    // 时间往前推 1 秒
    jest.advanceTimersByTime(1000)
    
    // callback 应该被调用了
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
  
    // 10 秒的 timer 也应该被设置了
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000)

    // 时间往前推 10 秒
    jest.advanceTimersByTime(10000)
    
    // 新游戏开始
    expect(setTimeout).toHaveBeenCalledTimes(3)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
    
    // 时间往前推 1 秒, callback 再次被调用
    expect(callback).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(2)
  })
})
