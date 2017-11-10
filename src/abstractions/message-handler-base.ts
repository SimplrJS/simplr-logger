import { LogLevel } from "./log-level";

export abstract class MessageHandlerBase {
    public abstract HandleMessage(level: LogLevel, isLevelEnabled: boolean, timestamp: number, messages: any[]): void;
}
