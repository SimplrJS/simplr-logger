import { LoggerConfigurationBuilder, LoggerBuilder, LogLevel } from "simplr-logger";

const config = new LoggerConfigurationBuilder()
    .SetDefaultLogLevels(LogLevel.None)
    .Build();

const Logger = new LoggerBuilder(config);

test("Log", () => {
    const timestamp = Date.now();
    const result = Logger.Log(LogLevel.Information, "Message");
    expect(result).toBeGreaterThanOrEqual(timestamp);

    Logger.Log(LogLevel.Information, "Message", 2, { A: true }, ["array"], undefined, null);
    Logger.Log(LogLevel.Critical, new Error("Critical error"));
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
