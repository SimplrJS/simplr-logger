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
var helpers_1 = __webpack_require__(2);
exports.LoggerHelpers = helpers_1.Helpers;
var log_level_1 = __webpack_require__(4);
exports.LogLevel = log_level_1.LogLevel;
var message_handler_base_1 = __webpack_require__(5);
exports.MessageHandlerBase = message_handler_base_1.MessageHandlerBase;
var prefix_type_1 = __webpack_require__(6);
exports.PrefixType = prefix_type_1.PrefixType;
var console_message_handler_1 = __webpack_require__(7);
exports.ConsoleMessageHandler = console_message_handler_1.ConsoleMessageHandler;
var logger_configuration_builder_1 = __webpack_require__(9);
exports.LoggerConfigurationBuilder = logger_configuration_builder_1.LoggerConfigurationBuilder;
var logger_runtime_configuration_builder_1 = __webpack_require__(10);
exports.LoggerRuntimeConfigurationBuilder = logger_runtime_configuration_builder_1.LoggerRuntimeConfigurationBuilder;
var logger_builder_1 = __webpack_require__(11);
exports.LoggerBuilder = logger_builder_1.LoggerBuilder;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", { value: true });
var simplr_logger_1 = __webpack_require__(0);
var Helpers;
(function (Helpers) {
    /**
     * Check if running on server side environment.
     */
    function IsServerSide() {
        return typeof process !== "undefined";
    }
    Helpers.IsServerSide = IsServerSide;
    /**
     * Return short name of log level.
     *
     * @param logLevel Log level value.
     */
    function GetLogLevelShortString(logLevel) {
        switch (logLevel) {
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
    }
    Helpers.GetLogLevelShortString = GetLogLevelShortString;
    /**
     * Return full name of log level.
     *
     * @param logLevel Log level value.
     */
    function GetLogLevelString(logLevel) {
        return simplr_logger_1.LogLevel[logLevel].toString();
    }
    Helpers.GetLogLevelString = GetLogLevelString;
    /**
     * Resolve and calculate log level details.
     *
     * @param logLevels Log level value or list of log level values.
     */
    function ResolveLogLevel(logLevels) {
        if (typeof logLevels === "number") {
            return {
                value: logLevels,
                isBitMask: false
            };
        }
        else {
            return {
                value: CalculateLogLevelsBitMaskValue(logLevels),
                isBitMask: true
            };
        }
    }
    Helpers.ResolveLogLevel = ResolveLogLevel;
    /**
     * Calculate log level bit mask value.
     *
     * @param logLevels List of log levels.
     */
    function CalculateLogLevelsBitMaskValue(logLevels) {
        var logLevel = simplr_logger_1.LogLevel.None;
        for (var _i = 0, logLevels_1 = logLevels; _i < logLevels_1.length; _i++) {
            var level = logLevels_1[_i];
            logLevel |= level;
        }
        return logLevel;
    }
    Helpers.CalculateLogLevelsBitMaskValue = CalculateLogLevelsBitMaskValue;
    /**
     * Check if log level is enabled in handler.
     *
     * @param currentLogLevel Handler current log level.
     * @param currentLogLevelIsBitMask Handler current log level bit mask value.
     * @param targetLogLevel Checking log level value.
     */
    function IsLogLevelEnabled(currentLogLevel, currentLogLevelIsBitMask, targetLogLevel) {
        return currentLogLevelIsBitMask ?
            ((currentLogLevel & targetLogLevel) === targetLogLevel) :
            (currentLogLevel >= targetLogLevel);
    }
    Helpers.IsLogLevelEnabled = IsLogLevelEnabled;
    /**
     * Resolve log level string prefix by prefix type.
     *
     * @param prefixType Prefix type enum value or string.
     * @param logLevel Current log level.
     */
    function ResolveLogLevelPrefix(prefixType, logLevel) {
        switch (prefixType) {
            case simplr_logger_1.PrefixType.None:
                return undefined;
            case simplr_logger_1.PrefixType.Short:
                return GetLogLevelShortString(logLevel);
            case simplr_logger_1.PrefixType.Full:
                return GetLogLevelString(logLevel);
        }
    }
    Helpers.ResolveLogLevelPrefix = ResolveLogLevelPrefix;
    /**
     * Resolve date string by prefix type.
     *
     * @param prefixType Prefix type enum value or string.
     * @param timestamp Timestamp to resolve.
     */
    function ResolveTimePrefix(prefixType, timestamp) {
        switch (prefixType) {
            case simplr_logger_1.PrefixType.None:
                return undefined;
            case simplr_logger_1.PrefixType.Short:
                return new Date(timestamp).toLocaleTimeString();
            case simplr_logger_1.PrefixType.Full:
                return new Date(timestamp).toLocaleString();
        }
    }
    Helpers.ResolveTimePrefix = ResolveTimePrefix;
})(Helpers = exports.Helpers || (exports.Helpers = {}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
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
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var PrefixType;
(function (PrefixType) {
    PrefixType["None"] = "None";
    PrefixType["Short"] = "Short";
    PrefixType["Full"] = "Full";
})(PrefixType = exports.PrefixType || (exports.PrefixType = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var ansi_color_codes_1 = __webpack_require__(8);
var simplr_logger_1 = __webpack_require__(0);
var ConsoleMessageHandler = /** @class */ (function (_super) {
    tslib_1.__extends(ConsoleMessageHandler, _super);
    function ConsoleMessageHandler(configuration) {
        var _this = _super.call(this) || this;
        _this.configuration = tslib_1.__assign({}, _this.defaultConfiguration, configuration);
        return _this;
    }
    Object.defineProperty(ConsoleMessageHandler.prototype, "defaultConfiguration", {
        get: function () {
            return {
                LogLevelPrefix: simplr_logger_1.PrefixType.Short,
                TimePrefix: simplr_logger_1.PrefixType.Short,
                UseColors: typeof window === "undefined"
            };
        },
        enumerable: true,
        configurable: true
    });
    ConsoleMessageHandler.prototype.resolveLogLevelPrefix = function (level, colorStart) {
        if (level === simplr_logger_1.LogLevel.Trace) {
            return undefined;
        }
        var prefix = simplr_logger_1.LoggerHelpers.ResolveLogLevelPrefix(this.configuration.LogLevelPrefix, level);
        if (prefix == null) {
            return undefined;
        }
        var colorPrefix = this.configuration.UseColors ? colorStart : "";
        return "" + colorPrefix + prefix + ansi_color_codes_1.ANSIColorCodes.Reset;
    };
    ConsoleMessageHandler.prototype.HandleMessage = function (level, timestamp, messages) {
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
            case simplr_logger_1.LogLevel.Trace: {
                method = console.trace;
                break;
            }
            case simplr_logger_1.LogLevel.Debug:
            default: {
                // Fallback to console.log method
                method = console.log;
                break;
            }
        }
        var prefixList = [];
        var timePrefix = simplr_logger_1.LoggerHelpers.ResolveTimePrefix(this.configuration.TimePrefix, timestamp);
        if (timePrefix != null) {
            prefixList.push("[" + timePrefix + "]");
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


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var simplr_logger_1 = __webpack_require__(0);
var LoggerConfigurationBuilder = /** @class */ (function () {
    function LoggerConfigurationBuilder(initConfiguration) {
        this.configuration = tslib_1.__assign({}, this.defaultConfiguration(), initConfiguration);
    }
    LoggerConfigurationBuilder.prototype.defaultConfiguration = function () {
        return {
            WriteMessageHandlers: [],
            DefaultLogLevel: {
                LogLevel: simplr_logger_1.LogLevel.Warning,
                LogLevelIsBitMask: false
            },
            Prefix: undefined
        };
    };
    /**
     * Override configuration with new configuration object.
     *
     * @param configuration Partial configuration object.
     */
    LoggerConfigurationBuilder.prototype.Override = function (configuration) {
        this.configuration = tslib_1.__assign({}, this.configuration, configuration);
        return this;
    };
    /**
     * Add write message handler.
     *
     * @param handler Write message handler.
     * @param defaultLogLevel Default log level only for this handler.
     */
    LoggerConfigurationBuilder.prototype.AddWriteMessageHandler = function (handler, defaultLogLevel) {
        this.AddWriteMessageHandlers([handler], defaultLogLevel);
        return this;
    };
    /**
     * Add a list of write message handlers.
     *
     * @param handlers Write message handlers list.
     * @param defaultLogLevel Default log level only for this list of handler.
     */
    LoggerConfigurationBuilder.prototype.AddWriteMessageHandlers = function (handlers, defaultLogLevel) {
        if (defaultLogLevel != null) {
            var _a = simplr_logger_1.LoggerHelpers.ResolveLogLevel(defaultLogLevel), isBitMask_1 = _a.isBitMask, value_1 = _a.value;
            handlers = handlers.map(function (handler) {
                if (handler.LogLevel == null) {
                    handler.LogLevel = value_1;
                    handler.LogLevelIsBitMask = isBitMask_1;
                }
                return handler;
            });
        }
        this.configuration.WriteMessageHandlers = this.configuration.WriteMessageHandlers.concat(handlers);
        return this;
    };
    /**
     * Set logger default log level.
     *
     * @param logLevel LogLevel value or custom list of LogLevels.
     */
    LoggerConfigurationBuilder.prototype.SetDefaultLogLevel = function (logLevel) {
        var _a = simplr_logger_1.LoggerHelpers.ResolveLogLevel(logLevel), isBitMask = _a.isBitMask, value = _a.value;
        this.configuration.DefaultLogLevel = {
            LogLevel: value,
            LogLevelIsBitMask: isBitMask
        };
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
        var _this = this;
        var writeMessageHandlers;
        if (this.configuration.WriteMessageHandlers.length === 0) {
            this.AddWriteMessageHandler(tslib_1.__assign({ Handler: new simplr_logger_1.ConsoleMessageHandler() }, this.configuration.DefaultLogLevel));
            writeMessageHandlers = this.configuration.WriteMessageHandlers;
        }
        else {
            writeMessageHandlers = this.configuration.WriteMessageHandlers.map(function (handler) {
                if (handler.LogLevel == null) {
                    handler = tslib_1.__assign({ Handler: handler.Handler }, _this.configuration.DefaultLogLevel);
                }
                else if (handler.LogLevelIsBitMask == null) {
                    handler.LogLevelIsBitMask = false;
                }
                return handler;
            });
        }
        return {
            WriteMessageHandlers: writeMessageHandlers,
            DefaultLogLevel: this.configuration.DefaultLogLevel,
            Prefix: this.configuration.Prefix
        };
    };
    return LoggerConfigurationBuilder;
}());
exports.LoggerConfigurationBuilder = LoggerConfigurationBuilder;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var simplr_logger_1 = __webpack_require__(0);
var LoggerRuntimeConfigurationBuilder = /** @class */ (function () {
    function LoggerRuntimeConfigurationBuilder(Configuration) {
        if (Configuration === void 0) { Configuration = new simplr_logger_1.LoggerConfigurationBuilder().Build(); }
        this.Configuration = Configuration;
    }
    /**
     * Update existing logger configuration.
     *
     * @param updater Updater handler which return new configuration.
     * @param setInitialConfigurationFromCurrent [default=true]
     * @param setInitialConfigurationFromCurrent Set builder initial configuration from the current logger configuration.
     */
    LoggerRuntimeConfigurationBuilder.prototype.UpdateConfiguration = function (updater, setInitialConfigurationFromCurrent) {
        if (setInitialConfigurationFromCurrent === void 0) { setInitialConfigurationFromCurrent = true; }
        this.Configuration = updater(new simplr_logger_1.LoggerConfigurationBuilder(setInitialConfigurationFromCurrent ? this.Configuration : undefined));
        return this;
    };
    return LoggerRuntimeConfigurationBuilder;
}());
exports.LoggerRuntimeConfigurationBuilder = LoggerRuntimeConfigurationBuilder;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var simplr_logger_1 = __webpack_require__(0);
var LoggerBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(LoggerBuilder, _super);
    function LoggerBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Writes a log entries with specified log level.
         *
         * @param level Entries will be written on this level.
         * @param messages Messages to be written.
         */
        _this.Log = function (level) {
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
        _this.Debug = function () {
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
        _this.Info = function () {
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
        _this.Warn = function () {
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
        _this.Error = function () {
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
        _this.Critical = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            return _this.log.apply(_this, [simplr_logger_1.LogLevel.Critical].concat(messages));
        };
        /**
         * Write a log entries with trace log level.
         *
         * @param messages Messages to be written.
         */
        _this.Trace = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            return _this.log.apply(_this, [simplr_logger_1.LogLevel.Trace].concat(messages));
        };
        return _this;
    }
    LoggerBuilder.prototype.log = function (level) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        var timestamp = Date.now();
        if (this.Configuration.Prefix) {
            messages = [this.Configuration.Prefix].concat(messages);
        }
        for (var _a = 0, _b = this.Configuration.WriteMessageHandlers; _a < _b.length; _a++) {
            var handlerInstance = _b[_a];
            if (simplr_logger_1.LoggerHelpers.IsLogLevelEnabled(handlerInstance.LogLevel, handlerInstance.LogLevelIsBitMask, level)) {
                handlerInstance.Handler.HandleMessage(level, timestamp, messages);
            }
        }
        return timestamp;
    };
    return LoggerBuilder;
}(simplr_logger_1.LoggerRuntimeConfigurationBuilder));
exports.LoggerBuilder = LoggerBuilder;


/***/ })
/******/ ]);
});