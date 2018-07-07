import React from "react";
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";

const TodosComponent = (props) => {
  const { todos } = props;

  return (
    <Paper>
      {todos.map((todo) =>
        <Todo key={todo.id} todo={todo} />
      )}
    </Paper>
  )
};

TodosComponent.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodosComponent;