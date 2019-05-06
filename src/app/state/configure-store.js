import { combineReducers, createStore, applyMiddleware } from 'redux';
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
  ];

  const composeEnhancers = composeWithDevTools({
    trace: true,
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  return store;
};

export default configureStore;
