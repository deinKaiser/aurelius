import { AureliusController } from "../interfaces/controller.interface";
import { HttpClient } from "../interfaces/http-client.interface";
import { Route } from "../interfaces/route.interface";
import { getArgumentsForMethod } from "../utils/get-arguments-for-decorators";
import { mapControllers } from "../utils/routes.mapper";

export class Router {
  public httpClient: HttpClient;
  public constructor(httpClient: HttpClient, controlers: AureliusController[]) {
    this.httpClient = httpClient;
    controlers
      .map(mapControllers)
      .flat()
      .forEach((route) => {
        this.route(httpClient, route);
      });
    return this;
  }

  public route(
    httpClient,
    {
      method,
      path,
      handler,
      controllerInstance,
      methodKey,
    }: Route & {
      controllerInstance: AureliusController;
      methodKey: string;
    }
  ) {
    httpClient[method](path, async (req, res) => {
      const args = getArgumentsForMethod(Object.getPrototypeOf(controllerInstance), methodKey, req);
      console.log('Applying args to route', args, methodKey, path, method)
      const result = await handler(...args);
      res.send(result);
    });
  }
}
