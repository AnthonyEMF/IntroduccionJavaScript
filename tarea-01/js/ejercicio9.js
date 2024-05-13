console.log('Celsius a Fahrenheit');

const celsius = parseInt(prompt('Ingresar grados Celsius'));

const fahrenheit = (celsius * 1.8) + 32;
const redondeado = fahrenheit.toFixed(2);

console.log(`Grados Celsius: ${celsius} °C`);
console.log(`Grados Fahrenheit: ${redondeado} °F`);