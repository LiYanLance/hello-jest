import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
require("@babel/polyfill")

Enzyme.configure({ adapter: new Adapter() })

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
