import {generateId} from "./genUniqueId";

// auto use __mocks__ if exists, no need to use : jest.mock("module_name")
// set roots in jest config, AKA __mocks__ file path

describe("mock 3rd party modules", () => {
  it("should call uuid", () => {
    const result = generateId()
    
    expect(result).toBe("10000")
  })
})
