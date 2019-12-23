require("@babel/polyfill")

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling
    if (pass) {
      return {
        pass: true,
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`
      }
    } else {
      return {
        pass: false,
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`
      }
    }
  }
})
