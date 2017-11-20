import { LogLevel, MessageHandlerBase } from "simplr-logger";
export interface LoggerConfiguration {
    WriteMessageHandler?: MessageHandlerBase;
    WriteMessageHandlers: MessageHandlerBase[];
    LogLevel: LogLevel;
    CustomLogLevels?: boolean;
    Prefix?: string;
}
/**
 * Logger configuration builder.
 */
export declare class LoggerConfigurationBuilder {
    constructor(initConfiguration?: Partial<LoggerConfiguration>);
    private configuration;
    private defaultConfiguration();
    /**
     * Set custom message handler.
     *
     * @param handler Log messages handler.
     * @deprecated Use instead AddWriteMessageHandlers.
     */
    SetWriteMessageHandler(handler: MessageHandlerBase): this;
    /**
     * Add write message handlers.
     *
     * @param handlers Log messages handlers list.
     */
    AddWriteMessageHandlers(handlers: MessageHandlerBase[]): this;
    /**
     * Set log level.
     *
     * @param logLevel LogLevel value or bit mask values.
     */
    SetLogLevel(logLevel: LogLevel): this;
    /**
     * Set custom log levels.
     *
     * @param logLevels List of log level.
     */
    SetCustomLogLevels(logLevels: LogLevel[]): this;
    /**
     * Set the first message in messages list.
     *
     * @param prefix Prefix string value.
     */
    SetPrefix(prefix: string): this;
    /**
     * Build configuration result object.
     */
    Build(): LoggerConfiguration;
}
