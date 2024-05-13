console.log('Ejercicio 2: Pumagram');

const btnMeGusta = document.querySelector('.like-btn');
const contLikes = document.querySelector('.like-count');
const imagenPost = document.querySelector('.post-image');
const containerComentarios = document.querySelector('.comments-container');
const inputComentario = document.querySelector('.comment-input');
const btnComentario = document.querySelector('.add-comment-btn');

// Cargar likes y comentarios del LocalStorage
let likes = localStorage.getItem('likes');
let comments = JSON.parse(localStorage.getItem('comments')) || [];
contLikes.textContent = likes || 0;

document.addEventListener('DOMContentLoaded', function(){
    // EventListeners
    cargarEventListeners();
    function cargarEventListeners(){
        btnMeGusta.addEventListener('click', alternarMeGusta);
        imagenPost.addEventListener('dblclick', postMeGusta);
        btnComentario.addEventListener('click', agregarComentario);
    }

    /*----- Funciones principales -----*/
    // Click en Me Gusta
    function alternarMeGusta(){
        if(btnMeGusta.textContent === 'Me gusta'){
            likes++;
            contLikes.textContent = likes;
            btnMeGusta.textContent = 'No me gusta';
        }else{
            likes--;
            contLikes.textContent = likes;
            btnMeGusta.textContent = 'Me gusta';
        }
        localStorage.setItem('likes', likes);
    }

    // Doble click en la imagen
    let laikeado = false;
    function postMeGusta(){
        if(laikeado){
            likes--;
            contLikes.textContent = likes;
            btnMeGusta.textContent = 'Me gusta';
            laikeado = false;
        }else{
            likes++;
            contLikes.textContent = likes;
            btnMeGusta.textContent = 'No me gusta';
            laikeado = true;
        }
        localStorage.setItem('likes', likes);
    }
    
    // Ingresar comentario
    function agregarComentario(){
        const texto = inputComentario.value.trim();
        if(texto !== ''){
            const divComentario = document.createElement('div');
            divComentario.classList.add('comment');
            divComentario.innerHTML = `
            <span class="comment-username">Usuario:</span>
            <span class="comment-text">${texto}</span>
            `;
            containerComentarios.appendChild(divComentario);

            comments.push({
                username: 'Usuario',
                text: texto
            });
            // Guardar comentario en el LocalStorage
            localStorage.setItem('comments', JSON.stringify(comments));
            inputComentario.value = '';
        }
    }

    // Imprimir comentarios
    comments.forEach(comentario => {
        const divComentario = document.createElement('div');
        divComentario.classList.add('comment');
        divComentario.innerHTML = `
        <span class="comment-username">${comentario.username}:</span>
        <span class="comment-text">${comentario.text}</span>
        `;
        containerComentarios.appendChild(divComentario);
    });
});