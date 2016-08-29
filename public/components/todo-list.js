import React, {Component} from 'react';
export  default  class TodoList extends Component {
  onDelete(id) {
    this.props.delete(id);
  }

  onToggle(id) {
    this.props.toggle(id);
  }

  render() {
    const todos = this.props.todos.map((todo, index)=> {
      return <div key={index}>
        <input type="checkbox" checked={todo.isDone} onClick={this.onToggle.bind(this, todo.id)}/>
        <span style={{"textDecoration": todo.isDone ? 'line-through' : ''}}>{todo.text}</span>
        <button onClick={this.onDelete.bind(this, todo.id)}>X</button>
      </div>
    });
    return <div>
      {todos}
    </div>
  }
}