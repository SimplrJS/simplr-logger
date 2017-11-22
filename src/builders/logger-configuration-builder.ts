import {
    LoggerHelpers,
    LogLevel,
    ConsoleMessageHandler,
    LoggerConfiguration,
    WriteMessageHandler,
    WriteMessageHandlerBuilder,
    InitialLoggerConfiguration
} from "simplr-logger";

export class LoggerConfigurationBuilder {
    constructor(initConfiguration?: Partial<InitialLoggerConfiguration>) {
        this.configuration = {
            ...this.defaultConfiguration(),
            ...initConfiguration
        };
    }

    private configuration: InitialLoggerConfiguration;

    private defaultConfiguration(): LoggerConfiguration {
        return {
            WriteMessageHandlers: [],
            DefaultLogLevel: {
                LogLevel: LogLevel.Warning,
                LogLevelIsBitMask: false
            },
            Prefix: undefined
        };
    }

    /**
     * Override configuration with new configuration object.
     *
     * @param configuration Partial configuration object.
     */
    public Override(configuration: Partial<InitialLoggerConfiguration>): this {
        this.configuration = {
            ...this.configuration,
            ...configuration
        };

        return this;
    }

    /**
     * Add write message handler.
     *
     * @param handler Write message handler.
     * @param defaultLogLevel Default log level only for this handler.
     */
    public AddWriteMessageHandler(handler: WriteMessageHandlerBuilder, defaultLogLevel?: LogLevel | LogLevel[]): this {
        this.AddWriteMessageHandlers([handler], defaultLogLevel);

        return this;
    }

    /**
     * Add a list of write message handlers.
     *
     * @param handlers Write message handlers list.
     * @param defaultLogLevel Default log level only for this list of handler.
     */
    public AddWriteMessageHandlers(handlers: WriteMessageHandlerBuilder[], defaultLogLevel?: LogLevel | LogLevel[]): this {
        if (defaultLogLevel != null) {
            const { isBitMask, value } = LoggerHelpers.ResolveLogLevel(defaultLogLevel);
            handlers = handlers.map(handler => {
                if (handler.LogLevel == null) {
                    handler.LogLevel = value;
                    handler.LogLevelIsBitMask = isBitMask;
                }
                return handler;
            });
        }
        this.configuration.WriteMessageHandlers = this.configuration.WriteMessageHandlers.concat(handlers);

        return this;
    }

    /**
     * Set logger default log level.
     *
     * @param logLevels LogLevel value or custom list of LogLevels.
     */
    public SetDefaultLogLevels(logLevels: LogLevel | LogLevel[]): this {
        const { isBitMask, value } = LoggerHelpers.ResolveLogLevel(logLevels);
        this.configuration.DefaultLogLevel = {
            LogLevel: value,
            LogLevelIsBitMask: isBitMask
        };

        return this;
    }

    /**
     * Set the first message in messages list.
     *
     * @param prefix Prefix string value.
     */
    public SetPrefix(prefix: string): this {
        this.configuration.Prefix = prefix;

        return this;
    }

    /**
     * Build configuration result object.
     */
    public Build(): LoggerConfiguration {
        let writeMessageHandlers: WriteMessageHandler[];

        if (this.configuration.WriteMessageHandlers.length === 0) {
            this.AddWriteMessageHandler({
                Handler: new ConsoleMessageHandler(),
                ...this.configuration.DefaultLogLevel
            });

            writeMessageHandlers = this.configuration.WriteMessageHandlers as WriteMessageHandler[];
        } else {
            writeMessageHandlers = this.configuration.WriteMessageHandlers.map<WriteMessageHandler>(handler => {
                if (handler.LogLevel == null) {
                    handler = {
                        Handler: handler.Handler,
                        ...this.configuration.DefaultLogLevel
                    };
                }
                return handler as WriteMessageHandler;
            });
        }

        return {
            WriteMessageHandlers: writeMessageHandlers,
            DefaultLogLevel: this.configuration.DefaultLogLevel,
            Prefix: this.configuration.Prefix
        };
    }
}
