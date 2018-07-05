import { mount } from "enzyme";
import React from "react";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  it("should have the name of the app", () => {
    const wrapper = mount(<AppHeader />);
    expect(wrapper.find('Typography').text()).toEqual("WebLog");
  });
});