import React from "react";
import { mount } from "enzyme";
import Todos from "./Todos";
import Todo from "./Todo";

describe("Todos", () => {
  it("should display a list of Todo", () => {
    const todos = [
      { id: 1, entry: "Todo 1" },
      { id: 2, entry: "Todo 2" },
      { id: 3, entry: "Todo 3" }
    ];
    const wrapper = mount(<Todos todos={todos} onRemoveTodo={jest.fn()}/>);

    expect(wrapper.find(Todo).length).toEqual(3);
    expect(wrapper.find(Todo).at(0).props().todo.entry).toEqual("Todo 1");
    expect(wrapper.find(Todo).at(1).props().todo.entry).toEqual("Todo 2");
    expect(wrapper.find(Todo).at(2).props().todo.entry).toEqual("Todo 3");
  });

  it("should pass down onRemoveTodo function to Todo component", () => {
    const todos = [
      { id: 1, entry: "Todo 1" },
      { id: 2, entry: "Todo 2" },
      { id: 3, entry: "Todo 3" }
    ];
    const removeTodo = jest.fn();
    const wrapper = mount(<Todos todos={todos} onRemoveTodo={removeTodo}/>);
    expect(wrapper.find(Todo).at(0).props().onRemoveTodo).toEqual(removeTodo);
  });
});