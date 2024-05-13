console.log('Ejercicio 11: Determinar si la palabra empieza con mayuscula');

let palabra = prompt('Ingresar palabra:');
console.log(`Palabra ingresada: ${palabra}`);

if(palabra[0] === palabra[0].toUpperCase()){
    console.log(`>> La palabra "${palabra}" empieza con mayuscula`);
}else{
    console.log(`>> La palabra "${palabra}" empieza con minuscula`);
}