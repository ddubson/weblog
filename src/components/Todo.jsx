// @flow

import React from "react";
import Paper from "@material-ui/core/Paper";
import type { TodoProps } from './Todo.js.flow';

const Todo = (props: TodoProps) => {
  const { todo } = props;

  return (
    <Paper key={todo.id}>
      {`${todo.entry} (${todo.id})`}
    </Paper>
  )
};

export default Todo;