import fs from "fs"

const countFiles = (directory) =>
  fs.readdirSync(directory).map(fileName => ({
    directory,
    fileName
  }))

export default countFiles
