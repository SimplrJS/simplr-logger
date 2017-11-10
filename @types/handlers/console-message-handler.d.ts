import { LogLevel } from "../abstractions/log-level";
import { MessageHandlerBase } from "../abstractions/message-handler-base";
export declare class ConsoleMessageHandler extends MessageHandlerBase {
    private useShortPrefix;
    constructor(useShortPrefix?: boolean);
    HandleMessage(level: LogLevel, isEnabled: boolean, timestamp: number, messages: any[]): void;
}
