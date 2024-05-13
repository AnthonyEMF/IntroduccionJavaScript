// Opereador mayor que: >
// Opereador menor que: <
// Opereador mayor o igual que: >=
// Opereador menor o igual que: <=

const dinero = 700;
const totalPagar = 350;
const edad = 18;

if (edad >= 18) {
    if (dinero > totalPagar) {
        console.log('Proceder a realizar el pago');
    }else{
        console.log('Fondos insuficientes');
    }
}else{
    console.log('No tiene edad para realizar esta transaccion');
}