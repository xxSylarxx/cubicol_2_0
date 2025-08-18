"use strict";
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(''));
    };
    var superman = fullName('Clark', 'Demo', 'Kent', 'demo1');
    console.log({ superman: superman });
})();
//# sourceMappingURL=args-rest.js.map