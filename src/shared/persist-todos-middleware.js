import fetcher from './fetcher';

const persistTodoMiddleware = store => next => (action) => {
  // Pass all actions through by default
  next(action);


  switch (action.type) {
    // TODO: Load todo's server side and create intialState there
    case 'HYDRATE_TODOS_START':
      fetcher()
        .then((response) => {
          next({
            type: 'HYDRATE_TODOS_DONE',
            data: response.data.todos,
          });
        }).catch((err) => {
          next({
            type: 'HYDRATE_TODOS_ERROR',
            err,
          });
        });
      break;

    // On any state mutation the entire state is stored in JSONBIN.io
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
    case 'REMOVE_TODO': {
      const { todos } = store.getState();
      fetcher('put', todos);
    }
      break;

    default:
      break;
  }
};

export default persistTodoMiddleware;
