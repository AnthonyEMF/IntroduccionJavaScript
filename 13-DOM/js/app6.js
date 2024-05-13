// Mostrar y modificar texto del HTML
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado); // Se obtiene el elemento h1 en el contenedor hero

console.log(encabezado.innerText); // Devuelve el texto en un nodo con todos sus descendientes
console.log(encabezado.textContent); // Devuelve el texto visible contenido en un elemento
console.log(encabezado.innerHTML); // Devuelve todo el contenido HTML

// Mejor forma de usar
const encabezadoContenido = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezadoContenido);

// Modificar el texto de un contenido
document.querySelector('.contenido-hero h1').textContent = 'Nuevo Titulo, para la pagina web';

// Cambiar imagen de un contenido
const imagen = document.querySelector('.card img');
imagen.src = 'https://www.elheraldo.hn/binrepository/768x576/0c0/768d432/none/45933/JJNQ/joh-testimonio_6909821_20240305120837.jpg';