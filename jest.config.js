module.exports = {
  setupFilesAfterEnv: ["./test/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  roots: ["<rootDir>/test/"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
}
