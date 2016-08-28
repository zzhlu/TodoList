import React, {Component} from 'react';

export default class AddTodo extends Component {
  onAdd() {
    if (this.refs.input.value !== '') {
      this.props.add(this.refs.input.value);
      this.refs.input.value = '';
    }
  }

  render() {
    return <div>
      <input type="text" ref="input"/>
      <button onClick={this.onAdd.bind(this)}>+</button>
    </div>
  }
}