import { ANSIColorCodes } from "../utils/ansi-color-codes";
import { MessageHandlerBase, LoggerHelpers, LogLevel } from "simplr-logger";

export class ConsoleMessageHandler extends MessageHandlerBase {
    constructor(configuration?: Partial<ConsoleMessageHandler.Configuration>) {
        super();

        this.configuration = {
            ...this.defaultConfiguration,
            ...configuration
        };
    }

    private configuration: ConsoleMessageHandler.Configuration;

    private defaultConfiguration: ConsoleMessageHandler.Configuration = {
        LogLevelPrefix: ConsoleMessageHandler.PrefixTypes.short,
        TimePrefix: ConsoleMessageHandler.PrefixTypes.short,
        UseColors: typeof window === "undefined"
    };

    private resolveTimePrefix(timestamp: number): string | undefined {
        switch (this.configuration.TimePrefix) {
            case ConsoleMessageHandler.PrefixTypes.none:
                return undefined;
            case ConsoleMessageHandler.PrefixTypes.short:
                return `[${new Date(timestamp).toLocaleTimeString()}]`;
            case ConsoleMessageHandler.PrefixTypes.full:
                return `[${new Date(timestamp).toLocaleString()}]`;
        }
    }

    private resolveLogLevelPrefix(level: LogLevel, colorStart: string): string | undefined {
        if (level === LogLevel.Trace) {
            return undefined;
        }

        const startString = this.configuration.UseColors ? colorStart : "";

        switch (this.configuration.LogLevelPrefix) {
            case ConsoleMessageHandler.PrefixTypes.none:
                return undefined;
            case ConsoleMessageHandler.PrefixTypes.short:
                return `${startString}${LoggerHelpers.GetLogLevelShortString(level)}${ANSIColorCodes.Reset}`;
            case ConsoleMessageHandler.PrefixTypes.full:
                return `${startString}${LoggerHelpers.GetLogLevelString(level)}${ANSIColorCodes.Reset}`;
        }

    }

    public HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void {
        let method;

        let colorStart: string = "";

        switch (level) {
            case LogLevel.None: {
                return;
            }
            case LogLevel.Critical: {
                method = console.error;
                colorStart += ANSIColorCodes.Bright + ANSIColorCodes.FgWhite + ANSIColorCodes.BgRed;
                break;
            }
            case LogLevel.Error: {
                method = console.error;
                colorStart += ANSIColorCodes.FgBlack + ANSIColorCodes.BgRed;
                break;
            }
            case LogLevel.Information: {
                method = console.info;
                colorStart += ANSIColorCodes.FgGreen;
                break;
            }
            case LogLevel.Warning: {
                method = console.warn;
                colorStart += ANSIColorCodes.Bright + ANSIColorCodes.FgYellow;
                break;
            }
            case LogLevel.Debug: {
                method = console.debug;
                break;
            }
            case LogLevel.Trace: {
                method = console.trace;
                break;
            }
            default: {
                // Fallback to console.log method
                method = console.log;
                break;
            }
        }

        const prefixList: string[] = [];

        const timePrefix = this.resolveTimePrefix(timestamp);
        if (timePrefix != null) {
            prefixList.push(timePrefix);
        }

        const logLevelPrefix = this.resolveLogLevelPrefix(level, colorStart);
        if (logLevelPrefix != null) {
            prefixList.push(logLevelPrefix);
        }

        if (prefixList.length > 0) {
            const prefixString = prefixList.join(" ");
            method(`${prefixString}:`, ...messages);
        } else {
            method(...messages);
        }
    }
}

export namespace ConsoleMessageHandler {
    export enum PrefixTypes {
        none = "none",
        short = "short",
        full = "full"
    }

    export interface Configuration {
        LogLevelPrefix: PrefixTypes | keyof typeof PrefixTypes;
        TimePrefix: PrefixTypes | keyof typeof PrefixTypes;
        UseColors: boolean;
    }
}
