// Mostrar y ocultar el footer
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//btnFlotante.addEventListener('click', () => {
//    console.log('Click en btn flotante');
//});

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    //console.log('Click en btn flotante');

    // Cambios con el boton y el footer
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar';
    }
}