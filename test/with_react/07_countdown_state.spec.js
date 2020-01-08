import React from "react"
import {mount} from "enzyme";
import CountDown from "./CountDown"
import {act} from "react-dom/test-utils";

jest.useFakeTimers()

describe("CountDown", () => {
  it("should render 10 seconds left at begin", () => {
    const tree = mount(<CountDown/>)
    
    expect(tree.find("p").text()).toEqual("10 seconds left")
  })
  
  it("should render 8 seconds left after 2 seconds", () => {
    const tree = mount(<CountDown/>)
    
    act( () => {
      jest.advanceTimersByTime(5000)
    })

    expect(tree.find("p").text()).toEqual("5 seconds left")
  })
  
  it("should render 2 seconds left with classname red after 8 seconds", () => {
    const tree = mount(<CountDown/>)
    expect(tree.find("p").hasClass("red")).toBeFalsy()
    
    act(() => {
      jest.advanceTimersByTime(8000)
    })

    expect(tree.find("p").text()).toEqual("2 seconds left")
    expect(tree.find("p").hasClass("red")).not.toBeTruthy()
  })
})
