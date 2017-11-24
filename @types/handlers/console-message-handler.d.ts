import { MessageHandlerBase, LogLevel, PrefixType } from "simplr-logger";
export declare class ConsoleMessageHandler extends MessageHandlerBase {
    constructor(configuration?: Partial<ConsoleMessageHandler.Configuration>);
    private configuration;
    private readonly defaultConfiguration;
    private resolveLogLevelPrefix(level, colorStart);
    HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void;
}
export declare namespace ConsoleMessageHandler {
    interface Configuration {
        LogLevelPrefix: PrefixType | keyof typeof PrefixType;
        TimePrefix: PrefixType | keyof typeof PrefixType;
        UseColors: boolean;
    }
}
