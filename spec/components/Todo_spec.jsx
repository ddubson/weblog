import * as React from "react";
import {shallow} from "enzyme";
import Todo from "../../src/components/Todo";

describe("Todo", () => {
   describe("render", () => {
       it("should render todo content", () => {
           const id = 1;
           const todo = "Todo 1";
           const wrapper = shallow(<Todo id={id} todo={todo}/>);
           expect(wrapper.find('div').text()).toEqual(todo);
       })
   })
});