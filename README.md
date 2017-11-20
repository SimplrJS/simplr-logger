# Simplr Logger

Simple JavaScript logger written in [TypeScript](http://typescriptlang.org). It's can be used in browser or node application.

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
