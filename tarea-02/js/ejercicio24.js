console.log('Ejercicio 24: Array vacio con N numeros aleatorios');

let N = parseInt(prompt('Ingresar cantidad de numeros a generar:'));
let arreglo = [];

for(let i=0; i < N; i++){
    let numAleatorio = Math.floor(Math.random() * 100);
    arreglo.push(numAleatorio);
}

console.log(`>> Arreglo: ${arreglo}`);