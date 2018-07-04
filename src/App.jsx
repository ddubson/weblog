import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Entry from "./components/Entry";
import TodosComponent from "./components/Todos.component";
import AppHeader from "./components/AppHeader";
import { addTodo, removeTodo } from './components/Todos.actions';

export const App = (props) => {
  const { addTodo, removeTodo, todos } = props;

  return (
    <div>
      <div>
        <AppHeader />
      </div>
      <div className="container">
        <div className="row">
          <Entry onAddTodo={addTodo} />
        </div>
        <div className="row">
          <TodosComponent
            todos={todos}
            onRemoveTodo={removeTodo}
          />
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);