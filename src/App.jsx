// @flow
import React from 'react'
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Entry from "./components/Entry";
import TodosComponent from "./components/Todos.component";
import AppHeader from "./components/AppHeader";
import { addTodo, removeTodo } from './components/Todos.actions';

export const App = (props: any) => {
  const { addTodo, removeTodo, todos } = props;

  return (
    <Grid container className={{ flexGrow: 1 }} spacing={16}>
      <AppHeader />
      <Grid item xs={12}>
        <div className="row">
          <Entry onAddTodo={addTodo} />
        </div>
        <div className="row">
          <TodosComponent
            todos={todos}
            onRemoveTodo={removeTodo}
          />
        </div>
      </Grid>
    </Grid>
  )
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);