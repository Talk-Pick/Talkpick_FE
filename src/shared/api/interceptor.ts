export type RequestOptions = RequestInit & {
  auth?: boolean;
};
export const interceptor = {
  request: async (options: RequestOptions = {}): Promise<RequestInit> => {
    const { auth = false, ...requestOptions } = options;

    const headers: HeadersInit = {
      ...requestOptions.headers,
    };

    // Content-Type 설정
    if (!(headers as Record<string, string>)['Content-Type'] && !(requestOptions.body instanceof FormData)) {
      (headers as Record<string, string>)['Content-Type'] = 'application/json';
    }

    // 인증이 필요한 경우 토큰 추가
    if (auth) {
      const token = localStorage.getItem('token');
      if (token) {
        (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
      }
    }

    return {
      ...requestOptions,
      headers
    };
  },
  response: async (response: Response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
};
