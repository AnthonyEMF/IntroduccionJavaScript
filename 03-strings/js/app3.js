const producto = 'Mouse DELL';
const precio = 'L 299.99';

// Concatenacion de cadenas
console.log(producto.concat(' - ').concat(precio).concat(' antes L 300.00'));

console.log(producto + ' - ' + precio + ' antes L 300.00');
console.log(producto,precio,'antes L 300.00');

// Template string o Template Literals
console.log(`El producto ${producto} tiene el precio de ${precio}`);