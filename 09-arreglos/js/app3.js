const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Agregar valores al arreglo
meses[6] = 'Julio'; // por indice
meses.push('Julio'); // .push al final
meses.unshift('Enero'); // .unshift al principio

console.log(meses);

const carrito = [];

const producto = {
    nombre: 'Roblox',
    precio: 10,
    cantidad: 1
}

const producto2 = {
    nombre: 'FC EA',
    precio: 60,
    cantidad: 1
}

const producto3 = {
    nombre: 'Sobre FC',
    precio: 90,
    cantidad: 1
}

carrito.push(producto, producto2);
//carrito.push(producto2);
carrito.unshift(producto3);

console.log(carrito);