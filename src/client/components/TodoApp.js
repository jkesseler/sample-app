import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { loadTodos } from '../../state/todos/actions';
import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


class TodoApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadTodos());
  }

  render() {
    return (
      <CssBaseline>
        <Layout>
          <AddTodo />
          <TodoList />
        </Layout>
      </CssBaseline>
    );
  }
}


TodoApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect(state => ({ todos: state.todos }))(TodoApp);
