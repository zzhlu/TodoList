import TodoList from '../components/todo-list';
import {connect} from 'react-redux';

const mapStateOnProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchOnProps = (dispatch) => {
  return {
    delete: (index) => {
      dispatch({type: 'DELETE', index});
    }
  };
};

export default connect(mapStateOnProps, mapDispatchOnProps)(TodoList);
