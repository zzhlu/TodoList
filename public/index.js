import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/reducer';
import AddTodo from './containers/add-todo';
import TodoList from './containers/todo-list';
import middleware from './middleware/middleware';

const createStoreMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreMiddleware(reducer);

class App extends Component {
  render() {
    return <div>
      <AddTodo />
      <TodoList />
    </div>
  }
}

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));