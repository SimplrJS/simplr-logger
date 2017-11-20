import { MessageHandlerBase, LogLevel } from "simplr-logger";
export declare class ConsoleMessageHandler extends MessageHandlerBase {
    constructor(configuration?: Partial<ConsoleMessageHandler.Configuration>);
    private configuration;
    private defaultConfiguration;
    private resolveTimePrefix(timestamp);
    private resolveLogLevelPrefix(level, colorStart);
    HandleMessage(level: LogLevel, isEnabled: boolean, timestamp: number, messages: any[]): void;
}
export declare namespace ConsoleMessageHandler {
    enum PrefixTypes {
        none = "none",
        short = "short",
        full = "full",
    }
    interface Configuration {
        LogLevelPrefix: PrefixTypes | keyof typeof PrefixTypes;
        TimePrefix: PrefixTypes | keyof typeof PrefixTypes;
        UseColors: boolean;
    }
}
