// Objetos
const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};
console.log(producto);

// Retorna un arreglo con los nombres de las propiedades del objeto (izquierda)
console.log(Object.keys(producto));

// Retorna un arreglo con los nombres de los valores del objeto (derecha)
console.log(Object.values(producto));

// Retornar todo
console.log(Object.entries(producto));
console.table(Object.entries(producto)); // en forma de tabla