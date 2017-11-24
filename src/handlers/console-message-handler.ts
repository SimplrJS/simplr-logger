import { ANSIColorCodes } from "../utils/ansi-color-codes";
import { MessageHandlerBase, LoggerHelpers, LogLevel, PrefixType } from "simplr-logger";

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
        LogLevelPrefix: PrefixType.Short,
        TimePrefix: PrefixType.Short,
        UseColors: typeof window === "undefined"
    };

    private resolveLogLevelPrefix(level: LogLevel, colorStart: string): string | undefined {
        if (level === LogLevel.Trace) {
            return undefined;
        }

        const prefix = LoggerHelpers.ResolveLogLevelPrefix(this.configuration.LogLevelPrefix, level);
        if (prefix == null) {
            return undefined;
        }
        const colorPrefix = this.configuration.UseColors ? colorStart : "";

        return `${colorPrefix}${prefix}${ANSIColorCodes.Reset}`;
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
            case LogLevel.Trace: {
                method = console.trace;
                break;
            }
            case LogLevel.Debug:
            default: {
                // Fallback to console.log method
                method = console.log;
                break;
            }
        }

        const prefixList: string[] = [];

        const timePrefix = LoggerHelpers.ResolveTimePrefix(this.configuration.TimePrefix, timestamp);
        if (timePrefix != null) {
            prefixList.push(`[${timePrefix}]`);
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
    export interface Configuration {
        LogLevelPrefix: PrefixType | keyof typeof PrefixType;
        TimePrefix: PrefixType | keyof typeof PrefixType;
        UseColors: boolean;
    }
}
