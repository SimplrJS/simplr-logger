import { LogLevelData, WriteMessageHandler, WriteMessageHandlerBuilder } from "simplr-logger";

export interface LoggerConfigurationBase {
    Prefix?: string;
    DefaultLogLevel: LogLevelData;
}

export interface LoggerConfiguration extends LoggerConfigurationBase {
    WriteMessageHandlers: WriteMessageHandler[];
}

export interface InitialLoggerConfiguration extends LoggerConfigurationBase {
    WriteMessageHandlers: Array<WriteMessageHandler | WriteMessageHandlerBuilder>;
}
