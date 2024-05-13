// Recorrer elementos padre e hijos
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//console.log(navegacion.childNodes);
//console.log(navegacion.children);
//console.log(navegacion.children[0].nodeName);
//console.log(navegacion.children[0].nodeType);
//console.log(navegacion.children[1]);
//console.log(navegacion.children[2]);

const card = document.querySelector('.card');
//console.log(card.children[1].children);
//card.children[1].children[1].textContent = 'Nuevo titulo';

//console.log(card.parentElement.parentElement.parentElement.parentElement);
//console.log(card);
//console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
//console.log(ultimoCard);
//console.log(ultimoCard.previousElementSibling);

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);