const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};

// Modificar los valores del objeto
producto.precio = 4500;
producto['nombre'] = 'Moto';

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto['modelo']);