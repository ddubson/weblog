import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App'
import { Entry } from "./components/Entry";
import TodosComponent from "./components/Todos.component";
import AppHeader from "./components/AppHeader";

describe("App", () => {
  describe("on initial load of component", () => {
    let wrapper;
    const todos = ["Some TODO"];
    let addTodoSpy;

    beforeEach(() => {
      addTodoSpy = jest.fn();
      wrapper = shallow(<App
        todos={todos}
        addTodo={addTodoSpy}
      />);
    });

    it("should have a Header component", () => {
      expect(wrapper.find(AppHeader).length).toEqual(1);
    });

    it("should display a single Entry prompt", () => {
      expect(wrapper.find(Entry).length).toBe(1);
    });

    it("should display a TodosComponent container", () => {
      expect(wrapper.find(TodosComponent).length).toBe(1);
    });

    it("should pass initialTodos store to TodosComponent component", () => {
      expect(wrapper.find(TodosComponent).props().todos).toEqual(todos);
    });

    it("should pass addTodo function to Entry component", () => {
      expect(wrapper.find(Entry).prop('onAddTodo')).toBe(addTodoSpy);
    });
  });
});