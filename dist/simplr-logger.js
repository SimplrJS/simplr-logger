(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var logger_builder_1 = __webpack_require__(2);
exports.LoggerBuilder = logger_builder_1.LoggerBuilder;
var logger_configuration_builder_1 = __webpack_require__(3);
exports.LoggerConfigurationBuilder = logger_configuration_builder_1.LoggerConfigurationBuilder;
var log_level_1 = __webpack_require__(4);
exports.LogLevel = log_level_1.LogLevel;
var message_handler_base_1 = __webpack_require__(5);
exports.MessageHandlerBase = message_handler_base_1.MessageHandlerBase;
var console_message_handler_1 = __webpack_require__(6);
exports.ConsoleMessageHandler = console_message_handler_1.ConsoleMessageHandler;
var helpers_1 = __webpack_require__(8);
exports.LoggerHelpers = helpers_1.Helpers;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var simplr_logger_1 = __webpack_require__(0);
var LoggerBuilder = /** @class */ (function () {
    function LoggerBuilder(configuration) {
        if (configuration === void 0) { configuration = new simplr_logger_1.LoggerConfigurationBuilder().Build(); }
        var _this = this;
        this.configuration = configuration;
        /**
         * Writes a log entries with specified log level.
         *
         * @param level Entries will be written on this level.
         * @param messages Messages to be written.
         */
        this.Log = function (level) {
            var messages = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                messages[_i - 1] = arguments[_i];
            }
            return _this.log.apply(_this, [level].concat(messages));
        };
        /**
         * Write a log entries with debug log level.
         *
         * @param messages Messages to be written.
         */
        this.Debug = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            return _this.log.apply(_this, [simplr_logger_1.LogLevel.Debug].concat(messages));
        };
        /**
         * Write a log entries with information log level.
         *
         * @param messages Messages to be written.
         */
        this.Info = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            return _this.log.apply(_this, [simplr_logger_1.LogLevel.Information].concat(messages));
        };
        /**
         * Write a log entries with warning log level.
         *
         * @param messages Messages to be written.
         */
        this.Warn = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            return _this.log.apply(_this, [simplr_logger_1.LogLevel.Warning].concat(messages));
        };
        /**
         * Write a log entries with error log level.
         *
         * @param messages Messages to be written.
         */
        this.Error = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            return _this.log.apply(_this, [simplr_logger_1.LogLevel.Error].concat(messages));
        };
        /**
         * Write a log entries with critical log level.
         *
         * @param messages Messages to be written.
         */
        this.Critical = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            return _this.log.apply(_this, [simplr_logger_1.LogLevel.Critical].concat(messages));
        };
    }
    /**
     * Check if log level is enabled.
     *
     * @param level Log level value.
     */
    LoggerBuilder.prototype.IsEnabled = function (level) {
        return this.configuration.CustomLogLevels ?
            ((this.configuration.LogLevel & level) === level) :
            (this.configuration.LogLevel >= level);
    };
    LoggerBuilder.prototype.log = function (level) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        var timestamp = Date.now();
        var isEnabled = this.IsEnabled(level);
        if (isEnabled) {
            if (this.configuration.Prefix) {
                messages = [this.configuration.Prefix].concat(messages);
            }
            /**
             * @deprecated
             */
            if (this.configuration.WriteMessageHandler != null) {
                this.configuration.WriteMessageHandler.HandleMessage(level, isEnabled, timestamp, messages);
            }
            for (var _a = 0, _b = this.configuration.WriteMessageHandlers; _a < _b.length; _a++) {
                var handler = _b[_a];
                handler.HandleMessage(level, isEnabled, timestamp, messages);
            }
        }
        return timestamp;
    };
    return LoggerBuilder;
}());
exports.LoggerBuilder = LoggerBuilder;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var simplr_logger_1 = __webpack_require__(0);
/**
 * Logger configuration builder.
 */
