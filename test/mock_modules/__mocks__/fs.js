const path = require('path');

// use genMockFromModule to generate an automatic mock
// recommended (optional)
// 手动 mock 的问题是, mock 的 module 有变化就需要手动改
const fs = jest.genMockFromModule('fs')

let mockFiles = []

// 自定义 readdirSync 函数, 读取通过 __setMockFiles 设置的文件
function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || []
}

// 设置 mock file
function __setMockFiles(newMockFiles) {
  mockFiles = []
  for (const file in newMockFiles) {
    const dir = path.dirname(file)
    
    if (!mockFiles[dir]) {
      mockFiles[dir] = []
    }
    mockFiles[dir].push(path.basename(file))
  }
}

fs.readdirSync = readdirSync
fs.__setMockFiles = __setMockFiles

export default fs
