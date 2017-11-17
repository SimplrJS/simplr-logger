(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("path"), require("fs"), require("os"));
	else if(typeof define === 'function' && define.amd)
		define(["path", "fs", "os"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("path"), require("fs"), require("os")) : factory(root["path"], root["fs"], root["os"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

Object.defineProperty(exports, "__esModule", { value: true });
var MessageHandlerBase = /** @class */ (function () {
    function MessageHandlerBase() {
    }
    return MessageHandlerBase;
}());
exports.MessageHandlerBase = MessageHandlerBase;


/***/ }),
/* 2 */
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
var console_message_handler_1 = __webpack_require__(3);
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
            CustomLogLevels: false,
            Prefix: undefined
        };
    };
    /**
     * Set custom message handler.
     *
     * @param handler Log messages handler.
     */
    LoggerConfigurationBuilder.prototype.SetWriteMessageHandler = function (handler) {
        this.configuration.WriteMessageHandler = [handler];
        return this;
    };
    /**
     * Add write message handlers
     *
     * @param handlers Log messages handlers list.
     */
    LoggerConfigurationBuilder.prototype.AddWriteMessageHandler = function (handlers) {
        if (this.configuration.WriteMessageHandler == null) {
            this.configuration.WriteMessageHandler = handlers;
        }
        this.configuration.WriteMessageHandler = this.configuration.WriteMessageHandler.concat(handlers);
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
        if (this.configuration.WriteMessageHandler == null) {
            this.SetWriteMessageHandler(new console_message_handler_1.ConsoleMessageHandler());
        }
        return this.configuration;
    };
    return LoggerConfigurationBuilder;
}());
exports.LoggerConfigurationBuilder = LoggerConfigurationBuilder;


