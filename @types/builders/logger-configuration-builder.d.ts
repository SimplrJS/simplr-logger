import { LogLevel, LoggerConfiguration, WriteMessageHandlerBuilder, InitialLoggerConfiguration } from "simplr-logger";
export declare class LoggerConfigurationBuilder {
    constructor(initConfiguration?: Partial<InitialLoggerConfiguration>);
    private configuration;
    private defaultConfiguration();
    /**
     * Override configuration with new configuration object.
     *
     * @param configuration Partial configuration object.
     */
    Override(configuration: Partial<InitialLoggerConfiguration>): this;
    /**
     * Add write message handler.
     *
     * @param handler Write message handler.
     * @param defaultLogLevel Default log level only for this handler.
     */
    AddWriteMessageHandler(handler: WriteMessageHandlerBuilder, defaultLogLevel?: LogLevel | LogLevel[]): this;
    /**
     * Add a list of write message handlers.
     *
     * @param handlers Write message handlers list.
     * @param defaultLogLevel Default log level only for this list of handler.
     */
    AddWriteMessageHandlers(handlers: WriteMessageHandlerBuilder[], defaultLogLevel?: LogLevel | LogLevel[]): this;
    /**
     * Set logger default log level.
     *
     * @param logLevels LogLevel value or custom list of LogLevels.
     */
    SetDefaultLogLevels(logLevels: LogLevel | LogLevel[]): this;
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
