describe("Exceptions Matchers", () => {
  const makingSomeError = () => {
    throw new Error("a made up error occurs")
  }
  
  it("should get the error", () => {
    expect(makingSomeError).toThrow()
    expect(makingSomeError).toThrow(Error)
    expect(makingSomeError).toThrow("made up error")
    expect(makingSomeError).toThrow(/made up/)

    expect(makingSomeError).not.toThrow("made up error throw here")
  })
});
