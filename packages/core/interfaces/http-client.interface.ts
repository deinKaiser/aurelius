export interface HttpClient {
  get(path: string, handler: Function): void;
  post(path: string, handler: Function): void;
  put(path: string, handler: Function): void;
  patch(path: string, handler: Function): void;
  delete(path: string, handler: Function): void;
  all(path: string, handler: Function): void;
  options(path: string, handler: Function): void;
  head(path: string, handler: Function): void;
  search(path: string, handler: Function): void;

  listen(port: number);
}