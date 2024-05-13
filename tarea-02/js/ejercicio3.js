console.log('Ejercicio 3: Numeros divisibles entre dos');

let numero = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${numero}`);

if(numero % 2 === 0){
    console.log('>> Su numero SI es divisible entre dos');
}else{
    console.log('>> Su numero NO es divisible entre dos');
}