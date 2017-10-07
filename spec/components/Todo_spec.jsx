import React from "react";
import {mount} from "enzyme";
import Todo from "../../src/components/Todo";

describe("Todo", () => {
   describe("render", () => {
       it("should render todo content", () => {
           const id = 1;
           const todo = "Todo 1";
           const wrapper = mount(<Todo id={id} todo={todo}/>);
           expect(wrapper.find('ListGroupItem').text()).toEqual(todo);
       })
   })
});