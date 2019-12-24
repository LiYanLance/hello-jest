import countFiles from "./countFiles"
import fs from "fs"
// auto mock/ mock factory as same as others
jest.mock("fs")

describe("node build in modules", () => {
  
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents'
  }
  
  beforeEach(() => {
    fs.__setMockFiles(MOCK_FILE_INFO)
  })
  
  it("count files", () => {
    const fileSummary = countFiles('/path/to')

    console.log(fileSummary)
    expect(fileSummary.length).toBe(2)
  })
})
