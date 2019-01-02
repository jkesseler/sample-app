/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Paper } from '@material-ui/core';

import * as actions from '../actions/todos';
import TodoListItem from './TodoListItem';


export const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  if (todos && todos.length > 0) {
    return (
      <Paper>
        <List style={{ overflow: 'scroll' }}>
          {todos.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={todo.id}
              divider={idx !== todos.length - 1}
              onButtonClick={() => removeTodo(todo)}
              onCheckboxToggle={() => toggleTodo(todo)}
            />
          ))}
        </List>
      </Paper>
    );
  }
  return null;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequried,
  })),
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: todo => dispatch(actions.toggleTodo(todo.id)),
  removeTodo: todo => dispatch(actions.removeTodo(todo.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
