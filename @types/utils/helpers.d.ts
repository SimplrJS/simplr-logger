import { LogLevel, PrefixType } from "simplr-logger";
export declare namespace Helpers {
    /**
     * Return short name of log level.
     *
     * @param logLevel Log level value.
     */
    function GetLogLevelShortString(logLevel: LogLevel): string;
    /**
     * Return full name of log level.
     *
     * @param logLevel Log level value.
     */
    function GetLogLevelString(logLevel: LogLevel): string;
    /**
     * Resolve and calculate log level details.
     *
     * @param logLevels Log level value or list of log level values.
     */
    function ResolveLogLevel(logLevels: LogLevel | LogLevel[]): {
        value: LogLevel;
        isBitMask: boolean;
    };
    /**
     * Calculate log level bit mask value.
     *
     * @param logLevels List of log levels.
     */
    function CalculateLogLevelsBitMaskValue(logLevels: LogLevel[]): LogLevel;
    /**
     * Check if log level is enabled in handler.
     *
     * @param currentLogLevel Handler current log level.
     * @param currentLogLevelIsBitMask Handler current log level bit mask value.
     * @param targetLogLevel Checking log level value.
     */
    function IsLogLevelEnabled(currentLogLevel: LogLevel, currentLogLevelIsBitMask: boolean, targetLogLevel: LogLevel): boolean;
    /**
     * Resolve log level string prefix by prefix type.
     *
     * @param prefixType Prefix type enum value or string.
     * @param logLevel Current log level.
     */
    function ResolveLogLevelPrefix(prefixType: PrefixType | keyof typeof PrefixType, logLevel: LogLevel): string | undefined;
    /**
     * Resolve date string by prefix type.
     *
     * @param prefixType Prefix type enum value or string.
     * @param timestamp Timestamp to resolve.
     */
    function ResolveTimePrefix(prefixType: PrefixType | keyof typeof PrefixType, timestamp: number): string | undefined;
}
