// Activar modo estricto del lenguaje
"use strict";

const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};

// Evitar que se modifique el objeto (.freeze)
Object.freeze(producto);

//producto.disponible = true;
//delete producto.precio;

//producto.precio = 5000;

console.log(producto);
console.log(Object.isFrozen(producto));