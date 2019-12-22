describe("Object Matchers", () => {
  it("should compare object with equal", () => {
    const a = {key: "value"}
    const b = {key: "value"}
    
    expect(a).toEqual(b)
    expect(a).not.toBe(b)
  })
  
  it("match length property", () => {
    const a = { length: 2 }
    expect(a).toHaveLength(2)
  })
  
  it("should have some property", () => {
    const a = { stubProperty: "stub"}
    expect(a).toHaveProperty("stubProperty")
    expect(a).toHaveProperty("stubProperty", "stub")
  });
  
  it("should match sub object", () => {
    const houseForSale = {
      bath: true,
      bedrooms: 4,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white',
      },
    };
    const desiredHouse = {
      bath: true,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        wallColor: expect.stringMatching(/white|yellow/),
      },
    };
  
    expect(houseForSale).toMatchObject(desiredHouse);
  });
  
});
