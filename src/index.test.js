import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import App from "./components/app";

configure({ adapter: new Adapter() });

describe("<App /> shallow rendering", () => {
  it("h1 contains correct text", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toBe("Webpack 4 with react starter!");
  });
  it("should ul contain 3 li tags", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("ul").children().length).toBe(3);
  });

  it("matches the snapshot", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("should have not liked by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".liked").exists()).toBeFalsy();
  });

  it("should have a liked after click like button", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(wrapper.find(".liked").exists()).toBeTruthy();
  });
});
