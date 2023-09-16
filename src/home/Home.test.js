import React from "react";
import HomePage from "./HomePage";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe(`<HomePage/>`, () => {
  test("should render without crashing", () => {
    render(<HomePage />);
  });

  test("snapsho", () => {
    const tree = renderer.create(<HomePage />);
    expect(tree).toMatchSnapshot();
  });
});
