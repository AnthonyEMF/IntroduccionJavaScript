// Eventos con el cursor del mouse
const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => { // Presionar y soltar
    console.log('Click en nav');
});

nav.addEventListener('mouseenter', () => { // Pasar el cursor
    console.log('Entrando en la navegacion');
    nav.style.backgroundColor = 'red';
});

nav.addEventListener('mouseout', () => { // Quitar el cursor
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', () => { // Presionar
    console.log('Mouse down nav');
});

nav.addEventListener('mouseup', () => { // Soltar
    console.log('Mouse up nav');
});

nav.addEventListener('dblclick', () => { // Doble click
    console.log('Doble click en nav');
})