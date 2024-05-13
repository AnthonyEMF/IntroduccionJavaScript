// Ciclo For
for(let i=0; i<10; i++) { // Se cumple 10 veces
    console.log(`Numero ${i}`);
}

for(let i=1; i<=20; i++) { // Se cumple 20 veces
    if(i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);        
    }else{
        console.log(`El numero ${i} es IMPAR`);       
    }
}

// Arreglo Carrito
const carrito = [
    // Objetos del arreglo
    {nombre: 'Semitas', precio: 28},
    {nombre: 'Cafe', precio: 130},
    {nombre: 'Leche', precio: 35}
];

for(let i=0; i < carrito.length; i++){ // Recorre todo el arreglo
    console.log(`Producto: ${carrito[i].nombre} Precio: L${carrito[i].precio}`);
}