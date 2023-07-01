enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  [key: string]: string | number | undefined | Record<string, unknown>;
  timeout?: number;
  method?: METHODS;
  data?: Record<string, unknown>;
};

const queryStringify = (data: Record<string, unknown>) =>
  Object.entries(data).reduce(
    (result, [key, value], index) => `${result}${index ? '&' : ''}${key}=${value}`,
    '?',
  );

class HTTPTransport {
  get = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  post = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  put = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  delete = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  // eslint-disable-next-line class-methods-use-this
  request = (url: string, options: Options, timeout: number = 5000) => {
    const { data, headers } = options;
    const method = options.method ?? METHODS.GET;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.timeout = timeout;
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = () => reject;

      xhr.ontimeout = () => {
        reject();
      };
      if (method === METHODS.GET && !data) {
        xhr.send();
      }

      if (method === METHODS.GET && data) {
        xhr.open(method, `${url}${queryStringify(data)}`);
        xhr.send();
      } else {
        // added JSON.stringify diff to yap implementation
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
