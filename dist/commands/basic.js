(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var commands = {};
    commands.set = function (interpreter, args) {
        var varName = args[0], value = args[1];
        if (args.length === 2) {
            interpreter.scope.define(varName, value);
            return value;
        }
        else if (args.length === 1) {
            return interpreter.scope.resolve(varName);
        }
        throw new Error('wrong # args: should be "set varName ?newValue?"');
    };
    commands.unset = function (interpreter, args) {
        var nocomplain = false;
        if (args[0] === '-nocomplain') {
            nocomplain = true;
            args.shift();
        }
        if (args.length === 0)
            throw new Error('wrong # args: should be "unset ?-nocomplain? varName ?varName ...?"');
        var returnValue = 0;
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var arg = args_1[_i];
            returnValue = interpreter.scope.undefine(arg);
        }
        return returnValue;
    };
    function Load(commandset) {
        for (var command in commands) {
            commandset.define(command, commands[command]);
        }
    }
    exports.Load = Load;
});
//# sourceMappingURL=basic.js.map