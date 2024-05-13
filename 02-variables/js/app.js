// Variables Js
//1. por medio de var => no usar
//2. por medio de let
//3. por medio de const

function ejemplo(){
    var x = 10;
    
    if(true){
        var x = 20;
        console.log(x);
    }

    console.log(x);
}

//ejemplo();

var persona = 'Juan';
persona = 30;
console.log(persona);

var disponible;
disponible = true;
disponible = false;

var nombre = 'Juan Perez',
    edad = 30,
    nacionalidad = 'Hondureño';

var ddd90;

// Camel Case / Joroba de Camello
var nombrePersona;

// Pascal Case
var NombrePersona;

// Snake Case
var nombre_persona;