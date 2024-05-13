console.log('Ejercicio 8: Determinar si un numero es divisible entre 5');

let numero = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${numero}`);

if(numero % 5 === 0){
    console.log(`>> El numero ${numero} SI es divisible entre 5`);
}else{
    console.log(`>> El numero ${numero} NO es divisible entre 5`);
}