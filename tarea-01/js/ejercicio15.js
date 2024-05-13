console.log('Verificacion de contraseña');

const passw1 = prompt('Ingresar contraseña');
const passw2 = 'numero123';

console.log(`Contraseña predefinida: ${passw2}`);
console.log(`Contraseña ingresada: ${passw1}`);

if(passw1 === passw2){
    console.log('Las contraseñas coinciden correctamente');
}else{
    console.log('Error: Las contraseñas no coinciden');
}