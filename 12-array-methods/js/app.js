// Funcion .includes()
// Se encarga de verificar si la variable proporcionada ya existe en un arreglo

// Ejercicio 1
const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Julio',
    'Junio'
];

const nombreMes = 'Febrero';

// Primer forma (No utilizada)
meses.forEach((mes) => {
    if(mes === nombreMes){
        console.log(`El mes de ${nombreMes} existe`);
    }
})

// Segunda forma con includes
// Si encuentra el elemento crea un valor booleano verdadero
const resultado = meses.includes(nombreMes);
console.log(resultado);

// Ej sin crear otra variable
console.log(meses.includes(nombreMes));

// Ej en una condicion
if(meses.includes(nombreMes)){
    console.log(`El mes de ${nombreMes} existe`);
}else{
    console.log(`El mes de ${nombreMes} no existe`);
}

// Ejercicio 2
const planilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 18000},
    {nombre: 'Marco Rodriguez', sueldoBase: 13000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Tony Hernandez', sueldoBase: 21000},
];
// Includes es sensible a mayusculas
// .some() se utiliza para verificar si almenos un elemento del arreglo cumple una condicion dada
const existe = planilla.some((empleado) => empleado.nombre === 'Maria Mejia');
console.log('Empleado: ', existe);

const existe2 = meses.some((mes) => mes === nombreMes);
console.log('Mes: ', existe2);