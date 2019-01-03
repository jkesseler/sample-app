import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import persistTodoMiddleware from './persist-todos-middleware';
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
    persistTodoMiddleware,
    logger, // Important, logger always has to be the last middleware in the stack
  ];

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
  );

  // Get state from server if it's available. For a new action is kicked off at application start
  // const initialState = !isServer ? window.__INITIAL_STATE__ : { todos: [] };
  const initialState = { todos: [] };

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
