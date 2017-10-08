import React, {Component} from 'react'
import Entry from "./components/Entry.jsx";
import Todos from "./components/Todos.jsx";
import AppHeader from "./components/AppHeader";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(entry) {
        const todo = { id: this.state.todos.length + 1, entry};
        this.setState({todos: [todo, ...this.state.todos]});
    }

    removeTodo(id) {
        this.setState({todos: this.state.todos.filter(f => f.id !== id)})
    }

    render() {
        return (
            <div>
                <div>
                    <AppHeader/>
                </div>
                <div className={"container"}>
                    <div className={"row"}>
                        <Entry onAddTodo={this.addTodo}/>
                    </div>
                    <div className={"row"}>
                        <Todos
                            todos={this.state.todos}
                            onRemoveTodo={this.removeTodo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
