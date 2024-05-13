console.log('Ejercicio 29: Funcion que devuelva el promedio de un arreglo');

let input = prompt('Ingresar numeros (separados por coma):');
let arreglo = input.split(',');
const arregloNumeros = arreglo.map(elemento => parseFloat(elemento.trim()));

function calcularPromedio(arreglo){
    if(arreglo.length === 0){
        return 0;
    }

    let suma = arreglo.reduce((total, elemento) => total + elemento, 0);
    let promedio = suma / arreglo.length;

    return promedio;
}

let promedio = calcularPromedio(arregloNumeros).toFixed(2);
console.log(`Numeros ingresados: ${arregloNumeros}`);
console.log(`>> Promedio: ${promedio}`);