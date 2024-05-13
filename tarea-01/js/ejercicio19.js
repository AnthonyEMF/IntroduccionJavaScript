console.log('La compra');

let precio = parseFloat(prompt('Ingresar precio del producto'));
let iva = parseFloat(prompt('Ingresar iva del producto en porcentaje'));

let impuesto = precio*(iva/100);
let total = precio + impuesto;
let redondeado = total.toFixed(2);

console.log(`Precio del producto: L${precio}`);
console.log(`Porcentaje IVA: ${iva}%`);
console.log(`Impuesto: L${impuesto}`);
console.log(`El total a pagar es de: L${redondeado}`);