import * as React from "react";
import {Component} from "react";
import PropTypes from 'prop-types';
import {ListGroupItem} from "react-bootstrap";

export default class Todo extends Component {
    render() {
        return (
            <ListGroupItem key={this.props.id}>{this.props.todo}</ListGroupItem>
        )
    }
}

Todo.propTypes = {
    id: PropTypes.number,
    todo: PropTypes.string.isRequired
};