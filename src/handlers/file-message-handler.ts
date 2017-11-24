import { MessageHandlerBase, LogLevel, LoggerHelpers, PrefixType } from "simplr-logger";

import * as pathTypesOnly from "path";
import * as fsTypesOnly from "fs";
import * as osTypesOnly from "os";
type WriteStream = fsTypesOnly.WriteStream;

export class FileMessageHandler extends MessageHandlerBase {
    constructor(filePathName: string, configuration?: Partial<FileMessageHandler.Configuration>) {
        super();

        this.configuration = {
            ...this.defaultConfiguration,
            ...configuration
        };

        if (this.configuration.IsServerSide) {
            // tslint:disable-next-line:no-require-imports
            const { normalize } = require("path") as typeof pathTypesOnly;
            this.filePathName = normalize(filePathName);
            this.ensureDirectory();
        }
    }
    private filePathName: string;

    private configuration: FileMessageHandler.Configuration;

    private get defaultConfiguration(): FileMessageHandler.Configuration {
        return {
            LogLevelPrefix: PrefixType.Short,
            TimePrefix: PrefixType.Full,
            IsServerSide: LoggerHelpers.IsServerSide()
        };
    }

    // IMPORTANT: The value must be changed after files structure were updated!
    private readonly handleMessageStackCount: number = 4;

    public HandleMessage(level: LogLevel, timestamp: number, messages: any[]): void {
        if (!this.configuration.IsServerSide) {
            return;
        }

        const writeStream = this.getWriteStream();

        const formattedMessages = messages.map(msg => {
            switch (typeof msg) {
                case "string":
                    return msg;
                case "undefined":
                case "boolean":
                case "number":
                case "function":
                case "symbol":
                    return String(msg);
                case "object":
                    if (msg instanceof Error) {
                        return String(msg.stack);
                    } else {
                        return JSON.stringify(msg);
                    }
            }
        });

        if (level === LogLevel.Trace) {
            let err: Error | undefined = new Error();
            const stack = String(err.stack);
            err = undefined;

            const stackString = "\n" + stack.split("\n").slice(this.handleMessageStackCount, stack.length).join("\n");
            formattedMessages.push(stackString);
        }

        const prefixList: string[] = [];

        const timePrefix = LoggerHelpers.ResolveTimePrefix(this.configuration.TimePrefix, timestamp);
        if (timePrefix != null) {
            prefixList.push(`[${timePrefix}]`);
        }

        const logLevelPrefix = LoggerHelpers.ResolveLogLevelPrefix(this.configuration.LogLevelPrefix, level);
        if (logLevelPrefix != null) {
            prefixList.push(logLevelPrefix);
        }

        const prefixString: string = (prefixList.length > 0) ? `${prefixList.join(" ")}: ` : "";

        writeStream.write(`${prefixString}${formattedMessages.join(" ")}${this.EOL}`);
    }

    private writeStream: WriteStream | undefined;

    private getWriteStream(): WriteStream {
        if (this.writeStream != null) {
            return this.writeStream;
        }

        // tslint:disable-next-line:no-require-imports
        const fs = require("fs") as typeof fsTypesOnly;

        this.writeStream = fs.createWriteStream(this.filePathName, { flags: "a" });

        this.writeStream.on("close", () => {
            this.writeStream = undefined;
        });
        this.writeStream.on("error", err => {
            throw err;
        });

        return this.writeStream;
    }

    private get EOL(): string {
        // tslint:disable-next-line:no-require-imports
        const { EOL } = require("os") as typeof osTypesOnly;
        return EOL;
    }

    private ensureDirectory(): void {
        // tslint:disable-next-line:no-require-imports
        const path = require("path") as typeof pathTypesOnly;
        // tslint:disable-next-line:no-require-imports
        const fs = require("fs") as typeof fsTypesOnly;

        const dir = path.dirname(this.filePathName);

        const isAbsolute = (dir[0] !== path.sep && path.isAbsolute(dir));
        const dirList = dir.split(path.sep);
        let targetDir: string = "";
        if (isAbsolute) {
            dirList[0] = dirList[0] + path.sep;
        } else {
            targetDir += process.cwd();
        }

        for (const dirItem of dirList) {
            targetDir = path.join(targetDir, dirItem);
            if (dirItem.length > 0 && !fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir);
            }
        }
    }
}

export namespace FileMessageHandler {
    export interface Configuration {
        LogLevelPrefix: PrefixType | keyof typeof PrefixType;
        TimePrefix: PrefixType | keyof typeof PrefixType;
        IsServerSide?: boolean;
    }
}
