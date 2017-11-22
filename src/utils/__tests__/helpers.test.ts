import { LoggerHelpers, LogLevel } from "simplr-logger";

describe("GetLogLevelShortString", () => {
    test("Unknown string should be none", () => {
        const unknown = LoggerHelpers.GetLogLevelShortString(-1);
        expect(unknown).toBe(LogLevel[LogLevel.None].toString().toLowerCase());
    });
});

describe("IsLogLevelEnabled", () => {
    describe("Current LogLevel.None", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.None, false);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(false);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(false);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(false);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(false);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(false);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(false);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });

    describe("Current LogLevel.Critical", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.Critical, false);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(false);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(false);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(false);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(false);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(false);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(true);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });

    describe("Current LogLevel.Error", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.Error, false);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(false);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(false);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(false);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(false);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(true);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(true);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });

    describe("Current LogLevel.Warning", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.Warning, false);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(false);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(false);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(false);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(true);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(true);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(true);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });

    describe("Current LogLevel.Information", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.Information, false);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(false);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(false);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(true);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(true);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(true);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(true);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });

    describe("Current LogLevel.Debug", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.Debug, false);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(false);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(true);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(true);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(true);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(true);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(true);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });

    describe("Current LogLevel.Trace", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.Trace, false);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(true);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(true);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(true);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(true);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(true);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(true);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });
});

describe("IsLogLevelEnabled with bitwise", () => {
    describe("One Value", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.Debug, true);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(false);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(true);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(false);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(false);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(false);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(false);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });

    describe("Multiple Values", () => {
        const caller = LoggerHelpers.IsLogLevelEnabled.bind(undefined, LogLevel.None | LogLevel.Critical | LogLevel.Trace, true);

        test("LogLevel.Trace", () => {
            expect(caller.call(undefined, LogLevel.Trace)).toBe(true);
        });

        test("LogLevel.Debug", () => {
            expect(caller.call(undefined, LogLevel.Debug)).toBe(false);
        });

        test("LogLevel.Information", () => {
            expect(caller.call(undefined, LogLevel.Information)).toBe(false);
        });

        test("LogLevel.Warning", () => {

            expect(caller.call(undefined, LogLevel.Warning)).toBe(false);
        });

        test("LogLevel.Error", () => {
            expect(caller.call(undefined, LogLevel.Error)).toBe(false);
        });

        test("LogLevel.Critical", () => {
            expect(caller.call(undefined, LogLevel.Critical)).toBe(true);
        });

        test("LogLevel.None", () => {
            expect(caller.call(undefined, LogLevel.None)).toBe(true);
        });
    });
});

describe("CalculateLogLevelsBitMaskValue", () => {
    test("One Value", () => {
        const value = LoggerHelpers.CalculateLogLevelsBitMaskValue([LogLevel.Warning]);
        expect(value).toBe(LogLevel.Warning);
    });

    test("Multiple Values", () => {
        const value = LoggerHelpers.CalculateLogLevelsBitMaskValue([LogLevel.Warning, LogLevel.Critical, LogLevel.Error]);
        expect(value).toBe(LogLevel.Warning | LogLevel.Critical | LogLevel.Error);
    });
});
