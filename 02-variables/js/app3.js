// Variables Js
//1. por medio de var => no usar
//2. por medio de let
//3. por medio de const

function ejemplo(){
    const x = 10;

    if(true){
        const x = 20;
        console.log(x);
    }

    console.log(x);
}

ejemplo();

// Const no se puede reasignar el valor

const fruta = 'Naranja';
fruta = 'Manzana';

//const mascota;
console.log(fruta);