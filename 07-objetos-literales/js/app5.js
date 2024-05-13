// Objetos anidados
const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true,
    informacion: {
        medidas: {
            peso: '20 lbs',
            dimensiones: '1.5 mts'
        },
        fabricacion: {
            pais: 'China'
        }
    }
};

//console.log(producto);
//console.log(producto.informacion);
//console.log(producto.informacion.medidas);
console.log(producto.informacion.medidas.peso);