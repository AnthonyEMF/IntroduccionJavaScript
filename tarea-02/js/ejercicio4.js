console.log('Ejercicio 4: Contar las letras "a" de una frase');

let frase = prompt('Ingresar frase:');
let cont = 0, i = 0;

console.log(`Frase ingresada: ${frase}`);
frase = frase.toLowerCase();

while(i < frase.length){
    if(frase[i] === 'a'){
        cont++;
    }
    i++;
}

console.log(`>> Total de letras "a" en la frase: ${cont}`);