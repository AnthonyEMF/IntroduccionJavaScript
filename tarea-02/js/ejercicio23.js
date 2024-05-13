console.log('Ejercicio 23: Array vacio con numeros aleatorios');

let arreglo = [];

for(let i=0; i < 20; i++){
    let numAleatorio = Math.floor(Math.random() * 100);
    arreglo.push(numAleatorio);
}

console.log(`>> Arreglo: ${arreglo}`);