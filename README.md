<p  align="center">
<a  href="http://brewwww.com/"  target="blank"><img  src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b80d525d-0026-4c9f-bfa5-7c32f8e9250c/Brew-Logo-Small.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230313T110207Z&X-Amz-Expires=86400&X-Amz-Signature=20ba5981b9341e0cbd4a0d62570e759fd899a8a2abe9451b28c5dd219124c3a2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Brew-Logo-Small.png%22&x-id=GetObject"  width="300"  alt="Brew Logo"  /></a>
</p>

 
<h1  align="center">Authentication Service Nest.js Sample Plugin</h1>

In this project, we will add a new plugin to a Nest.js application using a plugin included in the [@brewww/authentication-service package](https://github.com/BrewInteractive/authentication-service-nestjs).


### Installation

Run `yarn install` command to install all necessary packages required to run the project.

### Usage

1. To run your project.

```bash
# development

$ yarn run start
```

  

### Testing

To test your project.

  

```bash
# unit tests

$ yarn run test

# test coverage

$ yarn run test:cov
```

All tests are expected to pass.

  

## Usage Instructions

Add the following line to the `peerDependencies` section in your `package.json` file:

```bash
"peerDependencies": {
	"@brewww/authentication-service": "^1.1.2"
}
```

This plugin derives from the `BasePlugin` class found in the `@brewww/authentication-service` package. It injects the `PluginTestService` using `Inject` and adds the text `Text3` inside the `load` function.

  
  

## Plugin Instructions

Example plugin settings package.json

```bash
"authenticationService": {
	"name": "text3-appender",

	"displayName": "Text3 Appender",

	"type": "plugin"
}
```

-  `"name"`: This key contains the value "text3-appender" and specifies the name of the operation that is defined as part of the "authenticationService" object.

  

-  `"type"`: This key contains the value "plugin" and specifies that the "authenticationService" object is a plugin.

  

-  `"displayName"`: This key contains the value "Text3 Appender" and specifies the name that will be displayed in a user interface for the "authenticationService" object.

## Conclusion

Now the plugin is ready to use in your Nest.js application. Launch the application and verify that the plugin is working correctly.

  

## Stay in touch

[LinkedIn](https://www.linkedin.com/company/brew-interactive/) - [Twitter](https://twitter.com/BrewInteractive ) - [Instagram](https://www.instagram.com/brew_interactive/)

 

## License

Authentication Service Nestjs Sample Plugin  is [MIT licensed](LICENSE).