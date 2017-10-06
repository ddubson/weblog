import React from 'react';
import {FormGroup} from "react-bootstrap";
import {shallow} from "enzyme";
import Entry from "../../src/components/Entry";

describe("Entry", () => {
    it("should have a FormGroup", () => {
        const wrapper = shallow(<Entry/>);
        expect(wrapper.find(FormGroup).length).toBe(1)
    });

    it("should have an entry text box", () => {
        const wrapper = shallow(<Entry/>);
        expect(wrapper.find(FormGroup).at(0).find("#logEntry").length).toBe(1);
    });

    it("should have a submit button", () => {
        const wrapper = shallow(<Entry/>);
        expect(wrapper.find(FormGroup).at(0).find("#entrySubmit").length).toBe(1);
    });
});
