import configureStore from 'redux-mock-store';
import * as actionTypes from '../action-types';
import * as actions from '../actions';

const mockStore = configureStore();
const store = mockStore();


describe('todos actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches addTodo and retuns correct payload', () => {
    const text = 'some text';
    const expectedAction = [{
      type: actionTypes.ADD,
      payload: { text },
    }];

    store.dispatch(actions.addTodo(text));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches loadTodos and retuns correct payload', () => {
    const expectedAction = [{
      type: actionTypes.LOAD_START,
    }];

    store.dispatch(actions.loadTodos());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches loadTodosFail and retuns correct payload', () => {
    const error = new Error('some error');
    const expectedAction = [{
      type: actionTypes.LOAD_ERROR,
      payload: error,
      error: true,
    }];

    store.dispatch(actions.loadTodosFail(error));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches loadTodosSuccess and retuns correct payload', () => {
    const expectedAction = [{
      type: actionTypes.LOAD_SUCCESS,
      payload: {
        todos: [],
      },
    }];

    store.dispatch(actions.loadTodosSuccess([]));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
