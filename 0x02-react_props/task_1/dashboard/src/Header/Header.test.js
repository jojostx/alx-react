import React from "react";
import Header from './Header'
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Header />);

    expect(component).toBeDefined();
  });
  it("should render a h1 & an image", () => {
    const component = shallow(<Header />);
    expect(component.exists("img")).toEqual(true);
    expect(component.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});