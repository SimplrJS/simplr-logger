import { LogLevel } from "../abstractions/log-level";

export class HelpersBuilder {
    public GetLogLevelShortString(level: LogLevel): string {
        switch (level) {
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

    public GetLogLevelString(level: LogLevel): string {
        return LogLevel[level].toString();
    }
}

export const Helpers = new HelpersBuilder();
