console.log('Ejercicio 7: Determinar si un numero es par o no');

let numero = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${numero}`);

if(numero % 2 === 0){
    console.log(`>> El numero ${numero} SI es par`);
}else{
    console.log(`>> El numero ${numero} NO es par`);
}