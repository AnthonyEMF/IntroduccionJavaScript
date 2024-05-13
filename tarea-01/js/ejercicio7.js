console.log('Verificacion de par o impar');

const entrada = prompt('Ingresar un numero');
const numero = parseInt(entrada);

if(numero % 2 === 0){
    console.log(`El numero ${numero} es par`);
}else{
    console.log(`El numero ${numero} es impar`);
}