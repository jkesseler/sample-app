import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTodos } from '../../state/todos/actions';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';


class TodoApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadTodos());
  }

  render() {
    return (
      <>
        <AddTodo />
        <TodoList />
      </>
    );
  }
}


TodoApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});


export default connect(mapStateToProps)(TodoApp);
