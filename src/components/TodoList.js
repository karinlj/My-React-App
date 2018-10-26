import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class TodoList extends Component { //class based component
    state = {
        todos: [
            { id: 1, content: 'Buy some milk' },
            { id: 2, content: 'Cuddle with cats' }
        ]
    }
    deleteTodo = (id) => {
        //console.log(id);
        //new copy of array:todos stored in variable
        //filter method with passed back function with todo as parameter
        const todos = this.state.todos.filter(todo => {
            //return true (if not equal)if keeping the item, false if removing
            return todo.id !== id
        });
        this.setState({
            todos: todos
        })
    }
    addTodo = (todo) => {
        //generate random id
        todo.id = Math.random();
        //new array with spread op
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos //key and value
        })
    }
    render() {
        return (
            <div className="todo-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            {/* <header className="App-header"> */}
                            <h1 className="">Todo's</h1>
                            {/* nesting component, passing todos-array and delete-func */}
                            <Todos todosprops={this.state.todos} deleteTodo={this.deleteTodo} />
                            <AddTodo addTodoprops={this.addTodo} />

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default TodoList;
