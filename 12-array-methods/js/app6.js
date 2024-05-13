// Funcion .every()
// Se utiliza para verificar si todos los elementos cumplen con una condicion devolviendo un booleano

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

// Verifica si todos los sueldos son mayores a 12000
resultado = planilla.every(empleado => empleado.sueldoBase > 12000);
console.log(resultado);