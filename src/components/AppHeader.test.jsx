import { shallow, mount } from "enzyme";
import { Navbar } from "react-bootstrap";
import React from "react";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  it("should have an inverse NavBar", () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find(Navbar).length).toEqual(1)
  });

  it("should have the name of the app in the Navbar", () => {
    const wrapper = mount(<AppHeader />);
    expect(wrapper.find(Navbar.Brand).text()).toEqual("Weblog");
  });
});