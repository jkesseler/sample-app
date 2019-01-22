import * as types from './types';

// Action creators
export const addTodo = text => ({
  type: types.ADD,
  payload: { text },
});

export const toggleTodo = id => ({
  type: types.TOGGLE,
  payload: { id },
});

export const deleteTodo = id => ({
  type: types.DELETE,
  payload: { id },
});

export const loadTodos = () => ({
  type: types.LOAD_START,
});

export const loadTodosFail = error => ({
  type: types.LOAD_ERROR,
  payload: error,
  error: true,
});

export const loadTodosSuccess = todos => ({
  type: types.LOAD_SUCCESS,
  payload: { todos },
});
