import {Component} from 'react'
import React from 'react'
import {FormGroup, FormControl} from "react-bootstrap";

export default class Entry extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <FormControl type="text" id="logEntry" placeholder="Enter text..." />
                    <FormControl type="submit" id="entrySubmit" />
                </FormGroup>
            </div>
        )
    }
}
