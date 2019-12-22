describe("Array Matchers", () => {
  it("array length", () => {
    expect([0, 1, 2]).toHaveLength(3)
  })
  
  // toContains use ===
  it("array should contains its element", () => {
    expect(["a", "b", "c"]).toContain("a")
  })
  
  it("set is same as array", () => {
    const set = new Set(["a", "b", "c"])
    expect(set).toContain("a")
  })
  
  it("should contain equal when item is an object", () => {
    const fetchData = () => [{a:1}, {a:2}, {a:3}]
    expect(fetchData()).toContainEqual({a:1})
  });
  
  describe("use MatchObject to compare two arrays", () => {
    it("the number of elements must match exactly", () => {
      const a = [{foo: 'bar'}, {baz: 1}]
      const b = [{foo: 'bar'}, {baz: 1}]
      expect(a).toMatchObject(b);
    });
  
    it(".toMatchObject is called for each elements, so extra object properties are okay", () => {
      const a = [{foo: 'bar'}, {baz: 1, extra: 'something'}]
      const b = [{foo: 'bar'}, {baz: 1}]
      expect(a).toMatchObject(b);
    });
  });
});
