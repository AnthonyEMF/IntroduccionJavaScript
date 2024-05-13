// Segunda forma de agregar valoles (spread operator)
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

// Otra forma de push y unshift
carrito = [...carrito, producto];
carrito = [...carrito, producto2];
carrito = [producto3, ...carrito];

console.log(carrito);