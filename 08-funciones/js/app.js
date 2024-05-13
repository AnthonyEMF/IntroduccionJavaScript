// Declaracion de Funcion (function declaration)
sumar();

function sumar() {
    console.log(2+2);
}

// Expresion de funcion (function expression) Hoisting
sumar2();

const sumar2 = function() {
    console.log(3+3);
}

