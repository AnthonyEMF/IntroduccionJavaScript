console.log('Ejercicio 15: Numeros de N a 1 con While');

let N = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${N}`);

let i = 1;
let numeros = [];

while(N >= i){
    numeros.push(N);
    N--;
}

console.log(`>> ${numeros}`);