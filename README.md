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
    .SetDefaultLogLevel(LogLevel.Trace)
    .AddWriteMessageHandlers([
        { Handler: new ConsoleMessageHandler() },
        { Handler: new FileMessageHandler("./logs.txt") }]
    )
    .Build();

const logger = new LoggerBuilder(config);
```

#### With simple object

```ts
import { LoggerBuilder, LogLevel, ConsoleMessageHandler } from "simplr-logger";

const logger = new LoggerBuilder({
    DefaultLogLevel: {
        LogLevel: LogLevel.Trace,
        LogLevelIsBitMask: false
    },
    WriteMessageHandlers: [{
        Handler: new ConsoleMessageHandler(),
        LogLevel: LogLevel.Critical | LogLevel.Debug,
        LogLevelIsBitMask: true
    }]
});
```

### Creating logger handler

```ts
import { MessageHandlerBase, LogLevel, LoggerBuilder, LoggerConfigurationBuilder } from "simplr-logger";

class MyMessageHandler extends MessageHandlerBase {
    public HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void {
        console.log(...messages);
    }
}

const config = new LoggerConfigurationBuilder()
    .AddWriteMessageHandler({ Handler: new MyMessageHandler(), LogLevel: LogLevel.Trace })
    .Build();

const logger = new LoggerBuilder(config);

```

### Using logger

#### Logging with methods

```ts
logger.Critical("Critical", "message");
logger.Debug("Debug", "message");
logger.Error("Error", "message");
logger.Info("Info", "message");
logger.Warn("Warn", "message");
logger.Trace("message", "with trace");
```

#### Logging with log level

```ts
logger.Log(LogLevel.Information, "Info message");
logger.Log(LogLevel.Critical, new Error("Critical error"));
```

#### Updating configuration

```ts
// Using old configuration
logger.UpdateConfiguration(builder => builder.SetPrefix("[new prefix]").Build());

// Or with default configuration
logger.UpdateConfiguration(builder => builder.SetPrefix("[new prefix]").Build(), false);
```

## API

### [LogLevel](./src/abstractions/log-level.ts)

|     Name    | Value | Description                                                                                                                                                                                          |
|-------------|:-----:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     None    |   0   | Not used for writing log messages. Specifies that a logging category should not write any messages.                                                                                                  |
|   Critical  |   1   | Logs that describe an unrecoverable application or system crash, or a catastrophic failure that requires immediate attention. |                                                                      |
|    Error    |   2   | Logs that highlight when the current flow of execution is stopped due to a failure. These should indicate a failure in the current activity, not an application-wide failure.                        |
|   Warning   |   4   | Logs that highlight an abnormal or unexpected event in the application flow, but do not otherwise cause the application execution to stop.                                                           |
| Information |   8   | Logs that track the general flow of the application. These logs should have long-term value.                                                                                                         |
|    Debug    |   16  | Logs that are used for interactive investigation during development. These logs should primarily contain information useful for debugging and have no long-term value.                               |
|    Trace    |   32  | Logs that contain the most detailed messages. These messages may contain sensitive application data. These messages are disabled by default and should never be enabled in a production environment. |

TODO

## License

Released under the [MIT license](LICENSE).
