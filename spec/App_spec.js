import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App.jsx'
import Entry from "../src/components/Entry.jsx";

describe("App", function () {
    it("should display a single Entry prompt", function () {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Entry).length).toBe(1);
    });
});