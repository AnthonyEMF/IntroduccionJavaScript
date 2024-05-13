// Modificar un enlace
const enlace = document.querySelector('a');
enlace.textContent = 'Nuevo Enlace';
enlace.remove();
enlace.href = 'https://friv.com';
//enlace.target = '_blanck'; // Abrir enlace en nueva pestaña
//enlace.href = '#';

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children); // Selecciona el elemento hijo de 'navegacion'

// Cambiar de posicion
navegacion.insertBefore(enlace, navegacion.children[2]);

// Agregar nueva clase
enlace.classList.add('alguna-clase');

// Ejecutar una funcion
function miFuncion() {
    console.log('Hiciste click!!!');
}
enlace.onclick = miFuncion; // en el evento de click se ejecuta la funcion

// Crear una card
const parrafo1 = document.createElement('p'); // crear una etiqueta <p>
parrafo1.textContent = 'Concierto'; // Texto de la etiqueta creada
parrafo1.classList.add('categoria', 'concierto'); // Agregar clases a la etiqueta creada

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de los Bukis';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$ 800.00';
parrafo3.classList.add('precio');

const info = document.createElement('div'); // crear elemento <div>
info.classList.add('info');
// Insercion de los elementos creados en el <div> creado
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img'); // crear elemento de imagen
imagen.src = 'https://www.paradigma.live/wp-content/uploads/2022/02/maxresdefault.jpg';
imagen.alt = 'Texto de la Banda'; // texto alterno

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[0]);