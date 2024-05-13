console.log('Ejercicio 13: Numeros de 1 a N con While');

let N = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${N}`);

let i = 1;
let numeros = [];

while(N >= i){
    numeros.push(i);
    i++;
}

console.log(`>> ${numeros}`);