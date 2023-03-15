
<p  align="center">
<a  href="http://brewww.com/"  target="_blank"><img  src="https://github.com/BrewInteractive/authentication-service-nestjs-sample-plugin/blob/main/Brew-Logo-Small.png?raw=true"  width="300"  alt="Brew Logo"  /></a>
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
