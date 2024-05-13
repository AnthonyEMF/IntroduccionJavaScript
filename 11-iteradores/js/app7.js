// Ciclo for ...of

// Ejercicio 1
const carrito = [
    {nombre: 'Semitas', precio: 28},
    {nombre: 'Cafe', precio: 130},
    {nombre: 'Leche', precio: 35}
];

// Itera sobre el valor de cada elemento del arreglo
for(let producto of carrito){
    console.log(producto);
}

// Ejercicio 2
const pendientes = [
    'Tarea',
    'Comer',
    'Ir con la novia',
    'Estudiar Programacion'
];

for(let pendiente of pendientes){
    //console.log({pendiente}); // Forma de objeto
    console.log(pendiente);
}