import { MessageHandlerBase, LogLevelData } from "simplr-logger";

export interface WriteMessageHandler extends LogLevelData {
    Handler: MessageHandlerBase;
}

export interface WriteMessageHandlerBuilder extends Partial<LogLevelData> {
    Handler: MessageHandlerBase;
}
