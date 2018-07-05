import React from "react";
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";

const TodosComponent = (props) => {
  const { todos, onRemoveTodo } = props;

  return (
    <Paper>
      {todos.map((todo) =>
        <Todo key={todo.id} onRemoveTodo={onRemoveTodo} todo={todo} />
      )}
    </Paper>
  )
};

TodosComponent.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default TodosComponent;