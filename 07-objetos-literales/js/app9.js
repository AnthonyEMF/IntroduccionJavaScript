// .assign
const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};

const medidas = {
    peso: '20 lbs',
    dimensiones: '1.5 mt'
}

console.log(producto);
console.log(medidas);

// copiar valores de objetos
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas};
console.log(resultado2);

const resultado3 = {...producto, medidas};
console.log(resultado3);