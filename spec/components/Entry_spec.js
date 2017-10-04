import React from 'react';
import {FormGroup} from "react-bootstrap";
import {shallow} from "enzyme";
import Entry from "../../src/components/Entry.jsx";

describe("Entry", () => {
    it("should have a FormGroup", () => {
        const wrapper = shallow(<Entry />)
        expect(wrapper.find(FormGroup)).to.have.length(1)
    });
});