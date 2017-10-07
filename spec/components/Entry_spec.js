import React from 'react';
import {Form, FormGroup} from "react-bootstrap";
import {mount, shallow} from "enzyme";
import Entry from "../../src/components/Entry";
import {spy, stub} from "sinon";

describe("Entry", () => {
    describe("what it should have", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Entry/>);
        });

        it("should have a FormGroup", () => {
            expect(wrapper.find(FormGroup).length).toBe(1)
        });

        it("should have an entry text box", () => {
            expect(wrapper.find(FormGroup).at(0).find("#logEntry").length).toBe(1);
        });

        it("should have a submit button", () => {
            expect(wrapper.find(FormGroup).at(0).find("#entrySubmit").length).toBe(1);
        });
    });

    describe("when form is submitted", () => {
        it("should not refresh the page", () => {
            const preventDefault = spy();
            const addTodo = stub();
            const wrapper = mount(<Entry onAddTodo={addTodo}/>);
            wrapper.find(Form).simulate('submit', { preventDefault });
            expect(preventDefault.calledOnce).toBeTruthy()
        });

        it("should add a todo", () => {
            let todoContent = 'hello todo';
            const addTodo = spy();
            const wrapper = mount(<Entry onAddTodo={addTodo}/>);

            wrapper.find("#logEntry").node.value = todoContent
            wrapper.find(Form).simulate('submit');

            expect(addTodo.calledWith(todoContent)).toBeTruthy();
        });
    });
});
