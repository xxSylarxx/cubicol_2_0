"use strict";
(function () {
    var fullName = function (fisrtName, lastName) {
        return "".concat(fisrtName, " ").concat(lastName || 'no LastName');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
//# sourceMappingURL=args-optional.js.map