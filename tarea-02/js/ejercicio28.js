console.log('Ejercicio 28: Funcion que devuelve arreglo con palabras que empiezan por una vocal');

let palabras = prompt('Ingresar palabras (separadas por coma):').toLowerCase();
let arrayPalabras = palabras.split(',');

function palabrasVocal(arrayPalabras){
    const vocales = new Set(['a','e','i','o','u']);

    const palabrasConVocal = arrayPalabras.filter(palabra => vocales.has(palabra[0]));
    return palabrasConVocal;
}

const arrayVocales = palabrasVocal(arrayPalabras);
console.log(`Palabras ingresadas: ${arrayPalabras}`);
console.log(`>> Palabras que empiezan con vocal: ${arrayVocales}`);