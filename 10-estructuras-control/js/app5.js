// Condicion if de forma breve
const autenticado = true;
const puedePagar = true;

// Forma estandar
if(autenticado){
    console.log('Usuario autenticado');
}else{
    console.log('Usuario no autenticado');
}

// Forma resumida
console.log(autenticado ? 'Usuario autenticado' : 'Usuario no autenticado');

// Forma resumida
console.log(autenticado && puedePagar ? 'Usuario autenticado, puede pagar' : 'Usuario no autenticado, no puede pagar');