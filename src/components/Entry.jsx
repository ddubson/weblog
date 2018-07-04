import React, { PureComponent } from 'react'
import { FormGroup, FormControl, Form, Button, ControlLabel } from "react-bootstrap";
import PropTypes from 'prop-types'

export default class Entry extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      entry: "",
    };
    this.addTodo = this.addTodo.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
  }

  onTodoChange(e) {
    this.setState({ entry: e.target.value });
  }

  addTodo(e) {
    const { entry } = this.state;
    const { onAddTodo } = this.props;

    if (entry) {
      onAddTodo(entry);
    }

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addTodo}>
          <FormGroup>
            <ControlLabel>
              Entry
            </ControlLabel>
            <FormControl
              type="text"
              id="logEntry"
              onChange={this.onTodoChange}
              placeholder="Enter text..."
            />
            <Button bsSize="small" type="submit" id="entrySubmit">
              Add Entry
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

Entry.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};