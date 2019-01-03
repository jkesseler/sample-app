import uuidv4 from 'uuid/v4';
import * as actionTypes from './action-types';

// Abstracting reducer functions makes it easier to unit test
export function todoLoadSuccess(state, action) {
  const { todos } = action;
  return state.concat(todos);
}

export function todoAdd(state, action) {
  if (!action.text) {
    return state;
  }

  return [
    ...state,
    {
      id: uuidv4(),
      text: action.text,
      checked: false,
    },
  ];
}

export function toggleTodo(state, action) {
  return state.map(
    todo => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo),
  );
}


export function removeTodo(state, action) {
  return state.filter(
    todo => todo.id !== action.id,
  );
}


export default function todosReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_SUCCESS:
      return todoLoadSuccess(state, action);

    case actionTypes.ADD:
      return todoAdd(state, action);

    case actionTypes.TOGGLE:
      return toggleTodo(state, action);

    case actionTypes.DELETE:
      return removeTodo(state, action);

    default:
      return state;
  }
}
