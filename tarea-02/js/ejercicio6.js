console.log('Ejercicio 6: Divisores de un numero');

let numero = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${numero}`);

const divisores = [];

for(let i=0; i<=numero; i++){
    if(numero % i === 0){
        divisores.push(i);
    }
}

console.log(`>> Divisores: ${divisores}`);