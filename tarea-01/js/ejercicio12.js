console.log('Calculadora simple');

console.log('Menu:');
console.log('1. Suma');
console.log('2. Resta');
console.log('3. Multiplicacion');
console.log('4. Division');

let opcion = parseInt(prompt('Ingresar opcion'));
let num1, num2, res;

switch(opcion){
    case 1:
        num1 = parseInt(prompt('Ingresar primer numero'));
        num2 = parseInt(prompt('Ingresar segundo numero'));
        res = num1 + num2;
        console.log(`>> Suma: ${num1} + ${num2} = ${res}`);
        break;
    case 2:
        num1 = parseInt(prompt('Ingresar primer numero'));
        num2 = parseInt(prompt('Ingresar segundo numero'));
        res = num1 - num2;
        console.log(`>> Resta: ${num1} - ${num2} = ${res}`);
        break;
    case 3:
        num1 = parseInt(prompt('Ingresar primer numero'));
        num2 = parseInt(prompt('Ingresar segundo numero'));
        res = num1 * num2;
        console.log(`>> Multiplicacion: ${num1} x ${num2} = ${res}`);
        break;
    case 4:
        num1 = parseInt(prompt('Ingresar primer numero'));
        num2 = parseInt(prompt('Ingresar segundo numero'));
        res = num1 / num2;
        console.log(`>> Division: ${num1} / ${num2} = ${res}`);
        break;
    default:
        console.log('Opcion no valida');
        break;
}