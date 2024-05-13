// Variables Js
//1. por medio de var => no usar
//2. por medio de let
//3. por medio de const

let y = 5;

function ejemplo(){
    let x = 10;

    if(true){
        let x = 20;
        console.log(x);
    }

    console.log(x);
}

//ejemplo();

// Reasignar valor a la variable
let mascota = 'Firulais';

mascota = 10;
mascota = 'Cafe';
mascota = null;

// Declarar la variable sin inicializar
let edad;
edad = 5;