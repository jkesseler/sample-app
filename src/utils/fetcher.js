import axios from 'axios';
import settings from './settings';

export default ({ url, method = 'get', data = null }) => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  return axios({
    method,
    url,
    headers: {
      'content-type': 'application/json',
      'secret-key': settings.apiKey,
      private: true,
      versioning: false,
    },
    data: data ? JSON.stringify(data) : null,
  });
};
