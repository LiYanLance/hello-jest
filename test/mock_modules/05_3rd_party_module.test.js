import {generateId} from "./genUniqueId"
import uuid from "uuid/v1"

jest.mock("uuid/v1")
// factory also works here.

describe("mock 3rd party modules", () => {
  it("should call uuid", () => {
    generateId()
    
    expect(uuid).toHaveBeenCalledTimes(1)
  })
})
