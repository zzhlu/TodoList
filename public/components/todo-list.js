import React, {Component} from 'react';

export default class TodoList extends Component {
  onDelete(index) {
    this.props.delete(index);
  }

  render() {
    const todos = this.props.todos.map((todo, index) => {
      return <div key={index}>
        {todo.text}
        <button onClick={this.onDelete.bind(this, index)}>X</button>
      </div>
    });
    return <div>
      {todos}
    </div>
  }
}