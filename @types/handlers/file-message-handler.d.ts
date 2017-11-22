import { MessageHandlerBase, LogLevel } from "simplr-logger";
export declare class FileMessageHandler extends MessageHandlerBase {
    private isServerSide;
    constructor(filePathName: string, isServerSide?: boolean | undefined);
    private filePathName;
    private readonly handleMessageStackCount;
    HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void;
    private writeStream;
    private getWriteStream();
    private readonly EOL;
    private ensureDirectory();
}
