export type RequestResultType<T> = {
    headers: Response['headers'];
    status: Response['status'];
    data: T | string | null;
}

export class Request {
    baseUrl: string;

    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

    async makeRequest<T>(
      endpoint?: string,
    ): Promise<RequestResultType<T>> {
      const response: Response = await fetch(`${this.baseUrl}${endpoint || ''}`);
      const result: RequestResultType<T> = {
        headers: response.headers,
        status: response.status,
        data: null,
      };

      if (response.headers.get('content-type')?.startsWith('application/json')) {
        result.data = await response.json();
      } else {
        const text = await response.text();
        result.data = text;
      }

      if (response.ok) {
        return result;
      }

      return Promise.reject(result);
    }

    get<T>(
      endpoint?: string, params?: Record<string | number, string>,
    ): Promise<RequestResultType<T>> {
      let path = endpoint;

      if (params) {
        const query = new URLSearchParams(params);
        path += `?${query.toString()}`;
      }

      return this.makeRequest<T>(path);
    }
}
