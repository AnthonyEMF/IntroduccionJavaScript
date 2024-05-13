console.log('Calculo de promedio');

const n1 = parseInt(prompt('Ingresar primer nota'));
const n2 = parseInt(prompt('Ingresar segunda nota'));
const n3 = parseInt(prompt('Ingresar tercer nota'));

const prom = (n1 + n2 + n3) / 3;
const redondeado = prom.toFixed(2);

console.log(`Nota 1: ${n1}`);
console.log(`Nota 2: ${n2}`);
console.log(`Nota 3: ${n3}`);
console.log(`Promedio: ${redondeado}`);