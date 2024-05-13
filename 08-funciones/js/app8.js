// Funcion Normal
const aprendiendo = function(lenguaje, tema) {
    console.log(`Aprendiendo ${lenguaje} y ${tema}`);
}
aprendiendo('JavaScript', 'Funciones');

// Funcion Flecha
const aprendiendo2 = (lenguaje, tema) => `Aprendiendo ${lenguaje} y ${tema}`;
console.log(aprendiendo2('JavaScript', 'Funciones'));

const numero = (value) => console.log(Math.pow(value, 2));
numero(3);