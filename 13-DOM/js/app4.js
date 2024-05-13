// Selecciona el primer elemento que coincida con un selector CSS especificado
// document.querySelector()

const card = document.querySelector('.card');
console.log(card); // Selecciona el elemento con la clase 'card'

const info = document.querySelector('.premium .info');
console.log(info); // Selecciona dos elementos

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(3)');
console.log(segundoCard); // Seleccionar un segundo elemento

const formulario = document.querySelector('#formulario');
console.log(formulario); // Seleccionar el elemento por id