import AddTodo from '../components/add-todo';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => {
      dispatch({type: 'ADD', text});
    }
  }
};

export default connect(()=> {
  return {}
}, mapDispatchToProps)(AddTodo);