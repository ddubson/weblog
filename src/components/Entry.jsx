import React, { PureComponent } from 'react'
import { FormGroup, Form } from "react-bootstrap";
import PropTypes from 'prop-types'
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export class Entry extends PureComponent {
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
    const { classes } = this.props;

    return (
      <div>
        <Form onSubmit={this.addTodo}>
          <FormGroup>
            <InputLabel>
              Entry
            </InputLabel>
            {' '}
            <Input
              id="logEntry"
              type="text"
              onChange={this.onTodoChange}
            />
            <Button variant="contained" type="submit" color="primary" className={classes.button}>
              Add Entry
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

Entry.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Entry);