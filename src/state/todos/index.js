import reducer from './reducer';
import persistTodoMiddleware from './middleware';
import * as actionTypes from './action-types';
import * as actions from './actions';

export {
  actions,
  actionTypes,
  persistTodoMiddleware as middleware,
};

export default reducer;
