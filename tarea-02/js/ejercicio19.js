console.log('Ejercicio 19: Determinar si un numero es perfecto o no');

let numero = parseInt(prompt('Ingresar numero:'));
console.log(`Numero ingresado: ${numero}`);
let divisores = 0;

for(let i=1;i<=numero/2;i++){
    if(numero % i === 0){
        divisores+=i;
    }
}

if(divisores === numero){
    console.log('>> El numero SI es perfecto');
}else{
    console.log('>> El numero NO es perfecto');
}