console.log('Atletas');

let min1 = parseInt(prompt('Minutos del atleta 1'));
let seg1 = parseInt(prompt('Segundos del atleta 1'));
let min2 = parseInt(prompt('Minutos del atleta 2'));
let seg2 = parseInt(prompt('Segundos del atleta 2'));

let totalseg1 = seg1 + (min1*60);
let totalseg2 = seg2 + (min2*60);
let totalsegundos = totalseg1 + totalseg2;

let totalmin1 = totalseg1 / 60;
let totalmin2 = totalseg2 / 60;
let totalminutos = totalmin1 + totalmin2;

let totalhor1 = totalmin1 / 60;
let totalhor2 = totalmin2 / 60;
let totalhoras = totalhor1 + totalhor2;

redondmin1 = totalmin1.toFixed(2);
redondmin2 = totalmin2.toFixed(2);
redondminutos = totalminutos.toFixed(2);
redondhor1 = totalhor1.toFixed(2);
redondhor2 = totalhor2.toFixed(2);
redondhoras = totalhoras.toFixed(2);

console.log(`Atleta 1: ${min1} minutos y ${seg1} segundos`);
console.log(`Atleta 2: ${min2} minutos y ${seg2} segundos`);
console.log('--------------------------------------');
console.log('Total Atleta 1:');
console.log(`Total segundos: ${totalseg1}`);
console.log(`Total minutos: ${redondmin1}`);
console.log(`Total horas: ${redondhor1}`);
console.log('--------------------------------------');
console.log('Total Atleta 2:');
console.log(`Total segundos: ${totalseg2}`);
console.log(`Total minutos: ${redondmin2}`);
console.log(`Total horas: ${redondhor2}`);
console.log('--------------------------------------');
console.log('Total por ambos atletas:');
console.log(`Total segundos: ${totalsegundos}`);
console.log(`Total minutos: ${redondminutos}`);
console.log(`Total horas: ${redondhoras}`);