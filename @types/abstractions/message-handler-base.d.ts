import { LogLevel } from "simplr-logger";
export declare abstract class MessageHandlerBase {
    abstract HandleMessage(level: LogLevel, isLevelEnabled: boolean, timestamp: number, messages: any[]): void;
}
