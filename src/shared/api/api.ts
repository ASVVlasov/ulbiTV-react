import axios from 'axios';

import { LOCAL_STORAGE_TOKEN_KEY } from '../const/localStorage';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000/api' });
axiosInstance.interceptors.request.use((requestConfig) => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  if (token) {
    requestConfig.headers.setAuthorization(`Bearer ${token}`);
  }

  return requestConfig;
});

export { axiosInstance };
