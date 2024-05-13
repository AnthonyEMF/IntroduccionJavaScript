console.log('Ejercicio 1: Numero Mayor');

let n1 = parseInt(prompt('Ingrese el primer numero:'));
let n2 = parseInt(prompt('Ingrese el segundo numero:'));

if(n1 > n2){
    console.log(`>> El numero ${n1} es mayor que el numero ${n2}`);
}else if(n1 === n2){
    console.log(`>> Los dos numeros ingresados son iguales`);
}else{
    console.log(`>> El numero ${n2} es mayor que el numero ${n1}`);
}