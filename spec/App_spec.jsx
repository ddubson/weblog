import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../src/App'
import Entry from "../src/components/Entry";
import Todos from "../src/components/Todos";
import AppHeader from "../src/components/AppHeader";

describe("App", function () {
    describe("on initial load of component", () => {
        it("should have a Header component", () => {
            const wrapper = shallow(<App/>);
            expect(wrapper.find(AppHeader).length).toEqual(1);
        })

        it("should have an empty todos list", () => {
            const wrapper = mount(<App/>);
            expect(wrapper.state().todos.length).toBe(0)
        });

        it("should display a single Entry prompt", () => {
            const wrapper = shallow(<App/>);
            expect(wrapper.find(Entry).length).toBe(1);
        });

        it("should display a Todos container", () => {
            const wrapper = shallow(<App/>);
            expect(wrapper.find(Todos).length).toBe(1);
        });

        it("should pass todos store to Todos component", () => {
            const wrapper = mount(<App/>);
            expect(wrapper.find(Todos).props().todos).toEqual(wrapper.state().todos);
        });

        it("should pass addTodo function to Entry component", () => {
            const wrapper = mount(<App/>);
            expect(wrapper.find(Entry).prop('onAddTodo')).toBe(wrapper.instance().addTodo);
        });

        it("should pass removeTodo function to Todos component", () => {
           const wrapper = mount(<App />);
           expect(wrapper.find(Todos).prop('onRemoveTodo')).toBe(wrapper.instance().removeTodo);
        });

    });

    describe("functions", () => {
        it("should add a todo", () => {
            const wrapper = mount(<App/>);
            expect(wrapper.state().todos.length).toBe(0);
            wrapper.instance().addTodo("an entry");
            wrapper.update();
            expect(wrapper.state().todos.length).toBe(1);
            expect(wrapper.state().todos[0].entry).toEqual("an entry");
            expect(wrapper.state().todos[0].id).toEqual(1);
        });

        it("should remove a todo", () => {
            const wrapper = mount(<App/>);
            const todo = {id: 1, entry: "An entry"};
            wrapper.state().todos.push(todo);

            expect(wrapper.state().todos.length).toBe(1);
            wrapper.instance().removeTodo(todo.id);
            expect(wrapper.state().todos.length).toBe(0);
        });
    })
});