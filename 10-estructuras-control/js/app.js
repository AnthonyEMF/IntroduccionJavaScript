// Condiciones if
const puntaje = 10;

if(puntaje == 100){ // igual que
    console.log('Si es igual');
}else{
    console.log('No es igual');
}

const puntaje2 = '10';

// Tipo de dato
console.log(typeof(puntaje)); // numerico
console.log(typeof(puntaje2)); // string

if(puntaje != 100){ // no es igual que
    console.log('No es igual');
}

// Flexible
if(puntaje2 == 10){
    console.log('Puntaje2 es igual a 10');
}
if(puntaje != puntaje2){
    console.log('Puntaje y Puntaje2 son diferentes');
}

// Estricto
if(puntaje2 === 10){
    console.log('Puntaje2 es igual a 10');
}
if(puntaje !== puntaje2){
    console.log('Puntaje y Puntaje2 son diferentes');
}