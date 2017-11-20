import { LogLevel, LoggerConfigurationBuilder, LoggerConfiguration } from "simplr-logger";

export class LoggerBuilder {
    constructor(private configuration: LoggerConfiguration = new LoggerConfigurationBuilder().Build()) { }

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
     * Check if log level is enabled.
     *
     * @param level Log level value.
     */
    public IsEnabled(level: LogLevel): boolean {
        return this.configuration.CustomLogLevels ?
            ((this.configuration.LogLevel & level) === level) :
            (this.configuration.LogLevel >= level);
    }

    private log(level: LogLevel, ...messages: any[]): number {
        const timestamp = Date.now();
        const isEnabled = this.IsEnabled(level);
        if (isEnabled) {
            if (this.configuration.Prefix) {
                messages = [this.configuration.Prefix].concat(messages);
            }

            /**
             * @deprecated
             */
            if (this.configuration.WriteMessageHandler != null) {
                this.configuration.WriteMessageHandler.HandleMessage(level, isEnabled, timestamp, messages);
            }

            for (const handler of this.configuration.WriteMessageHandlers) {
                handler.HandleMessage(level, isEnabled, timestamp, messages);
            }
        }

        return timestamp;
    }
}
