// Ciclo for ...in

const pendientes = [
    'Tarea',
    'Comer',
    'Ir con la novia',
    'Estudiar Programacion'
];

const carrito = [
    {nombre: 'Semitas', precio: 28},
    {nombre: 'Cafe', precio: 130},
    {nombre: 'Leche', precio: 35}
];

// Retorna el valor de la izquierda, por defecto el indice
for(let pendiente in pendientes){
    console.log(pendiente);
}

for(let producto in carrito[0]){
    console.log(producto);
}