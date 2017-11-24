import { MessageHandlerBase, LogLevel, PrefixType } from "simplr-logger";
export declare class FileMessageHandler extends MessageHandlerBase {
    constructor(filePathName: string, configuration?: Partial<FileMessageHandler.Configuration>);
    private filePathName;
    private configuration;
    private readonly defaultConfiguration;
    private readonly handleMessageStackCount;
    HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void;
    private writeStream;
    private getWriteStream();
    private readonly EOL;
    private ensureDirectory();
}
export declare namespace FileMessageHandler {
    interface Configuration {
        LogLevelPrefix: PrefixType | keyof typeof PrefixType;
        TimePrefix: PrefixType | keyof typeof PrefixType;
        IsServerSide?: boolean;
    }
}
