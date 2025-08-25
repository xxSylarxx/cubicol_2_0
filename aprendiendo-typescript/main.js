"use strict";
(() => {
    let flash = {
        name: "Barry Molina",
        age: 20,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Otro nombre',
        age: 60,
        powers: ["super fuerza"],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName);
})();
//# sourceMappingURL=main.js.map