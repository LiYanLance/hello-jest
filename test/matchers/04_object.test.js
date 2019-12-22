describe("Object Matchers", () => {
  it("should compare object with equal", () => {
    const a = {key: "value"}
    const b = {key: "value"}
    
    expect(a).toEqual(b)
    expect(a).not.toBe(b)
  })
  
  it("should be instance of", () => {
    function Cat(name) {
      this.name = name
    }
    const cat = new Cat("c")
    
    expect(cat).toBeInstanceOf(Cat)
  })
  
  it("match length property", () => {
    const a = { length: 2 }
    expect(a).toHaveLength(2)
  })
  
  it("should have some property", () => {
    const a = { stubProperty: "stub"}
    expect(a).toHaveProperty("stubProperty")
    expect(a).toHaveProperty("stubProperty", "stub")
  })
  
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
  })
  
/*
  严格比较, 对象具有相同的类型和结构.
  
  和`.toEqual` 不同的是, 使用 `toStrictEqual`
    - 会检查值是 `undefined` 的属性, e.g. {a: undefined, b: 2} 不 match {b: 2}
    - 会检查数组元素个数. e.g. [, 1] 不 match [undefined, 1]
    - 会检查对象类型. e.g. 用 Class new 出来的对象, 和字面量对象不 match
*/
  
  describe("strict equal", () => {
  
    it("should check undefined", () => {
      const a = {a: undefined, b: 2}
      const b = {b: 2}
  
      expect(a).toEqual(b)
      
      expect(a).toStrictEqual({a: undefined, b: 2})
      expect(a).not.toStrictEqual(b)
    })
    
    it("should check array sparseness", () => {
      const arr = [, 2]

      expect(arr).toEqual([undefined, 2])
      
      expect(arr).toStrictEqual([, 2])
      expect(arr).not.toStrictEqual([undefined, 2])
    })
  
    it("should match with same type", () => {
      class Cat {
        constructor(name){
          this.name = name
        }
      }
      
      expect(new Cat("c")).toEqual({name: "c"})
  
      expect(new Cat("c")).not.toStrictEqual({name: "c"})
      expect(new Cat("c")).toStrictEqual(new Cat("c"))
    })
  })
})
