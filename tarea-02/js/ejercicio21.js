console.log('Ejercicio 21: Funcion de numero entero');

let numero = parseFloat(prompt('Ingresar numero:'));

function determinarEntero(num){
    if(Number.isInteger(num)){
        console.log('>> El numero ingresado SI es un entero');
    }else{
        console.log('>> El numero ingresado NO es un entero');
    }
}

console.log(`Numero ingresado: ${numero}`);
determinarEntero(numero);