// Funciones que retornan un valor
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

agregarCarrito(200);
agregarCarrito(500);
agregarCarrito(1000);

const totalPagar = calcularImpuesto(total);

console.log(`Total: ${total}`);
console.log(`Total a pagar: ${totalPagar.toFixed(2)}`);