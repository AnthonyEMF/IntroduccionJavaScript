const nombre = 'Juan Rodrigo Perez Mejia';

// Reemplazar texto por otra
console.log(nombre.replace('Rodrigo', 'R.'));
console.log(nombre.replace(' ', '-'));

// Extraer una parte de una cadena de texto
console.log(nombre.slice(0, 10));
console.log(nombre.slice(10));
console.log(nombre.slice(2, 1));

// Alternativa a Slice
console.log(nombre.substring(0, 10));
console.log(nombre.substring(10));
console.log(nombre.substring(2, 1));

const usuario = 'Juan Perez';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(1));