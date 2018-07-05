import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Glyphicon } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo() {
    const { onRemoveTodo, todo } = this.props;
    onRemoveTodo(todo.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <Paper key={todo.id}>
        {`${todo.entry} (${todo.id})`}
        <Button onClick={this.removeTodo} bsSize="xsmall">
          <Glyphicon glyph="remove" />
        </Button>
      </Paper>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};