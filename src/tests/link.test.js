import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Link from "../components/link";

configure({ adapter: new Adapter() });
describe("<Link /> shallow rendering", () => {
  it("should renders href ", () => {
    const wrapper = shallow(<Link address="reactjs.org" text="React" />);
    expect(wrapper.props().href).toBe("reactjs.org");
    expect(wrapper.text()).toBe("React");
  });
});
