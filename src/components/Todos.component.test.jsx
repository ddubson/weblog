import React from "react";
import { mount } from "enzyme";
import TodosComponent from "./Todos.component";
import Todo from "./Todo";

describe("TodosComponent", () => {
  const todos = [
    { id: 1, entry: "Todo 1" },
    { id: 2, entry: "Todo 2" },
    { id: 3, entry: "Todo 3" }
  ];
  let removeTodoSpy;
  let wrapper;

  beforeEach(() => {
    removeTodoSpy =  jest.fn();
    wrapper = mount(<TodosComponent todos={todos} onRemoveTodo={removeTodoSpy} />);
  });

  it("should display a list of Todo", () => {
    expect(wrapper.find(Todo).length).toEqual(3);
    expect(wrapper.find(Todo).at(0).props().todo.entry).toEqual("Todo 1");
    expect(wrapper.find(Todo).at(1).props().todo.entry).toEqual("Todo 2");
    expect(wrapper.find(Todo).at(2).props().todo.entry).toEqual("Todo 3");
  });

  it("should pass down onRemoveTodo function to Todo component", () => {
    expect(wrapper.find(Todo).at(0).props().onRemoveTodo).toEqual(removeTodoSpy);
  });
});