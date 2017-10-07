import React from "react";
import {Component} from 'react'
import Todo from "./Todo";
import PropTypes from 'prop-types';

export default class Todos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.todos.map((todo, i) =>
                    <Todo key={i} id={i} todo={todo}/>)
                }
            </div>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};