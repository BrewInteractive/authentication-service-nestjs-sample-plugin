import { Inject, Injectable } from "@nestjs/common";

import { BasePlugin } from "brew-authentication-api/dist/plugin/abstract/base-plugin.plugin";
import { ModuleRef } from "@nestjs/core";
import { PluginTestService } from "brew-authentication-api/dist/plugin-test/plugin-test.service";
import { brewAuthenticationApi } from "../package.json";

@Injectable()
export class Text3AppenderPlugin extends BasePlugin {
  // @Inject("PluginTestService")
  // private pluginTestService: PluginTestService;

  constructor() {
    super(brewAuthenticationApi);
  }

  load(moduleRef: ModuleRef): Promise<void> {
    const pluginTestService = moduleRef.get<PluginTestService>(
      "PluginTestService",
      {
        strict: false,
      }
    );
    pluginTestService.appendText("Text3");
    return Promise.resolve();
  }
}
