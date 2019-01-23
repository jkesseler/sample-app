import axios from 'axios';
import settings from './settings';

export default ({ path = '/todos', method = 'get', data = null }) => axios({
  method,
  url: `${settings.clientApiBaseUrl}${path}`,
  headers: {
    'content-type': 'application/json',
  },
  data: data ? JSON.stringify(data) : null,
});
