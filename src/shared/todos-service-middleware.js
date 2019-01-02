import fetcher from './fetcher';

const todoMiddleware = store => next => (action) => {
  // Pass all actions through by default
  next(action);


  switch (action.type) {
    // TODO: Hydrate state on server side
    case 'TODO_DATA_LOAD':
      fetcher()
        .then((response) => {
          next({
            type: 'TODO_DATA_RECEIVED',
            data: response.data.todos,
          });
        }).catch((err) => {
          next({
            type: 'TODO_DATA_ERROR',
            err,
          });
        });
      break;

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

export default todoMiddleware;
