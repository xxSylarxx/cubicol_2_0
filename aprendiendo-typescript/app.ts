// Funciones Básicas
function sumar( a: number, b: number ): number {
  return a + b;
}

const contar = ( heroes:string[]) => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman(llamar: boolean): void {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman(true);

// Rest?
const unirheroes = ( ...personas:string[]) => {
  return personas.join('');
}


// Tipo funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:[] )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada
