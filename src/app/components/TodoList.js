/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Paper } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import * as actions from '../state/todos/actions';
import TodoListItem from './TodoListItem';


export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const loading = !(todos && todos.length > 0);

  return (
    <Paper>
      { loading
        ? (<LinearProgress />)
        : (
          <List>
            {todos.map((todo, idx) => (
              <TodoListItem
                {...todo}
                key={todo.id}
                divider={idx !== todos.length - 1}
                onButtonClick={() => deleteTodo(todo)}
                onCheckboxToggle={() => toggleTodo(todo)}
              />
            ))}
          </List>
        )}
    </Paper>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequried,
  })),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: todo => dispatch(actions.toggleTodo(todo.id)),
  deleteTodo: todo => dispatch(actions.deleteTodo(todo.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
