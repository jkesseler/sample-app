import reducer, {
  todoLoadSuccess,
  todoAdd,
  toggleTodo,
  removeTodo,
} from '../reducer';

const mockTodo = {
  id: 1,
  text: 'text',
  checked: false,
};

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'DUMMY_TYPE' };
    const initialState = [];
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('should add todos on load success', () => {
    const action = { todos: [mockTodo] };
    const result = todoLoadSuccess([], action);
    expect(result).toContainObject(mockTodo);
  });

  it('should add a todo', () => {
    const action = { text: 'dummy text' };
    const result = todoAdd([], action);
    expect(result).toContainObject(action);
  });

  it('should toggle a todo', () => {
    const action = { id: mockTodo.id };
    const initialState = [mockTodo];
    const expectedState = [{ ...mockTodo, checked: !mockTodo.checked }];
    const result = toggleTodo(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('shoudl remove a todo', () => {
    const action = { id: mockTodo.id };
    const initialState = [mockTodo];
    const result = removeTodo(initialState, action);

    expect(result).toEqual([]);
  });
});
