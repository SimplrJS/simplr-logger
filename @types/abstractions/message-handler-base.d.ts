import { LogLevel } from "simplr-logger";
export declare abstract class MessageHandlerBase {
    abstract HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void;
}
