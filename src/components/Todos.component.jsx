import React from "react";
import PropTypes from 'prop-types';
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodosComponent = (props) => {
  const { todos, onRemoveTodo } = props;

  return (
    <ListGroup>
      {todos.map((todo) =>
        <Todo key={todo.id} onRemoveTodo={onRemoveTodo} todo={todo} />
      )}
    </ListGroup>
  )
};

TodosComponent.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default TodosComponent;