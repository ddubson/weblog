import React from "react";
import { mount } from "enzyme";
import { Button, Glyphicon } from "react-bootstrap";
import Todo from "./Todo";

describe("Todo", () => {
  const todo = { id: 1, entry: "Todo 1" };

  describe("render", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Todo todo={todo} onRemoveTodo={() => {}} />);
    });

    it("should render todo content", () => {
      expect(wrapper.find('ListGroupItem').text()).toEqual("Todo 1 (1)");
    });

    it("should render an X button with glyphicon for remove function", () => {
      expect(wrapper.find(Glyphicon).props().glyph).toEqual("remove");
    });
  });

  describe("functions", () => {
    it("should be able to remove a todo", () => {
      const removeTodo = jest.fn();
      const wrapper = mount(<Todo todo={todo} onRemoveTodo={removeTodo} />);
      wrapper.find(Button).simulate("click");
      expect(removeTodo).toBeCalledWith(todo.id);
    });
  });
});