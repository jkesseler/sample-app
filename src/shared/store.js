import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import rootReducer from '../client/reducers';

const isServer = typeof window === 'undefined';


export default (url = '/') => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
      initialEntries: [url],
    })
    : createBrowserHistory();

  // Get state from server if it's available
  const initialState = !isServer ? window.__INITIAL_STATE__ : { todos: [] };
  const middleware = [thunk];

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
  );


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
