console.log('Ejercicio 31: Funcion que devuelve el arreglo de forma invertida');

let input = prompt('Ingresar numeros (separados por coma):');
let arreglo = input.split(',');

function invertirArreglo(arreglo){
    return arreglo.slice().reverse();
}

let arregloInvertido = invertirArreglo(arreglo);

console.log('Arreglo Original: ', arreglo);
console.log('Arreglo Invertido: ', arregloInvertido);