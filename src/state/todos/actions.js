import * as actionTypes from './action-types';

// Action creators
export const addTodo = text => ({
  type: actionTypes.ADD,
  text,
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE,
  id,
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE,
  id,
});

export const loadTodos = () => ({
  type: actionTypes.LOAD_START,
});

export const loadTodosFail = error => ({
  type: actionTypes.LOAD_ERROR,
  error,
});

export const loadTodosSuccess = todos => ({
  type: actionTypes.LOAD_SUCCESS,
  todos,
});
