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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_level_1 = __webpack_require__(0);
var console_message_handler_1 = __webpack_require__(2);
/**
 * Logger configuration builder.
 */
var LoggerConfigurationBuilder = /** @class */ (function () {
    function LoggerConfigurationBuilder(initConfiguration) {
        this.configuration = __assign({}, this.defaultConfiguration(), this.configuration);
    }
    LoggerConfigurationBuilder.prototype.defaultConfiguration = function () {
        return {
            WriteMessageHandler: undefined,
            LogLevel: log_level_1.LogLevel.Warning,
            CustomLogLevels: false
        };
    };
    /**
     * Set custom message handler.
     *
     * @param handler Log messages handler.
     */
    LoggerConfigurationBuilder.prototype.SetWriteMessageHandler = function (handler) {
        this.configuration.WriteMessageHandler = handler;
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
        var logLevel = log_level_1.LogLevel.None;
        for (var _i = 0, logLevels_1 = logLevels; _i < logLevels_1.length; _i++) {
            var level = logLevels_1[_i];
            logLevel |= level;
        }
        this.configuration.LogLevel = logLevel;
        this.configuration.CustomLogLevels = true;
        return this;
    };
    /**
     * Build configuration result object.
     */
    LoggerConfigurationBuilder.prototype.Build = function () {
        if (this.configuration.WriteMessageHandler == null) {
            this.SetWriteMessageHandler(new console_message_handler_1.ConsoleMessageHandler());
        }
        return this.configuration;
    };
    return LoggerConfigurationBuilder;
}());
exports.LoggerConfigurationBuilder = LoggerConfigurationBuilder;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var log_level_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(6);
var message_handler_base_1 = __webpack_require__(3);
var ConsoleMessageHandler = /** @class */ (function (_super) {
    __extends(ConsoleMessageHandler, _super);
    function ConsoleMessageHandler(useShortPrefix) {
        if (useShortPrefix === void 0) { useShortPrefix = true; }
        var _this = _super.call(this) || this;
        _this.useShortPrefix = useShortPrefix;
        return _this;
    }
    ConsoleMessageHandler.prototype.HandleMessage = function (level, isEnabled, timestamp, messages) {
        var usePrefix = true;
        var method;
        switch (level) {
            case log_level_1.LogLevel.None: {
                return;
            }
            case log_level_1.LogLevel.Critical:
            case log_level_1.LogLevel.Error: {
                method = console.error;
                break;
            }
            case log_level_1.LogLevel.Information: {
                method = console.info;
                break;
            }
            case log_level_1.LogLevel.Warning: {
                method = console.warn;
                break;
            }
            case log_level_1.LogLevel.Debug: {
                method = console.debug;
                break;
            }
            case log_level_1.LogLevel.Trace: {
                method = console.trace;
                usePrefix = false;
                break;
            }
            default: {
                method = console.log;
                break;
            }
        }
        // Fallback to console.log method
        if (method == null) {
            method = console.log;
        }
        if (usePrefix) {
            var prefixString = this.useShortPrefix ? helpers_1.Helpers.GetLogLevelShortString(level) : helpers_1.Helpers.GetLogLevelString(level);
            method.apply(void 0, [prefixString + ":"].concat(messages));
        }
        else {
            method.apply(void 0, messages);
        }
    };
    return ConsoleMessageHandler;
}(message_handler_base_1.MessageHandlerBase));
exports.ConsoleMessageHandler = ConsoleMessageHandler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessageHandlerBase = /** @class */ (function () {
    function MessageHandlerBase() {
    }
    return MessageHandlerBase;
}());
exports.MessageHandlerBase = MessageHandlerBase;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_builder_1 = __webpack_require__(5);
exports.LoggerBuilder = logger_builder_1.LoggerBuilder;
var logger_configuration_builder_1 = __webpack_require__(1);
exports.LoggerConfigurationBuilder = logger_configuration_builder_1.LoggerConfigurationBuilder;
var log_level_1 = __webpack_require__(0);
exports.LogLevel = log_level_1.LogLevel;
var message_handler_base_1 = __webpack_require__(3);
exports.MessageHandlerBase = message_handler_base_1.MessageHandlerBase;
var Handlers = __webpack_require__(7);
exports.Handlers = Handlers;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_configuration_builder_1 = __webpack_require__(1);
var log_level_1 = __webpack_require__(0);
var LoggerBuilder = /** @class */ (function () {
    function LoggerBuilder(configuration) {
        if (configuration === void 0) { configuration = new logger_configuration_builder_1.LoggerConfigurationBuilder().Build(); }
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
            return _this.log.apply(_this, [log_level_1.LogLevel.Debug].concat(messages));
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
            return _this.log.apply(_this, [log_level_1.LogLevel.Information].concat(messages));
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
            return _this.log.apply(_this, [log_level_1.LogLevel.Warning].concat(messages));
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
            return _this.log.apply(_this, [log_level_1.LogLevel.Error].concat(messages));
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
            return _this.log.apply(_this, [log_level_1.LogLevel.Critical].concat(messages));
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
            this.configuration.WriteMessageHandler.HandleMessage(level, isEnabled, timestamp, messages);
        }
        return timestamp;
    };
    return LoggerBuilder;
}());
exports.LoggerBuilder = LoggerBuilder;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_level_1 = __webpack_require__(0);
var HelpersBuilder = /** @class */ (function () {
    function HelpersBuilder() {
    }
    HelpersBuilder.prototype.GetLogLevelShortString = function (level) {
        switch (level) {
            case log_level_1.LogLevel.Critical:
                return "crit";
            case log_level_1.LogLevel.Error:
                return "erro";
            case log_level_1.LogLevel.Warning:
                return "warn";
            case log_level_1.LogLevel.Information:
                return "info";
            case log_level_1.LogLevel.Debug:
                return "dbug";
            case log_level_1.LogLevel.Trace:
                return "trce";
            case log_level_1.LogLevel.None:
            default:
                return "none";
        }
    };
    HelpersBuilder.prototype.GetLogLevelString = function (level) {
        return log_level_1.LogLevel[level].toString();
    };
    return HelpersBuilder;
}());
exports.HelpersBuilder = HelpersBuilder;
exports.Helpers = new HelpersBuilder();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var console_message_handler_1 = __webpack_require__(2);
exports.ConsoleMessageHandler = console_message_handler_1.ConsoleMessageHandler;


/***/ })
/******/ ]);
});