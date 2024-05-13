console.log('Area de un triangulo');

const ent1 = prompt('Ingresar base');
const ent2 = prompt('Ingresar altura');

const b = parseInt(ent1);
const h = parseInt(ent2);

const area = (b * h) / 2;

console.log(`Base: ${b}`);
console.log(`Altura: ${h}`);
console.log(`Area: ${area}`);