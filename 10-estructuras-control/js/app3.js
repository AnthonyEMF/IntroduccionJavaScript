// Ejercicio de ejemplo
const dinero = 400;
const totalPagar = 600;
const tarjeta = false;
const cheque = true;

// Mala practica
if(dinero >= totalPagar){
    console.log('Se puede realizar el cobro');
}else if(tarjeta){ // Si booleno es 'true', se ejecuta
    console.log('Se puede pagar con su tarjeta de credito');
}else if(cheque){
    console.log('Se puede pagar con cheque');
}else{
    console.log('Fondos insuficientes');
}

// Forma Elegante
const permisos = ['ADMIN', 'SALLER', 'USER'];

const usuario = {
    nombre: 'Juan Perez',
    permisos: 'USER'
}

if(permisos.includes(usuario.permisos)){ // .includes verifica si alguna de las propiedades coinciden
    console.log('Si tiene permiso: ' + usuario.permisos);
}