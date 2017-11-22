import { LoggerConfiguration, LoggerConfigurationBuilder } from "simplr-logger";
export declare class LoggerRuntimeConfigurationBuilder {
    protected Configuration: LoggerConfiguration;
    constructor(Configuration?: LoggerConfiguration);
    /**
     * Update existing logger configuration.
     *
     * @param updater Updater handler which return new configuration.
     * @param setInitialConfigurationFromCurrent [default=true]
     * @param setInitialConfigurationFromCurrent Set builder initial configuration from the current logger configuration.
     */
    UpdateConfiguration(updater: LoggerRuntimeConfigurationBuilder.ConfigurationUpdater, setInitialConfigurationFromCurrent?: boolean): this;
}
export declare namespace LoggerRuntimeConfigurationBuilder {
    type ConfigurationUpdater = (builder: LoggerConfigurationBuilder) => LoggerConfiguration;
}
