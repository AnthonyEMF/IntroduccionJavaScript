console.log('Ejercicio 10: Determinar si el triangulo es valido');

let angulo1 = parseInt(prompt('Ingresar primer angulo:'));
let angulo2 = parseInt(prompt('Ingresar segundo angulo:'));
let angulo3 = parseInt(prompt('Ingresar tercer angulo:'));
console.log(`Primer angulo: ${angulo1}`);
console.log(`Segundo angulo: ${angulo2}`);
console.log(`Tercer angulo: ${angulo3}`);

if(angulo1 + angulo2 + angulo3 === 180){
    console.log('>> El triangulo si es valido');
}else{
    console.log('>> Los angulos proporcionados no corresponden al de un triangulo');
}