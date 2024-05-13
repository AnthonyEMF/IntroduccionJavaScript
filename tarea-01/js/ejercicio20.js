console.log('El combustible');

let km = parseFloat(prompt('Ingresar kilometros recorridos'));
let lt = parseFloat(prompt('Ingresar litros de combustible consumidos'));

let total = lt/km;
let redond = total.toFixed(2);

console.log(`Kilometros recorridos: ${km} km.`);
console.log(`Combustible consumido: ${lt} lts.`);
console.log(`>> Consumo de combustible por kilometro: ${redond} lts/km`);