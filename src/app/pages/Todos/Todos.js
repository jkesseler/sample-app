import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddTodo from '~ui/AddTodo';
import TodoList from '~ui/TodoList';
import { loadTodos } from '~state/todos/actions';


class TodoApp extends Component {
  componentDidMount() {
    const { dispatch, shouldLoad } = this.props;

    if (shouldLoad) {
      dispatch(loadTodos());
    }
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
  shouldLoad: PropTypes.bool,
};

TodoApp.defaultProps = {
  shouldLoad: false,
};

const mapStateToProps = state => ({
  todos: state.todos,
  shouldLoad: (state.todos.length <= 0),
});


export default connect(mapStateToProps)(TodoApp);
