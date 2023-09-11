import { BODY_KEY } from "../decorators/body.decorator";
import { PARAM_KEY } from "../decorators/param.decorator";
import { PARAMS_KEY } from "../decorators/params.decorator";
import { QUERY_KEY } from "../decorators/query.decorator";

export function getArgumentsForMethod(
  controllerInstance,
  methodKey: string,
  req
): any[] {
  const args = [];
  (
    Reflect.getOwnMetadata(BODY_KEY, controllerInstance, methodKey) || []
  ).forEach((index) => {
    args[index] = req.body;
  });

  (
    Reflect.getOwnMetadata(QUERY_KEY, controllerInstance, methodKey) || []
  ).forEach((value) => {
    if (typeof value === "number") {
      args[value] = req.query;
      return;
    }
    const [field, index] = value;
    if (typeof field === "string") {
      args[index] = req.query[field];
      return;
    }
    args[index] = {};
    field.forEach((fieldName) => {
      args[index][fieldName] = req.query[fieldName];
    });
  });

  (
    Reflect.getOwnMetadata(PARAMS_KEY, controllerInstance, methodKey) || []
  ).forEach((index) => {
    args[index] = req.params;
  });

  (
    Reflect.getOwnMetadata(PARAM_KEY, controllerInstance, methodKey) || []
  ).forEach(([key, index]) => {
    args[index] = req.params[key];
  });

  return args;
}
