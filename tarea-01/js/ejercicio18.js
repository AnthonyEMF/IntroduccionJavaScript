console.log('Tanques de agua');
console.log('--------------------------------------------------------');
let lts1 = parseFloat(prompt('Ingrese la capacidad en litros del tanque 1'));
let yd1 = parseFloat(prompt('Ingrese la capacidad en yardas cubicas del tanque 1'));
let lts2 = parseFloat(prompt('Ingrese la capacidad en litros del tanque 2'));
let yd2 = parseFloat(prompt('Ingrese la capacidad en yardas cubicas del tanque 2'));

let metrosl1 = lts1/1000;
let metrosy1 = yd1*(27*0.0283);
let metrosl2 = lts2/1000;
let metrosy2 = yd2*(27*0.0283);

let tanque1 = metrosl1 + metrosy1;
let tanque2 = metrosl2 + metrosy2;
let total = tanque1 + tanque2;

let domestico = total*(75/100);
let domesticopies = domestico*35.315;
let domestredond = domesticopies.toFixed(2);

let riego = total*(25/100);
let riegopies = riego*35.315;
let riegoredond = riegopies.toFixed(2);

console.log(`Tanque 1: ${lts1} lts y ${yd1} yds, en total: ${tanque1} mts3`);
console.log(`Tanque 2: ${lts2} lts y ${yd2} yds, en total: ${tanque2} mts3`);
console.log('--------------------------------------------------------');
console.log(`Total de agua en metros cubicos: ${total} mts3`);
console.log('--------------------------------------------------------');
console.log('Agua dedicada al consumo domestico:');
console.log(`${domestico} mts3 o ${domestredond} ft3`);
console.log('Agua dedicada al riego:');
console.log(`${riego} mts3 o ${riegoredond} ft3`);