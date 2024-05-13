console.log('Ejercicio 22: Array');

let arreglo = [1,2,3,4,5,6];
console.log(`>> Arreglo: ${arreglo}`);

console.log('A. Iterar con While');
let i = 0;
while(i < arreglo.length){
    console.log(arreglo[i]);
    i++;
}

console.log('B. Iterar con For');
for(let i=0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

console.log('C. Iterar con ForEach');
arreglo.forEach(elemento => {
    console.log(elemento);
});

console.log('D. Mostrar sumando uno a cada elemento');
let sumaUno = arreglo.map(elemento => elemento + 1);
console.log(sumaUno);

console.log('E. Copia del arreglo con los elementos incrementados en uno');
let copia = [...arreglo].map(elemento => elemento + 1);
console.log(copia);

console.log('F. Calcular el promedio');
let total = arreglo.reduce((total, elemento) => total + elemento, 0);
let promedio = total / arreglo.length;
console.log(`El promedio es ${promedio}`);