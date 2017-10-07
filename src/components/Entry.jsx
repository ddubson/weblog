import {Component} from 'react'
import React from 'react'
import {FormGroup, FormControl, Form} from "react-bootstrap";
import PropTypes from 'prop-types'

export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.todo = null;
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
        this.props.onAddTodo(this.todo.value);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addTodo}>
                    <FormGroup>
                        <FormControl inputRef={input => this.todo = input} type="text" id="logEntry" placeholder="Enter text..."/>
                        <FormControl type="submit" id="entrySubmit"/>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

Entry.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};