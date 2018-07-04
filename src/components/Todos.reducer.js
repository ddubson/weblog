import shortid from 'shortid';
import update from 'immutability-helper';
import actions from '../constants';

export const initialTodos = () => ([]);

const todosReducer = (state = initialTodos(), action = { type: "" }) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      return update(state, { $push: [{ id: shortid.generate(), entry: action.payload }] });
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;