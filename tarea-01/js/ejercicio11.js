console.log('Verificacion de un numero primo');

const numero = parseInt(prompt('Ingresar numero'));
let div = 1, cont = 0;

while(div <= numero){
    if(numero % div == 0){
        cont++;
    }
    div++;
}

if(cont == 2){
    console.log(`El numero ${numero} SI es primo`);
}else{
    console.log(`El numero ${numero} NO es primo`);
}