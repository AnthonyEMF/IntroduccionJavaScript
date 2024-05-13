// Arrays/Arreglos
const numeros = [10,20,30]; // datos numericos
console.log(numeros);
console.table(numeros);

const meses = ['Enero','Febrero','Marzo']; // datos tipo string
console.table(meses);

// Un arreglo puede almacenar distintos tipos de datos
const deTodo = [
    'Hola',
    10,
    true,
    'Juan',
    null,
    undefined,
    {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    [10,9,8,7,6,5,4,3,2,1]
];

console.log(deTodo);
console.table(deTodo);