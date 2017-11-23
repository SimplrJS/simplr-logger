import { LogLevel, LoggerRuntimeConfigurationBuilder } from "simplr-logger";
export declare class LoggerBuilder extends LoggerRuntimeConfigurationBuilder {
    /**
     * Writes a log entries with specified log level.
     *
     * @param level Entries will be written on this level.
     * @param messages Messages to be written.
     */
    Log: (level: LogLevel, ...messages: any[]) => number;
    /**
     * Write a log entries with debug log level.
     *
     * @param messages Messages to be written.
     */
    Debug: (...messages: any[]) => number;
    /**
     * Write a log entries with information log level.
     *
     * @param messages Messages to be written.
     */
    Info: (...messages: any[]) => number;
    /**
     * Write a log entries with warning log level.
     *
     * @param messages Messages to be written.
     */
    Warn: (...messages: any[]) => number;
    /**
     * Write a log entries with error log level.
     *
     * @param messages Messages to be written.
     */
    Error: (...messages: any[]) => number;
    /**
     * Write a log entries with critical log level.
     *
     * @param messages Messages to be written.
     */
    Critical: (...messages: any[]) => number;
    /**
     * Write a log entries with trace log level.
     *
     * @param messages Messages to be written.
     */
    Trace: (...messages: any[]) => number;
    private log(level, ...messages);
}
