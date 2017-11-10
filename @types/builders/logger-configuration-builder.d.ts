import { MessageHandlerBase } from "../abstractions/message-handler-base";
import { LogLevel } from "../abstractions/log-level";
export interface LoggerConfiguration {
    WriteMessageHandler: MessageHandlerBase;
    LogLevel: LogLevel;
    CustomLogLevels?: boolean;
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
     */
    SetWriteMessageHandler(handler: MessageHandlerBase): this;
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
     * Build configuration result object.
     */
    Build(): LoggerConfiguration;
}
