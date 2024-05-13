const numero1 = 20;
const numero2 = '20';
const numero3 = 30;

// Igualdad o comparacion
console.log(`El ${numero1} es igual que ${numero3} ${numero1 == numero3}`);
console.log(`El ${numero1} es igual que ${numero2} ${numero1 == numero2}`);

// Comprobar de forma estricta tanto el valor como el tipo de dato
console.log(`El ${numero1} es igual que ${numero2} ${numero1 === numero2}`);
console.log(`El ${numero1} es igual que ${numero2} ${numero1 === parseInt(numero2)}`);

// Direfentes
const password1 = 'p12345';
const password2 = 'P12345';

console.log(password1 != password2);
console.log(password1 !== password2);