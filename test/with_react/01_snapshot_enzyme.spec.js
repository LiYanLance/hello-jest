import React from "react"
import Link from "./Link.react"
import { shallow } from "enzyme"

test("Link changes the class when hovered", () => {
    const tree = shallow(<Link page="http://www.facebook.com">Facebook</Link>)
    expect(tree).toMatchSnapshot("Link component")

    // simulate hover
    tree.simulate("mouseEnter")
    // re-rendering
    expect(tree).toMatchSnapshot("Mouse hover on Link component")

    //simulate leave
    tree.simulate("mouseLeave")
    // re-rendering
    expect(tree).toMatchSnapshot("Mouse Leave from Link component")
});