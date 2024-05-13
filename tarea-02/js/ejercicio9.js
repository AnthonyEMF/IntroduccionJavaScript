console.log('Ejercicio 9: Determinar si el string empieza por un numero o una letra');

let string = prompt('Ingresar palabra:');

if(!isNaN(string[0])){
    console.log(`>> La cadena "${string}" empieza con un numero`);
}else{
    console.log(`>> La cadena "${string}" empieza con una letra`);
}