// Object literal

const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};

// Object Constructor

function Producto(nombreParm, precioParm){
    this.nombre = nombreParm;
    this.precio = precioParm;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 27"', 7000);

console.log(producto);
console.log(producto2);