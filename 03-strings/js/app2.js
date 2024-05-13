const producto = 'Monitor 27';

console.log(producto);

// Tamaño del string
console.log(producto.length);

// Buscar un valor dentro de un string
console.log('Buscar Monitor: ' + producto.indexOf('Monitor'));
console.log('Buscar i: ' + producto.indexOf('i'));
console.log('Buscar 27: ' + producto.indexOf('27'));
console.log('Buscar espacio: ' + producto.indexOf(' '));

// Funcion includes
console.log('Buscar Monitor: ' + producto.includes('Monitor'));
console.log('Buscar Monitor: ' + producto.includes('monitor'));