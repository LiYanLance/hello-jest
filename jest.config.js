module.exports = {
  setupFilesAfterEnv: ["./test/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  roots: ["<rootDir>/test/"]
}
