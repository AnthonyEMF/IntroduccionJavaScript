console.log('Unidades de medida');

let pies = parseFloat(prompt('Ingresar pies'));
let metros = parseFloat(prompt('Ingresar metros'));

let pulgadas = (pies*12) + (metros/0.0254);
let smetros = pulgadas*0.0254;
let millas = smetros/1609;
let spies = pulgadas/12;
let yardas = spies/3;

let pulredond = pulgadas.toFixed(2);
let metredond = smetros.toFixed(3);
let yarredond = yardas.toFixed(4);
let miredond = millas.toFixed(6);

console.log(`Pies ingresados: ${pies} fts.`);
console.log(`Metros ingresados: ${metros} mts.`);
console.log('------------------------------');
console.log(`Suma en pulgadas: ${pulredond} in.`);
console.log(`Suma en yardas: ${yarredond} yd.`);
console.log(`Suma en metros: ${metredond} mts.`);
console.log(`Suma en millas: ${miredond} mi.`);