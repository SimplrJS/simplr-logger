import { LogLevel, LoggerHelpers, LoggerRuntimeConfigurationBuilder } from "simplr-logger";

export class LoggerBuilder extends LoggerRuntimeConfigurationBuilder {
    /**
     * Writes a log entries with specified log level.
     *
     * @param level Entries will be written on this level.
     * @param messages Messages to be written.
     */
    public Log = (level: LogLevel, ...messages: any[]): number => this.log(level, ...messages);

    /**
     * Write a log entries with debug log level.
     *
     * @param messages Messages to be written.
     */
    public Debug = (...messages: any[]): number => this.log(LogLevel.Debug, ...messages);

    /**
     * Write a log entries with information log level.
     *
     * @param messages Messages to be written.
     */
    public Info = (...messages: any[]): number => this.log(LogLevel.Information, ...messages);

    /**
     * Write a log entries with warning log level.
     *
     * @param messages Messages to be written.
     */
    public Warn = (...messages: any[]): number => this.log(LogLevel.Warning, ...messages);

    /**
     * Write a log entries with error log level.
     *
     * @param messages Messages to be written.
     */
    public Error = (...messages: any[]): number => this.log(LogLevel.Error, ...messages);

    /**
     * Write a log entries with critical log level.
     *
     * @param messages Messages to be written.
     */
    public Critical = (...messages: any[]): number => this.log(LogLevel.Critical, ...messages);

    /**
     * Write a log entries with trace log level.
     *
     * @param messages Messages to be written.
     */
    public Trace = (...messages: any[]): number => this.log(LogLevel.Trace, ...messages);

    private log(level: LogLevel, ...messages: any[]): number {
        const timestamp = Date.now();

        if (this.Configuration.Prefix) {
            messages = [this.Configuration.Prefix].concat(messages);
        }

        for (const handlerInstance of this.Configuration.WriteMessageHandlers) {
            if (LoggerHelpers.IsLogLevelEnabled(handlerInstance.LogLevel, handlerInstance.LogLevelIsBitMask, level)) {
                handlerInstance.Handler.HandleMessage(level, timestamp, messages);
            }
        }

        return timestamp;
    }
}
