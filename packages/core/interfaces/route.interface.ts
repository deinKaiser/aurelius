import { RequestMethodString } from "../enums/request-method.enum"

export interface Route {
  method: RequestMethodString;
  path: string;
  handler: Function;
}