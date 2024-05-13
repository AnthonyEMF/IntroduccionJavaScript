let resultado;

// Pi
resultado = Math.PI;
console.log(`Pi: ${resultado}`);

// Redondear
resultado = Math.round(2.9);
resultado = Math.round(2.2);
resultado = Math.round(2.5);
console.log(resultado);

// Redondear hacia arriba
resultado = Math.ceil(2.1);
console.log(resultado);

// Redondear hacia abajo
resultado = Math.floor(64.9);
resultado = Math.floor(64.1);
console.log(resultado);

// Raiz cuadrada
resultado = Math.sqrt(9);
console.log(`Raiz cuadrada de 9: ${resultado}`);

// Elevar numeros
resultado = Math.pow(8, 2);
console.log(`8 a la 2: ${resultado}`);

// Minimo
resultado = Math.min(7, 10, 16, 11, 3);
console.log(`El minimo: ${resultado}`);

// Maximo
resultado = Math.max(7, 10, 16, 11, 3);
console.log(`El maximo: ${resultado}`);

// Numero aleatorio
resultado = Math.random();
resultado = Math.random() * 20;
resultado = Math.round(Math.random() * 20);
console.log(`Aleatorio: ${resultado}`);