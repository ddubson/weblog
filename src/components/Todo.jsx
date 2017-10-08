import * as React from "react";
import {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Glyphicon, ListGroupItem} from "react-bootstrap";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(e) {
        this.props.onRemoveTodo(this.props.todo.id);
    }

    render() {
        return (
            <ListGroupItem
                key={this.props.todo.id}>{this.props.todo.entry}
                    <Button onClick={this.removeTodo} bsSize="xsmall"><Glyphicon glyph="remove" /></Button>
            </ListGroupItem>
        )
    }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    onRemoveTodo: PropTypes.func.isRequired
};