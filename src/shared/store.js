import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import todosServiceMiddleware from './todos-service-middleware';
import rootReducer from '../client/reducers';

const isServer = typeof window === 'undefined';


export default (url = '/') => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
      initialEntries: [url],
    })
    : createBrowserHistory();

  const middleware = [
    thunk,
    todosServiceMiddleware,
    logger, // Important, logger always has to be the last middleware in the stack
  ];

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
  );

  // Get state from server if it's available
  const initialState = !isServer ? window.__INITIAL_STATE__ : { todos: [] };

  // Create the store
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );

  return {
    store,
    history,
  };
};
