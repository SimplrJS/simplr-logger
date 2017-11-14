import { LogLevel } from "../abstractions/log-level";
import { Helpers } from "../utils/helpers";
import { MessageHandlerBase } from "../abstractions/message-handler-base";

export class ConsoleMessageHandler extends MessageHandlerBase {
    constructor(private useShortPrefix: boolean = true, private useTimePrefix: boolean = true) {
        super();
    }

    public HandleMessage(level: LogLevel, isEnabled: boolean, timestamp: number, messages: any[]): void {
        let useShortPrefix: boolean = this.useShortPrefix;
        let method;

        switch (level) {
            case LogLevel.None: {
                return;
            }
            case LogLevel.Critical:
            case LogLevel.Error: {
                method = console.error;
                break;
            }
            case LogLevel.Information: {
                method = console.info;
                break;
            }
            case LogLevel.Warning: {
                method = console.warn;
                break;
            }
            case LogLevel.Debug: {
                method = console.debug;
                break;
            }
            case LogLevel.Trace: {
                method = console.trace;
                useShortPrefix = false;
                break;
            }
            default: {
                method = console.log;
                break;
            }
        }

        // Fallback to console.log method
        if (method == null) {
            method = console.log;
        }

        let prefixList: string[] = [];
        if (this.useTimePrefix) {
            prefixList.push(`${new Date(timestamp).toLocaleTimeString()}`);
        }
        if (useShortPrefix) {
            prefixList.push(this.useShortPrefix ? Helpers.GetLogLevelShortString(level) : Helpers.GetLogLevelString(level));
        }

        if (prefixList.length > 0) {
            const prefixString = prefixList.join(" ");
            method(`${prefixString}:`, ...messages);
        } else {
            method(...messages);
        }
    }
}
