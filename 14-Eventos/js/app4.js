// Validacion del formulario de busqueda
const formulario = document.querySelector('#formulario');

const validarFormulario = (e) => {
    // SPA Paginas que no se recargan
    e.preventDefault();
    //console.log('Buscando...');

    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.method);
    //console.log(e.target.action);
    console.log(e.target['busqueda'].value);

    if(e.target['busqueda'].value === ''){
        alert('Datos de busqueda no validos');
    }else{
        alert('Enviando peticion de busqueda');
    }
}

formulario.addEventListener('submit', validarFormulario);