import { LogLevel, PrefixType } from "simplr-logger";

export namespace Helpers {
    /**
     * Return short name of log level.
     *
     * @param logLevel Log level value.
     */
    export function GetLogLevelShortString(logLevel: LogLevel): string {
        switch (logLevel) {
            case LogLevel.Critical:
                return "crit";
            case LogLevel.Error:
                return "erro";
            case LogLevel.Warning:
                return "warn";
            case LogLevel.Information:
                return "info";
            case LogLevel.Debug:
                return "dbug";
            case LogLevel.Trace:
                return "trce";
            case LogLevel.None:
            default:
                return "none";
        }
    }

    /**
     * Return full name of log level.
     *
     * @param logLevel Log level value.
     */
    export function GetLogLevelString(logLevel: LogLevel): string {
        return LogLevel[logLevel].toString();
    }

    /**
     * Resolve and calculate log level details.
     *
     * @param logLevels Log level value or list of log level values.
     */
    export function ResolveLogLevel(logLevels: LogLevel | LogLevel[]): { value: LogLevel, isBitMask: boolean } {
        if (typeof logLevels === "number") {
            return {
                value: logLevels,
                isBitMask: false
            };
        } else {
            return {
                value: CalculateLogLevelsBitMaskValue(logLevels),
                isBitMask: true
            };
        }
    }

    /**
     * Calculate log level bit mask value.
     *
     * @param logLevels List of log levels.
     */
    export function CalculateLogLevelsBitMaskValue(logLevels: LogLevel[]): LogLevel {
        let logLevel = LogLevel.None;
        for (const level of logLevels) {
            logLevel |= level;
        }

        return logLevel;
    }

    /**
     * Check if log level is enabled in handler.
     *
     * @param currentLogLevel Handler current log level.
     * @param currentLogLevelIsBitMask Handler current log level bit mask value.
     * @param targetLogLevel Checking log level value.
     */
    export function IsLogLevelEnabled(currentLogLevel: LogLevel, currentLogLevelIsBitMask: boolean, targetLogLevel: LogLevel): boolean {
        return currentLogLevelIsBitMask ?
            ((currentLogLevel & targetLogLevel) === targetLogLevel) :
            (currentLogLevel >= targetLogLevel);
    }

    /**
     * Resolve log level string prefix by prefix type.
     *
     * @param prefixType Prefix type enum value or string.
     * @param logLevel Current log level.
     */
    export function ResolveLogLevelPrefix(prefixType: PrefixType | keyof typeof PrefixType, logLevel: LogLevel): string | undefined {
        switch (prefixType) {
            case PrefixType.None:
                return undefined;
            case PrefixType.Short:
                return GetLogLevelShortString(logLevel);
            case PrefixType.Full:
                return GetLogLevelString(logLevel);
        }
    }

    /**
     * Resolve date string by prefix type.
     *
     * @param prefixType Prefix type enum value or string.
     * @param timestamp Timestamp to resolve.
     */
    export function ResolveTimePrefix(prefixType: PrefixType | keyof typeof PrefixType, timestamp: number): string | undefined {
        switch (prefixType) {
            case PrefixType.None:
                return undefined;
            case PrefixType.Short:
                return new Date(timestamp).toLocaleTimeString();
            case PrefixType.Full:
                return new Date(timestamp).toLocaleString();
        }
    }
}
