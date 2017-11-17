import { MessageHandlerBase } from "../abstractions/message-handler-base";
import { LogLevel } from "../abstractions/log-level";
export declare class FileMessageHandler extends MessageHandlerBase {
    private isServerSide;
    constructor(filePathName: string, isServerSide?: boolean);
    private filePathName;
    private readonly handleMessageStackCount;
    HandleMessage(level: LogLevel, isLevelEnabled: boolean, timestamp: number, messages: any[]): void;
    private writeStream;
    private getWriteStream();
    private readonly EOL;
    private ensureDirectory();
}
