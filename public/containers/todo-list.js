import {connect} from 'react-redux';
import TodoList from  '../components/todo-list';

const mapStateToProps = (state)=> {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    delete: (id)=> {
      dispatch({type: "DELETE", id});
    },
    toggle: (id)=> {
      dispatch({type: 'TOGGLE', id});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);