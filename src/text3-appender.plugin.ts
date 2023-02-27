import { Inject, Injectable } from "@nestjs/common";

import { BasePlugin } from "brew-authentication-api/dist/plugin/abstract/base-plugin.plugin";
import { PluginTestService } from "brew-authentication-api/dist/plugin-test/plugin-test.service";
import { brewAuthenticationApi } from "../package.json";

@Injectable()
export class Text3AppenderPlugin extends BasePlugin {
  @Inject("PluginTestService")
  private pluginTestService: PluginTestService;

  constructor() {
    super(brewAuthenticationApi);
  }

  load(): Promise<void> {
    this.pluginTestService.appendText("Text3");
    return Promise.resolve();
  }
}
