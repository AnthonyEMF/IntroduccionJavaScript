// Funcion .findIndex()
// Retorna el indice del elemento en el arreglo (0,1,2,3...)
const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Julio',
    'Junio'
];

const planilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 18000},
    {nombre: 'Marco Rodriguez', sueldoBase: 13000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Tony Hernandez', sueldoBase: 21000},
];

const nombreMes = 'Febrero';
// Primer forma (No utilizada)
meses.forEach((mes, index) => {
    if(mes === nombreMes){
        console.log(`${nombreMes} tiene el indice ${index}`);
    }
});
// Segunda forma con .findIndex()
const indice = meses.findIndex(mes => mes === nombreMes);
console.log(indice);

const indice2 = planilla.findIndex(empleado => empleado.nombre === 'Tony Hernandez');
console.log(`Empleado encontrado en el indice: ${indice2}`);