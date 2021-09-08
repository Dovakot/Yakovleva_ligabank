import axios from 'axios';

const BASE_URL = 'https://api.frankfurter.app/';
const TIMEOUT = 5000;

const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    responseType: 'json',
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;
