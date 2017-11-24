import { LoggerConfigurationBuilder, LogLevel, ConsoleMessageHandler } from "simplr-logger";

test("Default Configuration", () => {
    const config = new LoggerConfigurationBuilder().Build();
    expect(config).toMatchSnapshot();
});

test("Initial Configuration", () => {
    const prefix = new LoggerConfigurationBuilder({
        Prefix: "[SimplrLogger prefix]"
    }).Build();
    expect(prefix).toMatchSnapshot();

    const logLevel = new LoggerConfigurationBuilder({
        DefaultLogLevel: {
            LogLevel: LogLevel.Critical,
            LogLevelIsBitMask: false
        }
    }).Build();
    expect(logLevel).toMatchSnapshot();

    const logLevelBitMask = new LoggerConfigurationBuilder({
        DefaultLogLevel: {
            LogLevel: LogLevel.Critical | LogLevel.Warning | LogLevel.Error,
            LogLevelIsBitMask: true
        }
    }).Build();
    expect(logLevelBitMask).toMatchSnapshot();

    const handlers = new LoggerConfigurationBuilder({
        WriteMessageHandlers: [
            { Handler: new ConsoleMessageHandler() },
            { Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Trace },
            { Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Trace, LogLevelIsBitMask: false },
            { Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Critical | LogLevel.Error, LogLevelIsBitMask: true }
        ]
    }).Build();
    expect(handlers).toMatchSnapshot();
});

describe("Configuration Methods", () => {
    test("SetPrefix", () => {
        const prefixConfig = new LoggerConfigurationBuilder()
            .SetPrefix("[SimplrLogger prefix]")
            .Build();

        expect(prefixConfig).toMatchSnapshot();
    });

    test("SetDefaultLogLevel", () => {
        const logLevelConfig = new LoggerConfigurationBuilder()
            .SetDefaultLogLevel(LogLevel.Trace)
            .Build();

        expect(logLevelConfig).toMatchSnapshot();

        const logLevelBitMaskConfig = new LoggerConfigurationBuilder()
            .SetDefaultLogLevel([LogLevel.Trace, LogLevel.Information, LogLevel.Warning])
            .Build();

        expect(logLevelBitMaskConfig).toMatchSnapshot();
    });

    test("AddWriteMessageHandler", () => {
        const config = new LoggerConfigurationBuilder()
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler() })
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler() }, LogLevel.Information)
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Critical })
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Critical }, LogLevel.None)
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Error, LogLevelIsBitMask: false })
            .AddWriteMessageHandler({
                Handler: new ConsoleMessageHandler(),
                LogLevel: LogLevel.Error, LogLevelIsBitMask: false
            }, LogLevel.None)
            .AddWriteMessageHandler({
                Handler: new ConsoleMessageHandler(),
                LogLevel: LogLevel.Debug | LogLevel.Critical, LogLevelIsBitMask: true
            })
            .AddWriteMessageHandler({
                Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Debug | LogLevel.Critical,
                LogLevelIsBitMask: true
            }, LogLevel.None)
            .Build();

        expect(config).toMatchSnapshot();
    });

    test("AddWriteMessageHandlers", () => {
        const config = new LoggerConfigurationBuilder()
            .AddWriteMessageHandlers([{ Handler: new ConsoleMessageHandler() }])
            .AddWriteMessageHandlers([
                { Handler: new ConsoleMessageHandler() },
                { Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Debug }
            ])
            .Build();

        expect(config).toMatchSnapshot();
    });

    test("Override", () => {
        const config = new LoggerConfigurationBuilder()
            .SetPrefix("Start prefix")
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Debug })
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Trace })
            .SetDefaultLogLevel(LogLevel.Trace)
            .Override({ Prefix: "New Prefix" })
            .Build();

        expect(config).toMatchSnapshot();

        const config2 = new LoggerConfigurationBuilder()
            .SetPrefix("Start prefix")
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Debug })
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Trace })
            .SetDefaultLogLevel(LogLevel.Trace)
            .Override({ WriteMessageHandlers: [] })
            .Build();

        expect(config2).toMatchSnapshot();

        const config3 = new LoggerConfigurationBuilder()
            .SetPrefix("Start prefix")
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Debug })
            .AddWriteMessageHandler({ Handler: new ConsoleMessageHandler(), LogLevel: LogLevel.Trace })
            .SetDefaultLogLevel(LogLevel.Trace)
            .Override({ DefaultLogLevel: { LogLevel: LogLevel.None | LogLevel.Error | LogLevel.Warning, LogLevelIsBitMask: true } })
            .Build();

        expect(config3).toMatchSnapshot();
    });
});
