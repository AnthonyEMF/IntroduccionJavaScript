// Seleccionar la propiedad de un objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 24
}
// propiedad edad
const {edad} = persona;
console.log(edad);

// Seleccionar elementos de un arreglo
const numeros = [100,200,300,400,500];

const [primero, segundo] = numeros;
const [ , , tercero] = numeros;
const [uno, dos, ...resultado] = numeros;

console.log(primero, segundo, tercero);
console.log(resultado);