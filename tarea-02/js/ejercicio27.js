console.log('Ejercicio 27: Funcion que devuelve un arreglo de numeros pares');

let numeros = prompt('Ingresar numeros (separados por coma):');
let arrayNumeros = numeros.split(',');

function obtenerNumerosPares(){
    const pares = arrayNumeros.reduce((resultado, numero) => {
        if(numero % 2 === 0){
            resultado.push(numero);
        }
        return resultado;
    }, []);

    return pares;
}

let numerosPares = obtenerNumerosPares();
console.log(`Numeros ingresados: ${numeros}`);
console.log(`>> Numeros pares: ${numerosPares}`);