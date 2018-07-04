import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Glyphicon, ListGroupItem } from "react-bootstrap";

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
      <ListGroupItem key={todo.id}>
        {`${todo.entry} (${todo.id})`}
        <Button onClick={this.removeTodo} bsSize="xsmall">
          <Glyphicon glyph="remove" />
        </Button>
      </ListGroupItem>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};