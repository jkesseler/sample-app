import * as actionTypes from './action-types';

// Action creators
export const addTodo = text => ({
  type: actionTypes.ADD,
  payload: { text },
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE,
  payload: { id },
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE,
  payload: { id },
});

export const loadTodos = () => ({
  type: actionTypes.LOAD_START,
});

export const loadTodosFail = error => ({
  type: actionTypes.LOAD_ERROR,
  payload: error,
  error: true,
});

export const loadTodosSuccess = todos => ({
  type: actionTypes.LOAD_SUCCESS,
  payload: { todos },
});
