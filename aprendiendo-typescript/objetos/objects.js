"use strict";
(function () {
    var flash = {
        name: "Barry Molina",
        age: 20,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Otro nombre',
        age: 60,
        powers: ["super fuerza"],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName);
})();
//# sourceMappingURL=objects.js.map