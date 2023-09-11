export enum RequestMethod {
  GET = 0,
  POST,
  PUT,
  PATCH,
  DELETE,
  ALL,
  OPTIONS,
  HEAD,
  SEARCH,
}

export type RequestMethodString =
  | "get"
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "head"
  | "options";
