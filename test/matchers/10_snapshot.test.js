import React from "react";
import renderer from "react-test-renderer";

describe("SnapShot Matchers", () => {
  it("snapshot", () => {
    const SomeComponent = ({ content }) => (
      <div className="some class">{content}</div>
    );

    const tree = renderer
      .create(<SomeComponent content="dummy content" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("inline snapshot", () => {
    const SomeComponent = ({ content }) => (
      <div className="some class">{content}</div>
    );

    const tree = renderer
      .create(<SomeComponent content="dummy content" />)
      .toJSON();

    // Need `prettier` as peer dependency
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="some class"
      >
        dummy content
      </div>
    `);
  });
  
  it("property matcher", () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: "Li Yan",
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
    });
  })
  

  describe("customize snapshot", () => {
    
    const { toMatchSnapshot } = require("jest-snapshot")
    
    expect.extend({
      toMatchTrimmedSnapshot(received) {
        delete received.props.className
        return toMatchSnapshot.call(this, received, 'toMatchTrimmedSnapshot')
      }
    })
    
    it("snapshot without classname and spaces", () => {
      const SomeComponent = ({ content }) => (
        <div className="some class">{content}</div>
      );
  
      const tree = renderer
      .create(<SomeComponent content="dummy content" />)
      .toJSON();

      expect(tree).toMatchTrimmedSnapshot()
    })
  })
});
