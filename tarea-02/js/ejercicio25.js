console.log('Ejercicio 25: Determinar si el color introducido existe');

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
console.log(`Colores: ${colores}`);

const colorIngresado = prompt('Ingresar color:').toLowerCase();

if(colores.includes(colorIngresado)){
    console.log(`>> El color ${colorIngresado} SI existe`);
}else{
    console.log(`>> El color ${colorIngresado} NO existe`);
}