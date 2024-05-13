console.log('Ejercicio 17: Suma de numeros pares entre N y M');

let N = parseInt(prompt('Ingresar primer numero (N):'));
let M = parseInt(prompt('Ingresar segundo numero (M):'));
let suma = 0;

console.log(`Intervalo ingresado: De ${N} a ${M}`);

while(N <= M){
    if(N % 2 === 0){
        suma+=N;
    }
    N++;
}

console.log(`>> Suma de los numeros pares: ${suma}`);