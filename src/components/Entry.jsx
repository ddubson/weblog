import {Component} from 'react'
import React from 'react'
import {FormGroup, FormControl, Form} from "react-bootstrap";

export default class Entry extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.onAddTodo}>
                    <FormGroup>
                        <FormControl type="text" id="logEntry" placeholder="Enter text..."/>
                        <FormControl type="submit" id="entrySubmit"/>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