/***/ }),
/* 3 */
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
var helpers_1 = __webpack_require__(4);
var ansi_color_codes_1 = __webpack_require__(9);
var message_handler_base_1 = __webpack_require__(1);
var ConsoleMessageHandler = /** @class */ (function (_super) {
    __extends(ConsoleMessageHandler, _super);
    function ConsoleMessageHandler(configuration) {
        var _this = _super.call(this) || this;
        _this.defaultConfiguration = {
            LogLevelPrefix: ConsoleMessageHandler.PrefixTypes.short,
            TimePrefix: ConsoleMessageHandler.PrefixTypes.short,
            UseColors: typeof window === "undefined"
        };
        _this.configuration = __assign({}, _this.defaultConfiguration, configuration);
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
        if (level === log_level_1.LogLevel.Trace) {
            return undefined;
        }
        var startString = this.configuration.UseColors ? colorStart : "";
        switch (this.configuration.LogLevelPrefix) {
            case ConsoleMessageHandler.PrefixTypes.none:
                return undefined;
            case ConsoleMessageHandler.PrefixTypes.short:
                return "" + startString + helpers_1.Helpers.GetLogLevelShortString(level) + ansi_color_codes_1.ANSIColorCodes.Reset;
            case ConsoleMessageHandler.PrefixTypes.full:
                return "" + startString + helpers_1.Helpers.GetLogLevelString(level) + ansi_color_codes_1.ANSIColorCodes.Reset;
        }
    };
    ConsoleMessageHandler.prototype.HandleMessage = function (level, isEnabled, timestamp, messages) {
        var method;
        var colorStart = "";
        switch (level) {
            case log_level_1.LogLevel.None: {
                return;
            }
            case log_level_1.LogLevel.Critical: {
                method = console.error;
                colorStart += ansi_color_codes_1.ANSIColorCodes.Bright + ansi_color_codes_1.ANSIColorCodes.FgWhite + ansi_color_codes_1.ANSIColorCodes.BgRed;
                break;
            }
            case log_level_1.LogLevel.Error: {
                method = console.error;
                colorStart += ansi_color_codes_1.ANSIColorCodes.FgBlack + ansi_color_codes_1.ANSIColorCodes.BgRed;
                break;
            }
            case log_level_1.LogLevel.Information: {
                method = console.info;
                colorStart += ansi_color_codes_1.ANSIColorCodes.FgGreen;
                break;
            }
            case log_level_1.LogLevel.Warning: {
                method = console.warn;
                colorStart += ansi_color_codes_1.ANSIColorCodes.Bright + ansi_color_codes_1.ANSIColorCodes.FgYellow;
                break;
            }
            case log_level_1.LogLevel.Debug: {
                method = console.debug;
                break;
            }
            case log_level_1.LogLevel.Trace: {
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
}(message_handler_base_1.MessageHandlerBase));
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_builder_1 = __webpack_require__(8);
exports.LoggerBuilder = logger_builder_1.LoggerBuilder;
var logger_configuration_builder_1 = __webpack_require__(2);
exports.LoggerConfigurationBuilder = logger_configuration_builder_1.LoggerConfigurationBuilder;
var log_level_1 = __webpack_require__(0);
exports.LogLevel = log_level_1.LogLevel;
var message_handler_base_1 = __webpack_require__(1);
exports.MessageHandlerBase = message_handler_base_1.MessageHandlerBase;
var Handlers = __webpack_require__(10);
exports.Handlers = Handlers;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_configuration_builder_1 = __webpack_require__(2);
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
            if (this.configuration.Prefix) {
                messages = [this.configuration.Prefix].concat(messages);
            }
            for (var _a = 0, _b = this.configuration.WriteMessageHandler; _a < _b.length; _a++) {
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var console_message_handler_1 = __webpack_require__(3);
exports.ConsoleMessageHandler = console_message_handler_1.ConsoleMessageHandler;
var file_message_handler_1 = __webpack_require__(11);
exports.FileMessageHandler = file_message_handler_1.FileMessageHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
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
var message_handler_base_1 = __webpack_require__(1);
var log_level_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(4);
var FileMessageHandler = /** @class */ (function (_super) {
    __extends(FileMessageHandler, _super);
    function FileMessageHandler(filePathName, isServerSide) {
        if (isServerSide === void 0) { isServerSide = typeof process !== "undefined"; }
        var _this = _super.call(this) || this;
        _this.isServerSide = isServerSide;
        _this.handleMessageStackCount = 4;
        if (_this.isServerSide) {
            // tslint:disable-next-line:no-require-imports
            var normalize = __webpack_require__(5).normalize;
            _this.filePathName = normalize(filePathName);
            _this.ensureDirectory();
        }
        return _this;
    }
    FileMessageHandler.prototype.HandleMessage = function (level, isLevelEnabled, timestamp, messages) {
        if (!this.isServerSide) {
            return;
        }
        var writeStream = this.getWriteStream();
        var formattedMessages = messages.map(function (msg) {
            switch (typeof msg) {
                case "string":
                    return msg;
                case "undefined":
                case "boolean":
                case "number":
                case "function":
                case "symbol":
                    return String(msg);
                case "object":
                    if (msg instanceof Error) {
                        return String(msg.stack);
                    }
                    else {
                        return JSON.stringify(msg);
                    }
            }
        });
        if (level === log_level_1.LogLevel.Trace) {
            var err = new Error();
            var stack = String(err.stack);
            err = undefined;
            var stackString = "\n" + stack.split("\n").slice(this.handleMessageStackCount, stack.length).join("\n");
            formattedMessages.push(stackString);
        }
        var datePrefix = "[" + new Date(timestamp).toLocaleString() + "]";
        writeStream.write(datePrefix + " " + helpers_1.Helpers.GetLogLevelShortString(level) + ": " + formattedMessages.join(" ") + this.EOL);
    };
    FileMessageHandler.prototype.getWriteStream = function () {
        var _this = this;
        if (this.writeStream != null) {
            return this.writeStream;
        }
        // tslint:disable-next-line:no-require-imports
        var fs = __webpack_require__(6);
        this.writeStream = fs.createWriteStream(this.filePathName, { flags: "a" });
        this.writeStream.on("close", function () {
            _this.writeStream = undefined;
        });
        this.writeStream.on("error", function (err) {
            throw err;
        });
        return this.writeStream;
    };
    Object.defineProperty(FileMessageHandler.prototype, "EOL", {
        get: function () {
            // tslint:disable-next-line:no-require-imports
            var EOL = __webpack_require__(13).EOL;
            return EOL;
        },
        enumerable: true,
        configurable: true
    });
    FileMessageHandler.prototype.ensureDirectory = function () {
        // tslint:disable-next-line:no-require-imports
        var path = __webpack_require__(5);
        // tslint:disable-next-line:no-require-imports
        var fs = __webpack_require__(6);
        var dir = path.dirname(this.filePathName);
        var dirList = dir.split(path.sep);
        var targetDir = (dir[0] !== path.sep && path.isAbsolute(dir)) ? "" : process.cwd();
        for (var _i = 0, dirList_1 = dirList; _i < dirList_1.length; _i++) {
            var a = dirList_1[_i];
            targetDir = path.join(targetDir, a);
            if (a.length > 0 && !fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir);
            }
        }
    };
    return FileMessageHandler;
}(message_handler_base_1.MessageHandlerBase));
exports.FileMessageHandler = FileMessageHandler;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ]);
});