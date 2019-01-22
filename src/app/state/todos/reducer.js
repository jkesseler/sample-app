import uuidv4 from 'uuid/v4';
import * as types from './types';

// Abstracting reducer functions makes it easier to unit test
export function todoLoadSuccess(state, { payload }) {
  const { todos } = payload;
  return state.concat(todos);
}

export function todoAdd(state, { payload }) {
  if (!payload.text) {
    return state;
  }

  return [
    ...state,
    {
      id: uuidv4(),
      text: payload.text,
      checked: false,
    },
  ];
}

export function toggleTodo(state, { payload }) {
  return state.map(
    todo => (todo.id === payload.id ? { ...todo, checked: !todo.checked } : todo),
  );
}


export function removeTodo(state, { payload }) {
  return state.filter(
    todo => todo.id !== payload.id,
  );
}


export default function todosReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_SUCCESS:
      return todoLoadSuccess(state, action);

    case types.ADD:
      return todoAdd(state, action);

    case types.TOGGLE:
      return toggleTodo(state, action);

    case types.DELETE:
      return removeTodo(state, action);

    default:
      return state;
  }
}
