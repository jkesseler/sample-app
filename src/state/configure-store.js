import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger as loggerMiddleware } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todosReducer, { middleware as todosMiddleware } from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const configureStore = () => {
  const middleware = [
    thunk,
    todosMiddleware,
    loggerMiddleware,
  ];

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
  );

  const store = createStore(
    rootReducer,
    composedEnhancers,
  );

  return store;
};

export default configureStore;
