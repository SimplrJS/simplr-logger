import { LogLevel } from "../abstractions/log-level";
import { MessageHandlerBase } from "../abstractions/message-handler-base";
export declare enum ConsoleMessageHandlersPrefixTypes {
    none = "none",
    short = "short",
    full = "full",
}
export interface ConsoleMessageHandlerConfiguration {
    LogLevelPrefix: ConsoleMessageHandlersPrefixTypes | keyof typeof ConsoleMessageHandlersPrefixTypes;
    TimePrefix: ConsoleMessageHandlersPrefixTypes | keyof typeof ConsoleMessageHandlersPrefixTypes;
    UseColors: boolean;
}
export declare class ConsoleMessageHandler extends MessageHandlerBase {
    constructor(configuration?: Partial<ConsoleMessageHandlerConfiguration>);
    private configuration;
    private defaultConfiguration;
    private resolveTimePrefix(timestamp);
    private resolveLogLevelPrefix(level, colorStart);
    HandleMessage(level: LogLevel, isEnabled: boolean, timestamp: number, messages: any[]): void;
}
