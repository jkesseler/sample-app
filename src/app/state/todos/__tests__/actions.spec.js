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
      text,
    }];

    store.dispatch(actions.addTodo(text));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches toggeTodo and retuns correct payload', () => {
    const id = 1;
    const expectedAction = [{
      type: actionTypes.TOGGLE,
      id,
    }];

    store.dispatch(actions.toggleTodo(id));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches deleteTodo and retuns correct payload', () => {
    const id = 1;
    const expectedAction = [{
      type: actionTypes.DELETE,
      id,
    }];

    store.dispatch(actions.deleteTodo(id));
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
    const expectedAction = [{
      type: actionTypes.LOAD_ERROR,
    }];

    store.dispatch(actions.loadTodosFail());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches loadTodosSuccess and retuns correct payload', () => {
    const expectedAction = [{
      type: actionTypes.LOAD_SUCCESS,
    }];

    store.dispatch(actions.loadTodosSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
