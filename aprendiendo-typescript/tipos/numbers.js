"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problema');
    }
    else {
        console.log('Nos Salvamos');
    }
    avengers = Number('123AA');
    console.log({ avengers: avengers });
})();
//# sourceMappingURL=numbers.js.map