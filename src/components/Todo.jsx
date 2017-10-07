import * as React from "react";
import {Component} from "react";
import PropTypes from 'prop-types';

export default class Todo extends Component {
    render() {
        return (
            <div key={this.props.id}>{this.props.todo}</div>
        )
    }
}

Todo.propTypes = {
    id: PropTypes.number,
    todo: PropTypes.string
}