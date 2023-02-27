import { Test, TestingModule } from "@nestjs/testing";

import { PluginTestModule } from "brew-authentication-api/dist/plugin-test/plugin-test.module";
import { PluginTestService } from "brew-authentication-api/dist/plugin-test/plugin-test.service";
import { Text3AppenderPlugin } from "./text3-appender.plugin";

describe("Text3AppenderPlugin", () => {
  let plugin: Text3AppenderPlugin;
  let pluginTestService: PluginTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PluginTestModule],
      providers: [Text3AppenderPlugin],
    }).compile();

    plugin = module.get<Text3AppenderPlugin>(Text3AppenderPlugin);
    plugin.load();
    pluginTestService = module.get<PluginTestService>("PluginTestService");
  });

  it("should be defined", () => {
    expect(plugin).toBeDefined();
  });

  it("should override getHello method of PluginTestService", () => {
    expect(pluginTestService.getHello()).toBe("Hello World!Text3");
  });
});
