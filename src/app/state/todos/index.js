import reducer from './reducer';
import persistTodoMiddleware from './middleware';
import * as types from './types';
import * as actions from './actions';

export {
  actions,
  types,
  persistTodoMiddleware as middleware,
};

export default reducer;
