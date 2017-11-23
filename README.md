# Simplr Logger

[![NPM version](http://img.shields.io/npm/v/simplr-logger.svg)](https://www.npmjs.com/package/simplr-logger)
[![Build Status](https://travis-ci.org/SimplrJS/simplr-logger.svg?branch=master)](https://travis-ci.org/SimplrJS/simplr-logger)
[![Coverage Status](https://coveralls.io/repos/github/SimplrJS/simplr-logger/badge.svg)](https://coveralls.io/github/SimplrJS/simplr-logger)
[![dependencies Status](https://david-dm.org/simplrjs/simplr-logger/status.svg)](https://david-dm.org/simplrjs/simplr-logger)
[![devDependencies Status](https://david-dm.org/simplrjs/simplr-logger/dev-status.svg)](https://david-dm.org/simplrjs/simplr-logger?type=dev)

Simple JavaScript logger written in [TypeScript](http://typescriptlang.org) that can be used in browser or node application.

The package is most useful when used with [TypeScript](http://typescriptlang.org).

## Get started

```cmd
npm install simplr-logger
```

### Building logger

#### With default configuration

```ts
import { LoggerBuilder } from "simplr-logger";

const logger = new LoggerBuilder();
```

#### With configuration builder

```ts
import { LoggerBuilder, LoggerConfigurationBuilder, LogLevel } from "simplr-logger";
import { FileMessageHandler, ConsoleMessageHandler } from "simplr-logger/handlers";

const config = new LoggerConfigurationBuilder()
    .SetLogLevel(LogLevel.Trace)
    .AddWriteMessageHandlers([new ConsoleMessageHandler(), new FileMessageHandler("./logs.txt")])
    .Build();

const logger = new LoggerBuilder(config);
```

#### With simple object

```ts
import { LoggerBuilder, LoggerConfigurationBuilder, LogLevel, ConsoleMessageHandler } from "simplr-logger";

const logger = new LoggerBuilder({
    LogLevel: LogLevel.Trace,
    WriteMessageHandlers: [new ConsoleMessageHandler()]
});
```

### Using logger

#### Logging with methods

```ts
logger.Critical("Critical", "message");
logger.Debug("Debug", "message");
logger.Error("Error", "message");
logger.Info("Info", "message");
logger.Warn("Warn", "message");
```

#### Logging with log level

```ts
logger.Log(LogLevel.Information, "Info message");
logger.Log(LogLevel.Critical, new Error("Critical error"));
```

## API

 TODO

## License

Released under the [MIT license](LICENSE).
