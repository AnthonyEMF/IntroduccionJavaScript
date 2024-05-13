console.log('Ejercicio 12: Adivinar el numero del 1 al 10');

let numAleatorio = Math.floor(Math.random()*10)+1;

let intento = parseInt(prompt('Adivine el numero: '));

if(isNaN(intento) || intento < 1 || intento > 10){
    alert('Por favor introduce un valor valido de 1 a 10');
}else{
    if(intento === numAleatorio){
        alert(`Buen trabajo! la respuesta es ${numAleatorio}`);
    }else{
        alert(`Vuelve a intentarlo, la respuesta era ${numAleatorio}`);
    }
}

console.log(`Numero ingresado: ${intento}`);
console.log(`Respuesta: ${numAleatorio}`);