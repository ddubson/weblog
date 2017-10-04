import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App.jsx'

describe("App", function () {
    it("should display Hello World text", function () {
        const wrapper = shallow(<App />);
        expect(wrapper.contains("Hello World!")).toBe(true);
    });
});