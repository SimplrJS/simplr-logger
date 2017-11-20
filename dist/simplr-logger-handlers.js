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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("simplr-logger");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var simplr_logger_1 = __webpack_require__(0);
exports.ConsoleMessageHandler = simplr_logger_1.ConsoleMessageHandler;
var file_message_handler_1 = __webpack_require__(4);
exports.FileMessageHandler = file_message_handler_1.FileMessageHandler;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(5);
var simplr_logger_1 = __webpack_require__(0);
var FileMessageHandler = /** @class */ (function (_super) {
    tslib_1.__extends(FileMessageHandler, _super);
    function FileMessageHandler(filePathName, isServerSide) {
        var _this = _super.call(this) || this;
        _this.isServerSide = isServerSide;
        _this.handleMessageStackCount = 4;
        if (_this.isServerSide == null) {
            try {
                // tslint:disable-next-line:no-require-imports no-unused-expression
                __webpack_require__(6);
                _this.isServerSide = true;
            }
            catch (_a) {
                _this.isServerSide = false;
            }
        }
        if (_this.isServerSide) {
            // tslint:disable-next-line:no-require-imports
            var normalize = __webpack_require__(1).normalize;
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
        if (level === simplr_logger_1.LogLevel.Trace) {
            var err = new Error();
            var stack = String(err.stack);
            err = undefined;
            var stackString = "\n" + stack.split("\n").slice(this.handleMessageStackCount, stack.length).join("\n");
            formattedMessages.push(stackString);
        }
        var datePrefix = "[" + new Date(timestamp).toLocaleString() + "]";
        writeStream.write(datePrefix + " " + simplr_logger_1.LoggerHelpers.GetLogLevelShortString(level) + ": " + formattedMessages.join(" ") + this.EOL);
    };
    FileMessageHandler.prototype.getWriteStream = function () {
        var _this = this;
        if (this.writeStream != null) {
            return this.writeStream;
        }
        // tslint:disable-next-line:no-require-imports
        var fs = __webpack_require__(2);
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
            var EOL = __webpack_require__(7).EOL;
            return EOL;
        },
        enumerable: true,
        configurable: true
    });
    FileMessageHandler.prototype.ensureDirectory = function () {
        // tslint:disable-next-line:no-require-imports
        var path = __webpack_require__(1);
        // tslint:disable-next-line:no-require-imports
        var fs = __webpack_require__(2);
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
}(simplr_logger_1.MessageHandlerBase));
exports.FileMessageHandler = FileMessageHandler;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })
/******/ ]);
});