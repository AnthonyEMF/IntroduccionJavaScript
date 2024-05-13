// Funcion .reduce()
// Se utiliza para reducir los elementos de un array a un unico valor

const planilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 18000},
    {nombre: 'Marco Rodriguez', sueldoBase: 13000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Tony Hernandez', sueldoBase: 21000},
];

// Primer metodo para calcular el total a pagar
let totalPagar = 0;
planilla.forEach(empleado => totalPagar += empleado.sueldoBase);
console.log(totalPagar);

// Segundo metodo con .reduce()
let resultado = planilla.reduce((total, empleado) => total + empleado.sueldoBase, 0);
console.log(`Reduce Total: `, resultado);