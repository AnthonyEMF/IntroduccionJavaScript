// Ciclo forEach
// Sirve para recorrer los elementos de un arreglo u objeto y ejecutar una funcion por cada elemento

// Ejemplo 1
const pendientes = [
    'Tarea',
    'Comer',
    'Ir con la novia',
    'Estudiar Programacion'
];

// Funcion flecha (Forma breve)
pendientes.forEach(pendiente => console.log(pendiente));

// forEach con indice
pendientes.forEach((pendiente, n) => {
    console.log(`Pendiente No. ${n+1}: ${pendiente}`);
})

console.log('-------------------------------------');

// Ejemplo 2
const carrito = [
    {nombre: 'Semitas', precio: 28},
    {nombre: 'Cafe', precio: 130},
    {nombre: 'Leche', precio: 35}
];

carrito.forEach((producto, i) =>{
    console.log(`Producto No. ${i+1}: ${producto.nombre} a L ${producto.precio}`);
});

console.log('-------------------------------------');

const nuevoCarrito = carrito.map(({nombre, precio}) => {
    return `${nombre} - ${precio}`;
});

console.log(nuevoCarrito);