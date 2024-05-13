const nombre = '        Juan Perez         ';

console.log(nombre);
console.log(nombre.length);

// Eliminar espacios
console.log(nombre.trim());
console.log(nombre.trim().length);

// Eliminar espacios (principio)
console.log(nombre.trimStart());
console.log(nombre.trimStart().length);

// Eliminar espacios (final)
console.log(nombre.trimEnd());
console.log(nombre.trimStart().trimStart().length);
