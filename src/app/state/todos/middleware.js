import clientFetcher from '~utils/client-fetcher';
import { loadTodosFail, loadTodosSuccess } from './actions';
import * as types from './types';


const persistTodoMiddleware = store => next => (action) => {
  next(action); // Pass all actions through by default

  switch (action.type) {
    // TODO: Load todo's server side and create intialState there
    case types.LOAD_START:
      clientFetcher({ path: '/todos' })
        .then(response => response.data)
        .then((data) => {
          if (!data || data.constructor !== Array) {
            throw (new Error('response.data is not an Array'));
          }
          next(loadTodosSuccess(data));
        })
        .catch((err) => {
          next(loadTodosFail(err));
        });
      break;

    // On any state mutation the entire state is stored in JSONBIN.io
    case types.ADD:
    case types.TOGGLE:
    case types.DELETE: {
      const { todos } = store.getState();

      if (todos.length > 0) {
        clientFetcher({
          data: todos,
          method: 'put',
          path: '/todos',
        });
      }
    }
      break;

    default:
      break;
  }
};

export default persistTodoMiddleware;
