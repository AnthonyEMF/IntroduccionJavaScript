console.log('Ejercicio 14: Numeros de 1 a N de 2 en 2 con While');

let N = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${N}`);

let i = 1;
let numeros = [];

while(N > i){
    numeros.push(i);
    i+=2;
}

console.log(`>> ${numeros},${N}`);