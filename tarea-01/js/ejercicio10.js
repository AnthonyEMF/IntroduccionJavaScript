console.log('Area de un circulo');

const radio = parseInt(prompt('Ingrese el radio del circulo'));

const area = Math.PI * Math.pow(radio, 2);
const redondeado = area.toFixed(2);

console.log(`Radio: ${radio}`);
console.log(`Area: ${redondeado}`);