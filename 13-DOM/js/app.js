// Seleccionar elementos o contenedores del HTML
// document.
let elemento;

elemento = document.all;
elemento = document.head; // Encabezado
elemento = document.body; // Cuerpo (Todo)
elemento = document.domain;

elemento = document.forms; // Formularios
elemento = document.forms[0]; // Seleccionar por indice
elemento = document.forms[0].id; // Identificador
elemento = document.forms[0].method; // Metodo (POST o GET)

elemento = document.links; // Enlaces
elemento = document.links[4]; // Seleccionar por indice
elemento = document.links[4].classList; // Lista de Clases
elemento = document.links[4].className; // Clase

elemento = document.images; // Imagenes
elemento = document.scripts; // Enlace a archivos JavaScript

console.log(elemento);