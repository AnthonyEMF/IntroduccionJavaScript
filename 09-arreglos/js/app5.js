// Eliminar elementos de un arreglo
let carrito = [];

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

carrito = [...carrito, producto];
carrito = [...carrito, producto2];
carrito = [producto3, ...carrito];

// Eliminar elemento de un arreglo
carrito.shift(); // Primer elemento
carrito.pop(); // Ultimo elemento

// Primer numero posicion inical, Segundo numero cuantos elementos eliminar
carrito.splice(1, 2);

console.log(carrito);