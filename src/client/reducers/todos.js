import uuidv4 from 'uuid/v4';

const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
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
    case 'TOGGLE_TODO':
      return state.map(
        todo => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo),
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
};

export default todos;
