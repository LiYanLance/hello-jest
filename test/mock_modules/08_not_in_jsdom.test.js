import isSmallScreen from "./isSmallScreen";

// 给 window 上加上 jsdom 不支持的 matchMedia
// 可以放到一个单独的文件中，在测试文件需要的时候 import
window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }
})

describe("match media", () => {
  it("mock match media", () => {
    
    expect(isSmallScreen()).toBeFalsy()
  })
})
