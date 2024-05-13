// Modificar estilos del HTML

const encabezado = document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundColor = 'red'; // Modificar el color de fondo
encabezado.style.fontFamily = 'Arial'; // Modificar la fuente
encabezado.style.textTransform = 'uppercase'; // Pasar texto a mayusculas

// Agregar una nueva clase a un contenedor
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-nueva-clase'); // agregar dos clases

// Remover una clase
card.classList.remove('card');
console.log(card.classList);