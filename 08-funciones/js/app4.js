// Ejemplo con los parametros y llamamiento de funciones
function saludar(nombre='Desconocido', apellido='') {
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar();

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Juan Perez');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado correctamente: ${usuario}`);
}