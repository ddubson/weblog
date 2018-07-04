import actions from '../constants';

export const addTodo = (content) => ({
  type: actions.ADD_TODO,
  payload: content,
});

export const removeTodo = (id) => ({
  type: actions.REMOVE_TODO,
  payload: id,
});