console.log('Ejercicio 2: Mayor de tres numeros');

let n1 = parseInt(prompt('Ingresar primer numero:'));
let n2 = parseInt(prompt('Ingresar segundo numero:'));
let n3 = parseInt(prompt('Ingresar tercer numero:'));

console.log(`Primer numero: ${n1}`);
console.log(`Segundo numero: ${n2}`);
console.log(`Tercer numero: ${n3}`);

console.log('----------------------------------');

if(n1 > n2 && n1 > n3){
    console.log(`>> El numero mayor es el ${n1}`);
}else if(n2 > n1 && n2 > n3){
    console.log(`>> El numero mayor es el ${n2}`);
}else{
    console.log(`>> El numero mayor es el ${n3}`);
}