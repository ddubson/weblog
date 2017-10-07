import React from "react";
import {Component} from 'react'
import Todo from "./Todo";
import PropTypes from 'prop-types';
import {ListGroup} from "react-bootstrap";

export default class Todos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListGroup>
                {this.props.todos.map((todo, i) =>
                    <Todo key={i} id={i} todo={todo}/>)
                }
            </ListGroup>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};