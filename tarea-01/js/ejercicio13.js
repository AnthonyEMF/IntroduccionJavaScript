console.log('Cambio de moneda');

const lempiras = parseFloat(prompt('Ingresar lempiras'));

const dolares = lempiras * 0.0405;
const redond = dolares.toFixed(2);

console.log(`>> L${lempiras} equivale a: $${redond}`);