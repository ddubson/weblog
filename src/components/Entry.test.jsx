import React from 'react';
import { Form, FormGroup, Button, ControlLabel } from "react-bootstrap";
import { mount } from "enzyme";
import Entry from "./Entry";

describe("Entry", () => {
  let addTodoCallbackSpy;
  let wrapper;

  beforeEach(() => {
    addTodoCallbackSpy = jest.fn();
    wrapper = mount(<Entry onAddTodo={addTodoCallbackSpy} />);
  });

  describe("what it should have", () => {
    it("should have a FormGroup", () => {
      expect(wrapper.find(FormGroup).length).toBe(1)
    });

    it("should have an entry text box with label", () => {
      expect(wrapper.find(ControlLabel).text()).toEqual("Entry");
      expect(wrapper.find(FormGroup).find(inputLogEntry()).length).toBe(1);
    });

    it("should have a submit button", () => {
      let submitButton = wrapper.find(Button);
      expect(submitButton.length).toBe(1);
      expect(submitButton.text()).toEqual("Add Entry");
    });
  });

  describe("when form content is valid", () => {
    let preventDefaultSpy;
    const todoContent = 'hello!';

    beforeEach(() => {
      preventDefaultSpy = jest.fn();
      wrapper.find(inputLogEntry()).simulate('change', { target: { value: todoContent }});
    });

    describe("and the form is submitted", () => {
      beforeEach(() => {
        wrapper.find(Form).simulate('submit', { preventDefault: preventDefaultSpy });
      });

      it("should not refresh the page", () => {
        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
      });

      it("should add a todo", () => {
        expect(addTodoCallbackSpy).toHaveBeenCalledWith(todoContent);
      });
    });
  });

  describe("when form content is invalid (e.g. form validation fails!)", () => {
    describe("when the log entry field has no text", () => {
      beforeEach(() => {
        wrapper.find(inputLogEntry()).simulate('change', { target: { value: "" } });
        wrapper.find(Form).simulate('submit');
      });

      it("should not add a todo", () => {
        expect(addTodoCallbackSpy).not.toHaveBeenCalled();
      });
    });
  });

  function inputLogEntry() {
    return "input#logEntry";
  }
});

