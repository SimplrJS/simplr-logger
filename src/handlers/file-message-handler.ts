import { MessageHandlerBase, LogLevel, LoggerHelpers } from "simplr-logger";

import * as pathTypesOnly from "path";
import * as fsTypesOnly from "fs";
import * as osTypesOnly from "os";
import * as processTypesOnly from "process";
type WriteStream = fsTypesOnly.WriteStream;

export class FileMessageHandler extends MessageHandlerBase {
    constructor(filePathName: string, private isServerSide?: boolean) {
        super();

        if (this.isServerSide == null) {
            try {
                // tslint:disable-next-line:no-require-imports no-unused-expression
                require("process") as typeof processTypesOnly;
                this.isServerSide = true;
            } catch {
                this.isServerSide = false;
            }
        }

        if (this.isServerSide) {
            // tslint:disable-next-line:no-require-imports
            const { normalize } = require("path") as typeof pathTypesOnly;
            this.filePathName = normalize(filePathName);
            this.ensureDirectory();
        }
    }
    private filePathName: string;

    private readonly handleMessageStackCount: number = 4;

    public HandleMessage(level: LogLevel, isLevelEnabled: boolean, timestamp: number, messages: any[]): void {
        if (!this.isServerSide) {
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

        const datePrefix: string = `[${new Date(timestamp).toLocaleString()}]`;
        writeStream.write(`${datePrefix} ${LoggerHelpers.GetLogLevelShortString(level)}: ${formattedMessages.join(" ")}${this.EOL}`);
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

        const dirList = dir.split(path.sep);
        let targetDir: string = (dir[0] !== path.sep && path.isAbsolute(dir)) ? "" : process.cwd();
        for (const a of dirList) {
            targetDir = path.join(targetDir, a);
            if (a.length > 0 && !fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir);
            }
        }
    }

}
