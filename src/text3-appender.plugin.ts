import { Inject, Injectable } from "@nestjs/common";

import { BasePlugin } from "@brewww/authentication-service/dist/plugin/abstract/base-plugin.plugin";
import { PluginTestService } from "@brewww/authentication-service/dist/plugin-test/plugin-test.service";
import { authenticationService } from "../package.json";

@Injectable()
export class Text3AppenderPlugin extends BasePlugin {
  @Inject("PluginTestService")
  private pluginTestService: PluginTestService;

  constructor() {
    super(authenticationService);
  }

  load(): Promise<void> {
    this.pluginTestService.appendText("Text3");
    return Promise.resolve();
  }
}
