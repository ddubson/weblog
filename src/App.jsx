import React from 'react'
import Entry from "./components/Entry.jsx";
import Todos from "./components/Todos.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(entry) {
        this.setState({ todos: [entry, ...this.state.todos]})
    }

    render() {
        return (
            <div>
                <div>
                    <Entry onAddTodo={this.addTodo}/>
                </div>
                <div>
                    <Todos todos={this.state.todos}/>
                </div>
            </div>
        )
    }
}
