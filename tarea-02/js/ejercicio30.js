console.log('Ejercicio 30: Funcion que devuelve el numero menor de un arreglo');

let input = prompt('Ingresar numeros (separados por coma):');
let arreglo = input.split(',');
let arregloNumeros = arreglo.map(elemento => parseFloat(elemento.trim()));

function devolverMenor(array){
    let menor = array[0];

    for(let i=0; i < array.length; i++){
        if(Math.abs(array[i]) < Math.abs(menor)){
            menor = array[i];
        }
    }

    if(menor >= 0){
        return menor;
    }else{
        return Math.abs(menor);
    }
}

const menor = devolverMenor(arregloNumeros);
console.log('Arreglo introducido:', arregloNumeros);
console.log(`Numero menor: ${menor}`);