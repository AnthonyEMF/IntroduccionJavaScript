// Operador Switch
const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'efectivo': 
        pagarEfectivo();
        break;
    case 'tarjeta' :
        console.log('No hay sistema');
        break;
    default:
        console.log('No ha seleccionado un metodo de pago');
        break;
}

function pagarEfectivo() {
    console.log('Pagando en efectivo...');
}