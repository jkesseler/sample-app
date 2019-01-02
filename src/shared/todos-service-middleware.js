import axios from 'axios';

const fetcher = (method = 'get', data, config) => {
  // TODO: Abstract this to settings object
  const {
    REACT_APP_JSONBIN_API_URI,
    REACT_APP_JSONBIN_BIN_ID,
    REACT_APP_JSONBIN_API_KEY,
  } = process.env;

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.baseURL = `${REACT_APP_JSONBIN_API_URI}${REACT_APP_JSONBIN_BIN_ID}`;

  return axios({
    method,
    headers: {
      'content-type': 'application/json',
      'secret-key': REACT_APP_JSONBIN_API_KEY,
      private: true,
    },
    data: data ? JSON.stringify(data) : null,
  });
};


const todoServiceMiddleware = store => next => async (action) => {
  // Pass all actions through by default

  next(action);
  switch (action.type) {
    case 'TODO_DATA_LOADING':
      fetcher.end((err, res) => {
        if (err) {
          // in case there is any error, dispatch an action containing the error
          next({
            type: 'TODO_DATA_ERROR',
            err,
          });
        }
        const data = JSON.parse(res.text);
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'TODO_DATA_RECEIVED',
          data,
        });
      });
      break;

    case 'TOGGLE_TODO': {
      // Currently we override the entire remote store
      const { todos } = store.getState();
      fetcher('put', { data: todos });
      next(action);
    }
      break;

    case 'REMOVE_TODO': {
      const { todos } = store.getState();
      fetcher('put', { data: todos });
      next(action);
    }
      break;


    default:
      break;
  }
};

export default todoServiceMiddleware;
