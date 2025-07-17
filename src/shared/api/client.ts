import { interceptor, type RequestOptions } from "./interceptor";

const api = {
  get: async (url: string, options: RequestOptions = {}) => {
    const request = await interceptor.request(options);
    const response = await fetch(url, request);
    return interceptor.response(response);
  },
};

export default api;
