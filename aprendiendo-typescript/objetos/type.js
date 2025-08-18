"use strict";
(function () {
    var flash = {
        name: "Barry Molina",
        age: 20,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Otro nombre',
        age: 60,
        powers: ["super fuerza"],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName);
})();
//# sourceMappingURL=type.js.map