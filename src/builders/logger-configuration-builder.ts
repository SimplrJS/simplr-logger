import { MessageHandlerBase } from "../abstractions/message-handler-base";
import { LogLevel } from "../abstractions/log-level";
import { ConsoleMessageHandler } from "../handlers/console-message-handler";

export interface LoggerConfiguration {
    WriteMessageHandler: MessageHandlerBase;
    LogLevel: LogLevel;
    CustomLogLevels?: boolean;
    Prefix?: string;
}

/**
 * Logger configuration builder.
 */
export class LoggerConfigurationBuilder {
    constructor(initConfiguration?: Partial<LoggerConfiguration>) {
        this.configuration = {
            ...this.defaultConfiguration(),
            ...this.configuration
        };
    }

    private configuration: LoggerConfiguration;

    private defaultConfiguration(): Partial<LoggerConfiguration> {
        return {
            WriteMessageHandler: undefined,
            LogLevel: LogLevel.Warning,
            CustomLogLevels: false,
            Prefix: undefined
        };
    }

    /**
     * Set custom message handler.
     *
     * @param handler Log messages handler.
     */
    public SetWriteMessageHandler(handler: MessageHandlerBase): this {
        this.configuration.WriteMessageHandler = handler;

        return this;
    }

    /**
     * Set log level.
     *
     * @param logLevel LogLevel value or bit mask values.
     */
    public SetLogLevel(logLevel: LogLevel): this {
        this.configuration.LogLevel = logLevel;
        this.configuration.CustomLogLevels = false;

        return this;
    }

    /**
     * Set custom log levels.
     *
     * @param logLevels List of log level.
     */
    public SetCustomLogLevels(logLevels: LogLevel[]): this {
        let logLevel = LogLevel.None;
        for (const level of logLevels) {
            logLevel |= level;
        }
        this.configuration.LogLevel = logLevel;
        this.configuration.CustomLogLevels = true;

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
        if (this.configuration.WriteMessageHandler == null) {
            this.SetWriteMessageHandler(new ConsoleMessageHandler());
        }

        return this.configuration;
    }
}
