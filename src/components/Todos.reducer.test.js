import todosReducer, { initialTodos } from './Todos.reducer';
import { addTodo } from './Todos.actions';

describe("Todos reducer", () => {
  describe("initial state", () => {
    let initialState;

    beforeEach(() => {
      initialState = todosReducer();
    });

    it("should be empty", () => {
      expect(initialState).toEqual([]);
    });
  });

  describe("ADD_TODO", () => {
    let addTodoAction;
    let newState;

    beforeEach(() => {
      addTodoAction = addTodo("Hello!");
      newState = todosReducer(initialTodos(), addTodoAction);
    });

    it("should add to the initialTodos array", () => {
      expect(newState.length).toEqual(1);
    });

    it("should have a unique id", () => {
      expect(newState[0].id.length).toBeGreaterThan(0);
    });

    it("should have an entry", () => {
      expect(newState[0].entry).toEqual("Hello!");
    });
  });

  describe("REMOVE_TODO", () => {

  });
});