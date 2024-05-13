console.log('Multiplicacion y division de dos numeros');

const ent1 = prompt('Ingresar primer numero');
const ent2 = prompt('Ingresar segundo numero');

const num1 = parseInt(ent1);
const num2 = parseInt(ent2);

const mult = num1 * num2;
const div = num1 / num2;

console.log(`Primer numero: ${num1}`);
console.log(`Segundo numero: ${num2}`);
console.log(`Multiplicacion: ${mult}`);
console.log(`Division: ${div}`);