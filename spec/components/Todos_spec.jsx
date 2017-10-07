import React from "react";
import {mount} from "enzyme";
import Todos from "../../src/components/Todos";
import Todo from "../../src/components/Todo";

describe("Todos", () => {
    it("should display a list of Todo", () => {
        const todos = [
            "Todo 1", "Todo 2", "Todo 3"
        ];

        const wrapper = mount(<Todos todos={todos}/>);

        expect(wrapper.find(Todo).length).toEqual(3);
        expect(wrapper.find(Todo).at(0).props().todo).toEqual("Todo 1");
        expect(wrapper.find(Todo).at(1).props().todo).toEqual("Todo 2");
        expect(wrapper.find(Todo).at(2).props().todo).toEqual("Todo 3");
    });
});