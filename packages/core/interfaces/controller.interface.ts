import { Route } from "./route.interface"

export interface AureliusController {
  router(): {
    controllerPath: string,
    routes: Route[]
  }
}
