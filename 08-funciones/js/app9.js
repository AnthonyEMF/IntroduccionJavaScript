// Objeto con funciones flecha
const reproductor = {
    reproducir: id => console.log(`Reproduciendo la cancion: ${id}`),
    pausar: () => console.log('Pausando musica...'),
    crearPlaylist: nombre => console.log(`Playlist ${nombre} creada`),
    reproducirPlaylist: nombre => console.log(`Reproducinedo Playlist ${nombre}`)
}

//console.log(reproductor);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.crearPlaylist('Las mamalonas');
reproductor.reproducirPlaylist('Las mamalonas');

reproductor.borrar = function(id) {
    console.log(`Borrando cancion ${id}`);
}

reproductor.borrar(40);