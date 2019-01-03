import fetcher from '../../utils/fetcher';
import { loadTodosFail, loadTodosSuccess } from './actions';
import * as actionTypes from './action-types';

const persistTodoMiddleware = store => next => (action) => {
  next(action); // Pass all actions through by default

  switch (action.type) {
    // TODO: Load todo's server side and create intialState there
    case actionTypes.LOAD_START:
      fetcher()
        .then((response) => {
          next(loadTodosSuccess(response.data));
        }).catch((err) => {
          next(loadTodosFail(err));
        });
      break;

    // On any state mutation the entire state is stored in JSONBIN.io
    case actionTypes.ADD:
    case actionTypes.TOGGLE:
    case actionTypes.DELETE: {
      const { todos } = store.getState();

      if (todos.length > 0) {
        fetcher('put', todos);
      }
    }
      break;

    default:
      break;
  }
};

export default persistTodoMiddleware;
