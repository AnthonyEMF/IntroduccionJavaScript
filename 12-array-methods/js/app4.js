// Funcion .filter()
// Se utiliza para devolver un arreglo con la condicion establecida 

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

resultado = planilla.filter(empleado => empleado.sueldoBase >= 15000);
console.log(resultado); // Devuelve los empleados con sueldo mayor o igual 15000

console.log('-------------------------------------');

resultado = planilla.filter(empleado => empleado.sueldoBase < 15000);
console.log(resultado); // Devuelve los empleados con sueldo menor a 15000

console.log('-------------------------------------');

resultado = planilla.filter(empleado => empleado.nombre === 'Tony Hernandez');
console.log(resultado); // Devuelve los elementos con nombre coincidiente

console.log('-------------------------------------');

resultado = planilla.filter(empleado => empleado.nombre !== 'Tony Hernandez');
console.log(resultado); // Devuelve todos los elementos exceptuando los coincidientes

console.log('-------------------------------------');

resultado = planilla.filter(empleado =>
    empleado.sueldoBase >= 15000 && empleado.sueldoBase <= 20000);
console.log(resultado); // Devuelve los empleados con sueldo entre 15000 y 20000