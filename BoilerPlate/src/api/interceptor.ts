import { AxiosInstance, AxiosRequestConfig } from 'axios';

const setHeaders = (
  config: AxiosRequestConfig,
): AxiosRequestConfig => {
  const { headers } = config;
  // headers['Access-Control-Allow-Origin'] = '*';

  headers['Content-Type'] = 'application/json; charset=utf-8'
  return config;
};

const configInterceptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(async config => {
    return setHeaders(config);
  });

  axios.interceptors.response.use(
    response =>
      // Do something with response data
      response,
    error =>
      // Do something with response error
      Promise.reject(error),
  );
};

export default configInterceptors;