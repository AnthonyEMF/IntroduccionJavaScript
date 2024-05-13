// Selecciona TODOS los elementos con la clase o id especificado
// document.querySelectorAll()

const cards = document.querySelectorAll('.card');
console.log(cards); // todos los elementos con clase 'card'

const noExiste = document.querySelectorAll('.no-existe');
console.log(noExiste); // si no existe devuelve un arreglo vacio