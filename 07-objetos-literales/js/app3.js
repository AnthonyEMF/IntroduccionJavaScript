const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};

// Agregar propiedades (propiedad: color, valor: rojo)
producto.color = 'Rojo';

// Eliminar propiedades
delete producto.precio;

console.log(producto);