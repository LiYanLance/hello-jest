import {shallow} from "enzyme";
import Link from "./Link.react";
import React from "react";

describe("custom serializer", () => {
  it("custom snapshot", () => {
    expect.addSnapshotSerializer({
      test(value) {
        return value && value.getElement()
      },
      print(value) {
        // Enzyme Wrapper Element
        const node = value.getElement()
        const props = Object.keys(node.props).filter(key => key !== "children").map(key => {
          let value = node.props[key]
          if(typeof value === "function"){
            value = "[[Function]]"
          }
          return `${key}=${value}`
        }).join(",\n  ")

        const result =
`<${node.type}
  ${props}
>
  ${node.props.children}
</${node.type}>
`
        return result
      }
    })
  
    const tree = shallow(<Link page="http://www.facebook.com">Facebook</Link>)
    expect(tree).toMatchSnapshot("Link component")
  })
})
