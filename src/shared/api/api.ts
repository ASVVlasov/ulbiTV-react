import axios from 'axios';

import { LOCAL_STORAGE_TOKEN_KEY } from '../const/localStorage';

export const $api = axios.create({ baseURL: 'http://localhost:5000/api' });

$api.interceptors.request.use(async (requestConfig) => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  if (token) {
    requestConfig.headers.setAuthorization(`Bearer ${token}`);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(requestConfig);
    }, 2000);
  });
});