var LoggerConfigurationBuilder = /** @class */ (function () {
    function LoggerConfigurationBuilder(initConfiguration) {
        this.configuration = tslib_1.__assign({}, this.defaultConfiguration(), this.configuration);
    }
    LoggerConfigurationBuilder.prototype.defaultConfiguration = function () {
        return {
            WriteMessageHandler: undefined,
            WriteMessageHandlers: undefined,
            LogLevel: simplr_logger_1.LogLevel.Warning,
            CustomLogLevels: false,
            Prefix: undefined
        };
    };
    /**
     * Set custom message handler.
     *
     * @param handler Log messages handler.
     * @deprecated Use AddWriteMessageHandlers instead.
     */
    LoggerConfigurationBuilder.prototype.SetWriteMessageHandler = function (handler) {
        this.configuration.WriteMessageHandler = handler;
        return this;
    };
    /**
     * Add write message handlers.
     *
     * @param handlers Log messages handlers list.
     */
    LoggerConfigurationBuilder.prototype.AddWriteMessageHandlers = function (handlers) {
        if (this.configuration.WriteMessageHandlers == null) {
            this.configuration.WriteMessageHandlers = handlers;
        }
        this.configuration.WriteMessageHandlers = this.configuration.WriteMessageHandlers.concat(handlers);
        return this;
    };
    /**
     * Set log level.
     *
     * @param logLevel LogLevel value or bit mask values.
     */
    LoggerConfigurationBuilder.prototype.SetLogLevel = function (logLevel) {
        this.configuration.LogLevel = logLevel;
        this.configuration.CustomLogLevels = false;
        return this;
    };
    /**
     * Set custom log levels.
     *
     * @param logLevels List of log level.
     */
    LoggerConfigurationBuilder.prototype.SetCustomLogLevels = function (logLevels) {
        var logLevel = simplr_logger_1.LogLevel.None;
        for (var _i = 0, logLevels_1 = logLevels; _i < logLevels_1.length; _i++) {
            var level = logLevels_1[_i];
            logLevel |= level;
        }
        this.configuration.LogLevel = logLevel;
        this.configuration.CustomLogLevels = true;
        return this;
    };
    /**
     * Set the first message in messages list.
     *
     * @param prefix Prefix string value.
     */
    LoggerConfigurationBuilder.prototype.SetPrefix = function (prefix) {
        this.configuration.Prefix = prefix;
        return this;
    };
    /**
     * Build configuration result object.
     */
    LoggerConfigurationBuilder.prototype.Build = function () {
        if (this.configuration.WriteMessageHandler == null && this.configuration.WriteMessageHandlers == null) {
            this.AddWriteMessageHandlers([new simplr_logger_1.ConsoleMessageHandler()]);
        }
        return this.configuration;
    };
    return LoggerConfigurationBuilder;
}());
exports.LoggerConfigurationBuilder = LoggerConfigurationBuilder;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines logging severity levels.
 */
