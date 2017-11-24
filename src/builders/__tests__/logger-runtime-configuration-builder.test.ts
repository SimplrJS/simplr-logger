import { LoggerRuntimeConfigurationBuilder, LoggerConfigurationBuilder, LogLevel } from "simplr-logger";

test("Default Configuration", () => {
    const runtimeConfiguration = new LoggerRuntimeConfigurationBuilder();
    runtimeConfiguration.UpdateConfiguration(builder => builder.SetPrefix("New prefix").Build());
    expect(runtimeConfiguration).toMatchSnapshot();
});

test("Same Configuration", () => {
    const config = new LoggerConfigurationBuilder().SetDefaultLogLevel(LogLevel.Trace).Build();
    const runtimeConfiguration = new LoggerRuntimeConfigurationBuilder(config);
    runtimeConfiguration.UpdateConfiguration(builder => builder.Build());
    expect(runtimeConfiguration).toMatchSnapshot();
});

test("Custom Configuration", () => {
    const config = new LoggerConfigurationBuilder().SetPrefix("Old prefix").Build();
    const runtimeConfiguration = new LoggerRuntimeConfigurationBuilder(config);
    runtimeConfiguration.UpdateConfiguration(builder => builder.SetPrefix("New prefix").Build(), true);
    expect(runtimeConfiguration).toMatchSnapshot();
});

test("New Configuration", () => {
    const runtimeConfiguration = new LoggerRuntimeConfigurationBuilder();
    runtimeConfiguration.UpdateConfiguration(builder => builder.Build(), false);
    expect(runtimeConfiguration).toMatchSnapshot();
});
