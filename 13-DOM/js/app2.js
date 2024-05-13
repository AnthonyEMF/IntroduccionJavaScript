// Selecciona elementos del HTML por su clase
// document.getElementsByClassName()

// Encabezado
const elemento = document.getElementsByClassName('header');
// Contenedor del formulario Buscar
const elemento2 = document.getElementsByClassName('hero');
// Contenedor principal
const elemento3 = document.getElementsByClassName('contenedor');
// Si no existe devuelve un arreglo vacio
const elemento4 = document.getElementsByClassName('no-existe');

console.log(elemento4);