console.log('Ejercicio 5: Contar las vocales de una frase');

let frase = prompt('Ingresar frase:');
console.log(`Frase ingresada: ${frase}`);
frase = frase.toLowerCase();

let cont = 0, i = 0;
const vocales = ['a','e','i','o','u'];

while(i < frase.length){
    if(vocales.includes(frase[i])){
        cont++;
    }
    i++;
}

console.log(`>> Total de vocales en la frase: ${cont}`);