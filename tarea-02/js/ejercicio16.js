console.log('Ejercicio 16: Tabla de un numero con While');

let numero = parseInt(prompt('Ingresar numero:'));
let i = 1;

console.log(`Numero ingresado: ${numero}`);

while(i <= 12){
    console.log(`${numero} x ${i} = ${numero*i}`);
    i++;
}