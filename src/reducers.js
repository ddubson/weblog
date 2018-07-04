import { combineReducers } from 'redux';
import todosReducer from './components/Todos.reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;