import axios from 'axios';
import settings from './settings';

export default (method = 'get', data = null) => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.baseURL = settings.apiUrl;

  return axios({
    method,
    headers: {
      'content-type': 'application/json',
      'secret-key': settings.apiKey,
      private: true,
    },
    data: data ? JSON.stringify(data) : null,
  });
};
