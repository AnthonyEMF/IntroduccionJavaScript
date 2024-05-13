// Activar modo estricto del lenguaje
"use strict";

const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};

// Evitar que se modifique el objeto (.seal)
Object.seal(producto);

producto.precio = 5000;
//delete producto.precio;
//producto.imagen = 'la_mostra.jpg';

console.log(producto);
console.log(Object.isSealed(producto));