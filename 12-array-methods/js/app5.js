// Funcion .find()
// Devuelve un objeto con la condicion establecida

const planilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 18000},
    {nombre: 'Marco Rodriguez', sueldoBase: 13000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Tony Hernandez', sueldoBase: 20000},
    {nombre: 'Tony Hernandez', sueldoBase: 21000},
];

let resultado;

// Devuelve el objeto con la condicion coincidiente
resultado = planilla.find(empleado => empleado.nombre === 'Tony Hernandez');
console.log(resultado);