import { AureliusController } from "./interfaces/controller.interface";
import { HttpClient } from "./interfaces/http-client.interface";
import { Router } from "./router/router";

export class AureliusFactoryStatic {
  public create(httpClient: HttpClient, controlelrs: AureliusController[]) {
    const router = new Router(httpClient,controlelrs);
    return {...router, httpClient};
  }
}

export const AureliusFactory = new AureliusFactoryStatic();
