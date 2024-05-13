// Eliminar un elemento del HTML
// .remove() y .removeChild()

const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

const navegacion = document.querySelector('.navegacion');
navegacion.removeChild(navegacion.children[2]);
console.log(navegacion.children); // remover los hijos de un elemento padre