var LogLevel;
(function (LogLevel) {
    /**
     * Not used for writing log messages. Specifies that a logging category should not write any messages.
     */
    LogLevel[LogLevel["None"] = 0] = "None";
    /**
     * Logs that describe an unrecoverable application or system crash,
     * or a catastrophic failure that requires immediate attention.
     */
    LogLevel[LogLevel["Critical"] = 1] = "Critical";
    /**
     * Logs that highlight when the current flow of execution is stopped due to a failure.
     * These should indicate a failure in the current activity, not an application-wide failure.
     */
    LogLevel[LogLevel["Error"] = 2] = "Error";
    /**
     * Logs that highlight an abnormal or unexpected event in the application flow,
     * but do not otherwise cause the application execution to stop.
     */
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    /**
     * Logs that track the general flow of the application. These logs should have long-term value.
     */
    LogLevel[LogLevel["Information"] = 8] = "Information";
    /**
     * Logs that are used for interactive investigation during development.
     * These logs should primarily contain information useful for debugging and have no long-term value.
     */
    LogLevel[LogLevel["Debug"] = 16] = "Debug";
    /**
     * Logs that contain the most detailed messages. These messages may contain sensitive application data.
     * These messages are disabled by default and should never be enabled in a production environment.
     */
    LogLevel[LogLevel["Trace"] = 32] = "Trace";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var MessageHandlerBase = /** @class */ (function () {
    function MessageHandlerBase() {
    }
    return MessageHandlerBase;
}());
exports.MessageHandlerBase = MessageHandlerBase;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var ansi_color_codes_1 = __webpack_require__(7);
var simplr_logger_1 = __webpack_require__(0);
var ConsoleMessageHandler = /** @class */ (function (_super) {
    tslib_1.__extends(ConsoleMessageHandler, _super);
    function ConsoleMessageHandler(configuration) {
        var _this = _super.call(this) || this;
        _this.defaultConfiguration = {
            LogLevelPrefix: ConsoleMessageHandler.PrefixTypes.short,
            TimePrefix: ConsoleMessageHandler.PrefixTypes.short,
            UseColors: typeof window === "undefined"
        };
        _this.configuration = tslib_1.__assign({}, _this.defaultConfiguration, configuration);
        return _this;
    }
    ConsoleMessageHandler.prototype.resolveTimePrefix = function (timestamp) {
        switch (this.configuration.TimePrefix) {
            case ConsoleMessageHandler.PrefixTypes.none:
                return undefined;
            case ConsoleMessageHandler.PrefixTypes.short:
                return "[" + new Date(timestamp).toLocaleTimeString() + "]";
            case ConsoleMessageHandler.PrefixTypes.full:
                return "[" + new Date(timestamp).toLocaleString() + "]";
        }
    };
    ConsoleMessageHandler.prototype.resolveLogLevelPrefix = function (level, colorStart) {
        if (level === simplr_logger_1.LogLevel.Trace) {
            return undefined;
        }
        var startString = this.configuration.UseColors ? colorStart : "";
        switch (this.configuration.LogLevelPrefix) {
            case ConsoleMessageHandler.PrefixTypes.none:
                return undefined;
            case ConsoleMessageHandler.PrefixTypes.short:
                return "" + startString + simplr_logger_1.LoggerHelpers.GetLogLevelShortString(level) + ansi_color_codes_1.ANSIColorCodes.Reset;
            case ConsoleMessageHandler.PrefixTypes.full:
                return "" + startString + simplr_logger_1.LoggerHelpers.GetLogLevelString(level) + ansi_color_codes_1.ANSIColorCodes.Reset;
        }
    };
    ConsoleMessageHandler.prototype.HandleMessage = function (level, isEnabled, timestamp, messages) {
        var method;
        var colorStart = "";
        switch (level) {
            case simplr_logger_1.LogLevel.None: {
                return;
            }
            case simplr_logger_1.LogLevel.Critical: {
                method = console.error;
                colorStart += ansi_color_codes_1.ANSIColorCodes.Bright + ansi_color_codes_1.ANSIColorCodes.FgWhite + ansi_color_codes_1.ANSIColorCodes.BgRed;
                break;
            }
            case simplr_logger_1.LogLevel.Error: {
                method = console.error;
                colorStart += ansi_color_codes_1.ANSIColorCodes.FgBlack + ansi_color_codes_1.ANSIColorCodes.BgRed;
                break;
            }
            case simplr_logger_1.LogLevel.Information: {
                method = console.info;
                colorStart += ansi_color_codes_1.ANSIColorCodes.FgGreen;
                break;
            }
            case simplr_logger_1.LogLevel.Warning: {
                method = console.warn;
                colorStart += ansi_color_codes_1.ANSIColorCodes.Bright + ansi_color_codes_1.ANSIColorCodes.FgYellow;
                break;
            }
            case simplr_logger_1.LogLevel.Debug: {
                method = console.debug;
                break;
            }
            case simplr_logger_1.LogLevel.Trace: {
                method = console.trace;
                break;
            }
            default: {
                // Fallback to console.log method
                method = console.log;
                break;
            }
        }
        var prefixList = [];
        var timePrefix = this.resolveTimePrefix(timestamp);
        if (timePrefix != null) {
            prefixList.push(timePrefix);
        }
        var logLevelPrefix = this.resolveLogLevelPrefix(level, colorStart);
        if (logLevelPrefix != null) {
            prefixList.push(logLevelPrefix);
        }
        if (prefixList.length > 0) {
            var prefixString = prefixList.join(" ");
            method.apply(void 0, [prefixString + ":"].concat(messages));
        }
        else {
            method.apply(void 0, messages);
        }
    };
    return ConsoleMessageHandler;
}(simplr_logger_1.MessageHandlerBase));
exports.ConsoleMessageHandler = ConsoleMessageHandler;
(function (ConsoleMessageHandler) {
    var PrefixTypes;
    (function (PrefixTypes) {
        PrefixTypes["none"] = "none";
        PrefixTypes["short"] = "short";
        PrefixTypes["full"] = "full";
    })(PrefixTypes = ConsoleMessageHandler.PrefixTypes || (ConsoleMessageHandler.PrefixTypes = {}));
})(ConsoleMessageHandler = exports.ConsoleMessageHandler || (exports.ConsoleMessageHandler = {}));
exports.ConsoleMessageHandler = ConsoleMessageHandler;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var ANSIColorCodes;
(function (ANSIColorCodes) {
    ANSIColorCodes["Reset"] = "\u001B[0m";
    ANSIColorCodes["Bright"] = "\u001B[1m";
    ANSIColorCodes["Dim"] = "\u001B[2m";
    ANSIColorCodes["Underscore"] = "\u001B[4m";
    ANSIColorCodes["Blink"] = "\u001B[5m";
    ANSIColorCodes["Reverse"] = "\u001B[7m";
    ANSIColorCodes["Hidden"] = "\u001B[8m";
    ANSIColorCodes["FgBlack"] = "\u001B[30m";
    ANSIColorCodes["FgRed"] = "\u001B[31m";
    ANSIColorCodes["FgGreen"] = "\u001B[32m";
    ANSIColorCodes["FgYellow"] = "\u001B[33m";
    ANSIColorCodes["FgBlue"] = "\u001B[34m";
    ANSIColorCodes["FgMagenta"] = "\u001B[35m";
    ANSIColorCodes["FgCyan"] = "\u001B[36m";
    ANSIColorCodes["FgWhite"] = "\u001B[37m";
    ANSIColorCodes["BgBlack"] = "\u001B[40m";
    ANSIColorCodes["BgRed"] = "\u001B[41m";
    ANSIColorCodes["BgGreen"] = "\u001B[42m";
    ANSIColorCodes["BgYellow"] = "\u001B[43m";
    ANSIColorCodes["BgBlue"] = "\u001B[44m";
    ANSIColorCodes["BgMagenta"] = "\u001B[45m";
    ANSIColorCodes["BgCyan"] = "\u001B[46m";
    ANSIColorCodes["BgWhite"] = "\u001B[47m";
})(ANSIColorCodes = exports.ANSIColorCodes || (exports.ANSIColorCodes = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var simplr_logger_1 = __webpack_require__(0);
var HelpersBuilder = /** @class */ (function () {
    function HelpersBuilder() {
    }
    HelpersBuilder.prototype.GetLogLevelShortString = function (level) {
        switch (level) {
            case simplr_logger_1.LogLevel.Critical:
                return "crit";
            case simplr_logger_1.LogLevel.Error:
                return "erro";
            case simplr_logger_1.LogLevel.Warning:
                return "warn";
            case simplr_logger_1.LogLevel.Information:
                return "info";
            case simplr_logger_1.LogLevel.Debug:
                return "dbug";
            case simplr_logger_1.LogLevel.Trace:
                return "trce";
            case simplr_logger_1.LogLevel.None:
            default:
                return "none";
        }
    };
    HelpersBuilder.prototype.GetLogLevelString = function (level) {
        return simplr_logger_1.LogLevel[level].toString();
    };
    return HelpersBuilder;
}());
exports.HelpersBuilder = HelpersBuilder;
exports.Helpers = new HelpersBuilder();


/***/ })
/******/ ]);
});