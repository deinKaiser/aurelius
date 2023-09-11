import { AureliusController } from "../interfaces/controller.interface";
import {
  REGEX_CONSECUTIVE_SLASHES,
  REGEX_START_TRAIL_SLASH,
} from "../constants/regex";
import { Route } from "../interfaces/route.interface";

export function mapControllers(
  controller: AureliusController
): (Route & { controllerInstance: AureliusController; methodKey: string })[] {
  const { controllerPath, routes } = controller.router();

  return routes.map(({ path, method, handler }) => ({
    path: combinePaths(controllerPath, path),
    method,
    handler: handler.bind(controller),
    controllerInstance: controller,
    methodKey: handler.name,
  }));
}

function normalizePath(path: string): string {
  return path.replace(REGEX_START_TRAIL_SLASH, "");
}

function combinePaths(root: string, endpoint: string): string {
  const normalizedRoot = normalizePath(root);
  const normalizedEndpoint = normalizePath(endpoint);
  return `/${normalizedRoot}/${normalizedEndpoint}`.replace(
    REGEX_CONSECUTIVE_SLASHES,
    "/"
  );
}
