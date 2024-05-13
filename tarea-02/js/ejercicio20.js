console.log('Ejercicio 20: Funcion de multiplicacion');

let a = parseInt(prompt('Ingresar primer numero:'));
let b = parseInt(prompt('Ingresar segundo numero:'));

function multiply(a, b){
    return a * b
}

let res = multiply(a, b);
console.log(`>> ${a} x ${b} = ${res}`);