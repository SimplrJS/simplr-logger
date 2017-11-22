import { LogLevel } from "simplr-logger";

export abstract class MessageHandlerBase {
    public abstract HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void;
}
