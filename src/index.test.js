import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./app";

configure({ adapter: new Adapter() });
describe("<App /> shallow rendering", () => {
  it("h1 contains correct text", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toBe("Webpack 4 with react starter!");
  });
});
