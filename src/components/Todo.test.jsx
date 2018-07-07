import React from "react";
import { createMount } from '@material-ui/core/test-utils';
import Todo from "./Todo";

describe("Todo", () => {
  const todo = { id: 1, entry: "Todo 1" };

  describe("render", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = createMount()(<Todo todo={todo} onRemoveTodo={() => {}} />);
    });

    it("should render todo content", () => {
      expect(wrapper.find('Paper').text()).toEqual("Todo 1 (1)");
    });
  });
});