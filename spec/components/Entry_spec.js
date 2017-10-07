import React from 'react';
import {Form, FormGroup} from "react-bootstrap";
import {mount, shallow} from "enzyme";
import Entry from "../../src/components/Entry";
import {stub} from "sinon";

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

    describe("when form is submitted", () => {
        it("should add a todo", () => {
            const addTodo = stub().withArgs('content');
            const wrapper = mount(<Entry onAddTodo={addTodo}/>);
            wrapper.find(Form).simulate('submit');
            wrapper.simulate("submit");
            expect(addTodo.calledOnce).toBeTruthy()
        });
    });
});
