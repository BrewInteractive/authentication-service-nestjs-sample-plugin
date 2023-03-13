<p  align="center">
<a  href="http://brewwww.com/"  target="blank"><img  src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b80d525d-0026-4c9f-bfa5-7c32f8e9250c/Brew-Logo-Small.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230313T110207Z&X-Amz-Expires=86400&X-Amz-Signature=20ba5981b9341e0cbd4a0d62570e759fd899a8a2abe9451b28c5dd219124c3a2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Brew-Logo-Small.png%22&x-id=GetObject"  width="300"  alt="Brew Logo"  /></a>
</p>


<h1  align="center">Authentication Service Nest.js Sample Plugin</h1>

In this project, we will add a new plugin to a Nest.js application using a plugin included in the [@brewww/authentication-service package](https://github.com/BrewInteractive/authentication-service-nestjs).


## Configuration

After installing, add the following line to the `peerDependencies` section in your `package.json` file:

```bash
"peerDependencies": {
  "@brewww/authentication-service": "^1.1.2"
}
```

## Setup

Install the package by running the following command in the root of your project:

```bash
yarn install
```


## Plugin Example Code

Now we can start generating the plugin code. First, create a new file for the plugin and paste the following code into it:

```bash
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
}`
```

This plugin derives from the `BasePlugin` class found in the `@brewww/authentication-service` package. It injects the `PluginTestService` using `Inject` and adds the text `Text3` inside the `load` function.

## Conclusion

Now the plugin is ready to use in your Nest.js  application. Launch the application and verify that the plugin is working correctly.