import { addTodo, removeTodo } from './Todos.actions';
import actions from '../constants';

describe("Todos actions", () => {
  describe("addTodo", () => {
    let action;
    let entryContent;

    beforeEach(() => {
      entryContent = "Hello!";
      action = addTodo(entryContent);
    });

    it("should have an ADD_TODO type", () => {
      expect(action.type).toEqual(actions.ADD_TODO);
    });

    it("should have a todo", () => {
      expect(action.payload).toEqual("Hello!");
    });
  });

  describe("removeTodo", () => {
    let action;
    let id = 123;

    beforeEach(() => {
      action = removeTodo(id);
    });

    it("should have an REMOVE_TODO type", () => {
      expect(action.type).toEqual(actions.REMOVE_TODO);
    });

    it("should have a todo ID", () => {
      expect(action.payload).toEqual(123);
    });
  });
});