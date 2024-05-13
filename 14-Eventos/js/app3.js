// Eventos cuando se presiona una tecla y algunos comandos
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => { // Presionar tecla
    console.log('Escribiendo...');
});

busqueda.addEventListener('keyup', () => { // Soltar tecla
    console.log('Dejando de escribir...');
});

busqueda.addEventListener('blur', () => { // Salir del campo seleccionado
    console.log('Salir del campo...');
});

busqueda.addEventListener('copy', () => { // Cuando se usa Ctrl+C
    console.log('Texto Copiado');
});

busqueda.addEventListener('paste', () => { // Cuando se usa Ctrl+V
    console.log('Texto Pegado');
});

busqueda.addEventListener('cut', () => { // Cuando se usa Ctrl+X
    console.log('Texto Cortado');
});

busqueda.addEventListener('input', (e) => { // Todos los anteriores excepto blur
    console.log(e.target.value);
});