import { LoggerConfigurationBuilder, LoggerBuilder, LogLevel } from "simplr-logger";

test("Without Configuration", () => {
    const Logger = new LoggerBuilder();
    expect(typeof Logger).toBe("object");
});

test("With Prefix", () => {
    const config = new LoggerConfigurationBuilder()
        .SetDefaultLogLevels(LogLevel.None)
        .SetPrefix("[Tests]")
        .Build();

    const Logger = new LoggerBuilder(config);
    Logger.Info("Message");
});

describe("Methods", () => {
    const config = new LoggerConfigurationBuilder()
        .SetDefaultLogLevels(LogLevel.None)
        .Build();

    const Logger = new LoggerBuilder(config);

    test("Log", () => {
        const timestamp = Date.now();
        const result = Logger.Log(LogLevel.Information, "Message");
        expect(result).toBeGreaterThanOrEqual(timestamp);

        Logger.Log(LogLevel.Debug, "Message", 2, { A: true }, ["array"], undefined, null);
        Logger.Log(LogLevel.Info, new Error("Critical error"));
        Logger.Log(LogLevel.None, "None message");
    });

    test("Debug", () => {
        const timestamp = Date.now();
        const result = Logger.Debug("Message");
        expect(result).toBeGreaterThanOrEqual(timestamp);

        Logger.Debug("Message", 2, { A: true }, ["array"], undefined, null);
        Logger.Debug(new Error("Critical error"));
    });

    test("Info", () => {
        const timestamp = Date.now();
        const result = Logger.Info("Message");
        expect(result).toBeGreaterThanOrEqual(timestamp);

        Logger.Info("Message", 2, { A: true }, ["array"], undefined, null);
        Logger.Info(new Error("Critical error"));
    });

    test("Warn", () => {
        const timestamp = Date.now();
        const result = Logger.Warn("Message");
        expect(result).toBeGreaterThanOrEqual(timestamp);

        Logger.Warn("Message", 2, { A: true }, ["array"], undefined, null);
        Logger.Warn(new Error("Critical error"));
    });

    test("Error", () => {
        const timestamp = Date.now();
        const result = Logger.Error("Message");
        expect(result).toBeGreaterThanOrEqual(timestamp);

        Logger.Error("Message", 2, { A: true }, ["array"], undefined, null);
        Logger.Error(new Error("Critical error"));
    });

    test("Critical", () => {
        const timestamp = Date.now();
        const result = Logger.Critical("Message");
        expect(result).toBeGreaterThanOrEqual(timestamp);

        Logger.Critical("Message", 2, { A: true }, ["array"], undefined, null);
        Logger.Critical(new Error("Critical error"));
    });

    test("Trace", () => {
        const timestamp = Date.now();
        const result = Logger.Trace("Message");
        expect(result).toBeGreaterThanOrEqual(timestamp);

        Logger.Trace("Message", 2, { A: true }, ["array"], undefined, null);
        Logger.Trace(new Error("Critical error"));
    });
});
